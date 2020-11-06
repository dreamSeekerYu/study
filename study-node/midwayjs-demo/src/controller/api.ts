import { Inject, Param, Controller, Query, Body, Post, Get, Provide, ALL } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from '../service/user';
import { PhotoService } from '../service/photo';
import {
  CreateApiDoc,
  //  CreateApiPropertyDoc
} from '@midwayjs/swagger';


// export class UserDTO {

//   @CreateApiPropertyDoc('姓名')
//   @Rule(RuleType.string().required())
//   name: string;

//   @CreateApiPropertyDoc('年龄')
//   @Rule(RuleType.number())
//   age: number;
// }


@Provide()
@Controller('/api', { tagName: '分组1', description: '首页路由' })
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Inject()
  photoService: PhotoService;

  @CreateApiDoc() // swagger
    .summary('获取用户')
    .description('这是一个完整的获取用户的接口')
    .param('用户 id', {
      required: true,
      example: 2
    })
    .param('用户名')
    .respond(200, '正常返回', 'text', {
      example: 'hello world'
    })
    .respond(500, '抛出错误')
    .build()

  @Get('/get_user', { summary: '首页', description: '这是一个首页路由' })
  async getUser(@Param() id) {
    //  _csrf=uSQjkffbjcFSWRgO199pXFAH  需要将_csrf添加到 params 参数中
    const user = await this.userService.getUser({ uid: id });
    return { success: true, message: 'OK', data: user };
  }

  @Get('/list')
  async getList() {
    const list = await this.photoService.findPhotos()
    return { success: true, message: 'OK', data: { list } };
  }

  @Get('/uploadPerformanceData')
  async uploadPerformanceData(@Query(ALL) queryObject) {
    console.log('%c res....', 'color: red; font-style: italic', JSON.stringify(queryObject, null, 2))
    return { success: true, message: 'OK', queryObject };
  }

  @Post('/uploadPerformanceData')
  async uploadPerformanceDataPost(@Body(ALL) queryObject, @Query(ALL) pageIdx) {

    await this.photoService.savePhoto()
    console.log('%c res....', 'color: red; font-style: italic', JSON.stringify({ queryObject, pageIdx }, null, 2))
    return { success: true, message: 'OK', queryObject };
  }
}
