(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["header"],{5176:function(t,e,a){t.exports=a("51b6")},b8fb:function(t,e,a){},d443:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-upload",{attrs:{action:t.action,listType:"picture-card",fileList:t.fileList,remove:t.delFile,data:t.data},on:{preview:t.handlePreview,change:t.handleChange}},[!t.fileList.length&&t.defaultValue?[a("img",{staticStyle:{width:"100%"},attrs:{src:t.defaultValue,alt:""}})]:[t.fileList.length<2?a("div",[a("a-icon",{attrs:{type:"plus"}}),a("div",{staticClass:"ant-upload-text"},[t._v("上传")])],1):t._e()]],2),a("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handleCancel}},[a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1)},o=[],i=a("9ab4"),s=a("60a3"),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.previewVisible=!1,e.previewImage="",e.fileList=[],e}return i["c"](e,t),e.prototype.handlePreview=function(t){this.previewImage=t.url||t.thumbUrl,this.previewVisible=!0},e.prototype.delFile=function(t){this.fileList=[],this.onFileDel()},e.prototype.handleChange=function(t){var e=t.file;this.fileList=[e],console.log(e.status,e.response),"done"===e.status?this.onFileChange(e.response.url):"error"===e.status&&this.$message.error(e.response.msg)},e.prototype.handleCancel=function(){this.previewVisible=!1},i["b"]([Object(s["b"])({default:"https://www.mocky.io/v2/5cc8019d300000980a055e76"})],e.prototype,"action",void 0),i["b"]([Object(s["b"])()],e.prototype,"defaultValue",void 0),i["b"]([Object(s["b"])()],e.prototype,"data",void 0),i["b"]([Object(s["b"])({default:function(){}})],e.prototype,"onFileDel",void 0),i["b"]([Object(s["b"])({default:function(){}})],e.prototype,"onFileChange",void 0),e=i["b"]([s["a"]],e),e}(s["c"]),r=l,c=r,u=a("2877"),p=Object(u["a"])(c,n,o,!1,null,null,null);e["a"]=p.exports},e105:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index-wrap"},[a("div",{staticClass:"header-cate-wrap"},[a("a-row",[a("a-col",{staticClass:"column-tit",attrs:{xs:{span:5},lg:{span:2}}},[t._v("分类栏目:")]),a("a-col",{attrs:{span:18}},[t._l(t.headerConfig.columns,function(e,n){return[a("a-tag",{key:e,staticClass:"column-tag",attrs:{closable:n>1,afterClose:function(){return t.handleClose(e)},color:"#108ee9"}},[t._v("\n                  "+t._s(e)+"\n              ")])]}),t.inputVisible?a("a-input",{ref:"input",style:{width:"78px"},attrs:{type:"text",size:"small",value:t.inputValue},on:{change:t.handleInputChange,blur:t.handleInputConfirm,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm(e)}}}):a("a-tag",{staticClass:"column-tag",attrs:{color:"#87d068"},on:{click:t.showInput}},[a("a-icon",{attrs:{type:"plus"}}),t._v(" 添加标签\n              ")],1)],2)],1),a("a-row",[a("a-col",{staticClass:"column-tit",attrs:{xs:{span:5},lg:{span:2}}},[t._v("栏目高度:")]),a("a-col",{attrs:{span:18}},[a("a-input-number",{attrs:{min:40,max:100,value:t.headerConfig.height},on:{change:t.onChangeHeight}})],1)],1),a("a-row",[a("a-col",{staticClass:"column-tit",attrs:{xs:{span:5},lg:{span:2}}},[t._v("栏目背景:")]),a("a-col",{attrs:{span:18}},[a("input",{attrs:{type:"color"},domProps:{value:t.headerConfig.backgroundColor},on:{change:t.onChangeColor}}),a("div",{staticClass:"color-wrap"},[t._v("当前颜色："),a("span",{staticClass:"cur-color",style:{backgroundColor:t.headerConfig.backgroundColor}})])])],1),a("a-row",[a("a-col",{staticClass:"column-tit",attrs:{xs:{span:5},lg:{span:2}}},[t._v("网站logo:")]),a("a-col",{attrs:{span:18}},[a("upload",{attrs:{action:"/api/v0/files/uploadSingle",onFileDel:t.onFileDel,onFileChange:t.onFileChange,defaultValue:t.headerConfig.logo,data:t.uploadData}})],1)],1),a("a-row",{staticClass:"mt-30"},[a("a-col",{staticClass:"column-tit",attrs:{xs:{span:5},lg:{span:2}}}),a("a-col",{attrs:{span:18}},[a("a-button",{attrs:{type:"primary"},on:{click:t.saveHeader}},[t._v("保存")])],1)],1)],1)])},o=[],i=a("85f2"),s=a.n(i),l=a("5176"),r=a.n(l),c=(a("57e7"),a("9ab4")),u=a("60a3"),p=a("d443"),h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name="index",e.uploadData={source:"header"},e.inputVisible=!1,e.inputValue="",e}return c["c"](e,t),e.prototype.handleClose=function(t){this.$store.commit("delColumn",t)},e.prototype.showInput=function(){var t=this;this.inputVisible=!0,this.$nextTick(function(){t.$refs.input.focus()})},e.prototype.handleInputChange=function(t){this.inputValue=t.target.value},e.prototype.onChangeHeight=function(t){this.$store.commit("setColumnHeight",t)},e.prototype.onChangeColor=function(t){this.$store.commit("setColumnBgColor",t.target.value)},e.prototype.onFileDel=function(t){this.$store.commit("setLogo","")},e.prototype.onFileChange=function(t){this.$store.commit("setLogo",t)},e.prototype.handleInputConfirm=function(){var t=this.inputValue,e=this.headerConfig.columns;t&&-1===e.indexOf(t)&&this.$store.commit("addColumn",t),r()(this,{inputVisible:!1,inputValue:""})},e.prototype.saveHeader=function(){this.$store.dispatch("saveHeader",this.$store.state.config.header)},s()(e.prototype,"headerConfig",{get:function(){return this.$store.state.config.header},enumerable:!0,configurable:!0}),e=c["b"]([Object(u["a"])({components:{Upload:p["a"]}})],e),e}(u["c"]),d=h,f=d,g=(a("ef50"),a("2877")),m=Object(g["a"])(f,n,o,!1,null,"486b8c94",null);e["default"]=m.exports},ef50:function(t,e,a){"use strict";var n=a("b8fb"),o=a.n(n);o.a}}]);
//# sourceMappingURL=header.04a832e0.js.map