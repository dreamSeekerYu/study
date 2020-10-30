#### 配置 页面的访问路由相关信息

```
  进入页面，
    首先获取路由列表，根据标识判断是常规的静态页面还是配置出来的动态页面(路由守卫)
      is in routerList
    静态页面直接展示，
    动态页面根据路由的规则进行参数提取，根据参数拉取对应的页面url的json配置，然后根据json配置展示对应的页面
  用户正常使用

  访问链接(单独保存在数据库)
  url 携带参数与参数解析方式

  先用一个简单的脚手架实现简单的基础功能

  查询模块、操作模块、结果展示表格分装成子模块可以组合使用，也可以单独使用
  封装成npm 包发布出去

  封装成脚手架，自动化配置项目启动部署方案

```
  需要关闭表单校验，验证表单校验规则
  - [x] radio
  - [x] checkbox
  - [x] input / textarea
  - [x] passsword
  - [x] select
  - [x] switch
  - [x] silder
  - [ ] timePicker
  - [ ] datePicker
  - [ ] upload
  <!-- - [ ] rate -->
  <!-- - [ ] colorPicker -->



