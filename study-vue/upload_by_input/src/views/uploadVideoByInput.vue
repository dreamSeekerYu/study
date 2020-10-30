<template>
  <div>
    123123
    <input
      type="file"
      accept="video/*"
      ref="inputFile"
      capture="camcorder"
      id="upload-video"
      name="upload"
      :style="{display: 'none'}"
      @change="handleUploadInputChange"
    />
    <video ref="video" :style="{display: 'none'}" v-on:loadedmetadata="handleVideoLoadedmetadata">
      <track kind="captions" />
    </video>
  </div>
</template>

<script>
export default {
  methods: {
    // 触发file input点击事件
    triggerUpload() {
      this.$refs.inputFile.click()
    },
    // 人脸识别次数校验
    async preCheck() {
      try {
        await preCheckForUploadVideo({
          businessNo: this.vuexRecruitId,
          businessType: 1
        })
        this.showUploadDialog = true
      } catch (error) {
        this.$alert('人脸识别拒绝次数超上限，请明日再试')
      }
    },
    // 读取视频大小
    handleUploadInputChange(e) {
      this.checked = false
      this.showUploadDialog = false
      const file = e.target.files[0]
      this.videoInfo.currentFile = file
      this.videoInfo.currentFileSize = file.size
      const video = this.$refs.video
      this.$loading.show()
      if (video) {
        video.preload = 'metadata'
        video.setAttribute('controls', 'true')
        video.src = URL.createObjectURL(file)
        video.load()
      }
      const reader = new FileReader()
      reader.onloadend = ev => {
        const videoBase64 = ev.target.result.split('base64,')[1]
        this.videoInfo.currentFileBaseSize = videoBase64.length
        setTimeout(() => {
          this.check()
        }, 1000)
      }
      reader.readAsDataURL(file)
    },
    // 获取video媒体信息
    handleVideoLoadedmetadata() {
      const video = this.$refs.video
      if (video && video.duration) {
        this.videoInfo.duration = video.duration
      }
      this.check()
    },
    // 检查视频大小是否控制在要求内
    check() {
      if (this.checked) return
      this.checked = true
      this.$loading.hidden()
      // 大于30M提示不可上传
      const FILE_SIZE = this.videoInfo.currentFileSize
      if (FILE_SIZE > 1024 * 1024 * 30) {
        this.$refs.inputFile.value = ''
        this.$alert({
          type: 'confirm',
          dsc: '您上传的视频超过30M，不支持上传，请将视频录制控制在5秒以内',
          showCancel: true,
          center: true,
          okText: '重新录制',
          cancelText: '关闭',
          callback: () => {
            this.triggerUpload()
          }
        })
        return
      }
      if (
        this.videoInfo.duration &&
        this.videoInfo.duration >= this.baseData.maxDuration
      ) {
        this.$refs.inputFile.value = ''
        this.$alert({
          type: 'confirm',
          dsc: '您上传的视频时间过长，请将视频录制控制在5秒以内',
          showCancel: true,
          center: true,
          okText: '重新录制',
          cancelText: '关闭',
          callback: () => {
            this.triggerUpload()
          }
        })
        return
      }
      // 小于5M可直接上传，大于5M需要进行提示
      if (FILE_SIZE < 1024 * 1024 * 5) {
        this.upload()
      } else {
        const size = (FILE_SIZE / (1024 * 1024)).toFixed(1)
        this.$alert({
          type: 'confirm',
          dsc: `您上传的视频为${size}M，需要一些上传时间，是否确认上传`,
          showCancel: true,
          center: true,
          okText: '确定上传',
          cancelText: '关闭',
          callback: () => {
            this.upload()
          },
          cancelCallback: () => {
            this.$refs.inputFile.value = ''
          }
        })
      }
    },
    // 查询此招募申请单状态，若未绑定外部车辆，则弹窗提示
    async confirmBindVehicle() {
      try {
        const res = await getRecruitProgress({ recruitId: this.vuexRecruitId })
        const { vehicleCheckStatus } = res.recruitApply
        if (vehicleCheckStatus === 0 && this.vuexCurrentCity.hasCar === 1) {
          this.$alert({
            type: 'confirm',
            dsc: '若您的加入方式为带车加入，需要绑定车辆',
            showCancel: true,
            center: true,
            okText: '立即绑定车辆',
            cancelText: '下次再说',
            callback: () => {
              this.$router.push('/vehicle-info')
            },
            cancelCallback: () => {
              this.changeStatusToReviewInfo()
              this.$router.push(`/progress-info?id=${this.vuexRecruitId}`)
            }
          })
        } else {
          this.$alert(
            {
              type: 'success',
              content: '报名信息已成功提交',
              status: 'ok',
              callback: () => {
                this.changeStatusToReviewInfo()
                this.$router.push(`/progress-info?id=${this.vuexRecruitId}`)
              }
            },
            1000
          )
        }
      } catch (error) {
        this.$alert(error.message)
      }
    },
    // 发起人脸识别请求
    async faceCompare(videoNo, videoCount, fileExt, delay) {
      const q = new Promise((resolve, reject) => {
        setTimeout(() => {
          faceCompare({
            videoNo,
            videoCount,
            businessNo: this.vuexRecruitId,
            businessType: '1',
            orderNo: this.orderNo,
            videoSuffix: fileExt,
            idCardName: this.name,
            idCardNumber: this.idcard
          })
            .then(() => {
              resolve()
            })
            .catch(_ => {
              reject(new Error('人脸识别失败'))
            })
        }, delay)
      })
      await q
    },
    // 人脸识别完成后进行二次确认请求
    async checkStatus() {
      try {
        const res = await checkStatusAfterFaceCompare({
          recruitId: this.vuexRecruitId
        })
        if (res) {
          await this.confirmBindVehicle()
        }
      } catch (error) {
        this.$refs.inputFile.value = ''
      }
    },
    // 轮训当前人脸识别状态
    async rotateQuery(queryUploadStatusInterval) {
      this.timer = setTimeout(async () => {
        try {
          const res = await queryUploadStatus({
            businessType: 1,
            businessNo: this.vuexRecruitId
          })
          // resultStatus === 2则为进行中，需要进行再次轮训
          if (res.resultStatus !== 2) {
            if (this.timer) {
              clearTimeout(this.timer)
            }
            this.$loading.hidden()
            if (res.driverCheckStatus === -1) {
              this.$alert('审核已拒绝')
              this.changeStatusToReviewInfo()
              this.$router.replace(`/progress-info?id=${this.vuexRecruitId}`)
              return
            }
            // resultStatus === 1则为已完成，不再需要进行轮训
            if (res.resultStatus === 1) {
              if (res.driverCheckStatus !== 3 || res.faceStatus !== 1) {
                this.$refs.inputFile.value = ''
                this.$alert(res.faceFailMsg || '系统请求失败，请重新验证')
                return
              }
              await this.confirmBindVehicle()
              return
            }
            if (res.resultStatus === 3) {
              this.$refs.inputFile.value = ''
              this.$alert('系统请求失败，请重新验证')
              return
            }
            this.changeStatusToReviewInfo()
            this.$router.replace(`/progress-info?id=${this.vuexRecruitId}`)
          } else {
            this.rotateQuery(queryUploadStatusInterval)
          }
        } catch (error) {
          if (this.timer) {
            clearTimeout(this.timer)
          }
          this.$refs.inputFile.value = ''
          this.$alert('系统请求失败，请重新验证')
        }
      }, queryUploadStatusInterval * 1000)
    },
    // 分片上传视频
    async upload() {
      this.$loading.show('正在为您处理报名申请请耐心等待')
      const FILE_SIZE = this.videoInfo.currentFileSize

      // 获取当前文件
      const ONE_MAX_SIZE = this.baseData.splitSize * 1024 * 1024
      // const FILE_TYPE = (currentFile as File).type;
      let start = 0
      let end = ONE_MAX_SIZE
      const blobList = []
      let isError = false
      // 循环分片上传
      while (start < FILE_SIZE) {
        blobList.push(this.videoInfo.currentFile.slice(start, end))
        start = end
        end = start + ONE_MAX_SIZE
      }

      const fileExt = this.videoInfo.currentFile.name.substring(
        this.videoInfo.currentFile.name.indexOf('.') + 1,
        this.videoInfo.currentFile.name.length
      )

      const videoNo = `${Date.now()}_${(Math.random() * 1000000).toFixed(0)}`
      const videoCount = blobList.length
      let faceCompareBlockingTime = 0
      let queryUploadStatusInterval = 0
      for (let i = 0; i < blobList.length; i += 1) {
        this.process = {
          max: blobList.length,
          current: i
        }
        const blob = blobList[i]
        const formData = new FormData()
        formData.append('videoCount', `${videoCount}`)
        formData.append('videoIndex', `${i + 1}`)
        formData.append('businessNo', `${this.vuexRecruitId}`)
        formData.append('businessType', '1')
        formData.append('videoNo', videoNo)
        formData.append('videoSuffix', fileExt)
        formData.append('part', blob)
        try {
          // eslint-disable-next-line no-await-in-loop
          const res = await uploadToServer(formData, true, this.$loading)
          if (i === blobList.length - 1) {
            faceCompareBlockingTime = res.faceCompareBlockingTime
            queryUploadStatusInterval = res.queryUploadStatusInterval
          }
        } catch (error) {
          this.$refs.inputFile.value = ''
          this.$alert(`系统请求失败，请重新验证`)
          isError = true
          break
        }
      }
      if (isError) return
      try {
        await this.faceCompare(
          videoNo,
          videoCount,
          fileExt,
          faceCompareBlockingTime * 1000
        )
      } catch (error) {
        this.$refs.inputFile.value = ''
        this.$alert('系统请求失败，请重新验证')
        return
      }
      this.rotateQuery(queryUploadStatusInterval)
    },
    // 获取唇语
    async getLips() {
      const res = await getFaceCode({
        businessNo: this.vuexRecruitId,
        businessType: 1
      })
      this.lips = res.lips
      this.orderNo = res.orderNo
    }
  }
}
</script>

<style lang="scss" scoped>
.video-info {
  p {
    text-align: center;
  }

  .header {
    background-color: #fff;
    padding: 60px 0;
    line-height: 1.5;
    // font-size: $ucar_font_h4;
  }

  .body {
    box-sizing: border-box;
    min-height: 800px;
    flex: 1 0 800px;
    background-color: #fff;
    // background-image: url('../../assets/video-info-bg.png');
    background-size: 100% auto;
    background-repeat: no-repeat;
    padding-top: 614px;

    .small {
      // font-size: $ucar_font-h3-5;
      line-height: 1;
    }

    .big {
      margin-top: 30px;
      // font-size: $ucar_font_huge;
      line-height: 1;
    }
  }

  .footer {
    background-color: #fff;
    padding: 30px;
  }
}
</style>
