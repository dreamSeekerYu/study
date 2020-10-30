[简易插件指南](https://www.jianshu.com/p/51c650f98d9c)

[Chrome 插件(扩展)开发全攻略](https://www.cnblogs.com/liuxianan/p/chrome-plugin-develop.html)

[手把手教你打造属于自己团队的前端小报系统](https://www.zoo.team/article/building-a-tabloid-system)

后期考虑做成 web 页面的形式,联网时可以自动更新

创建 manifest.json

```json
{
  "name": "name",
  "description": "描述",
  "version": "1.0",
  "manifest_version": 2, // 必须是2
  "browser_action": {
    "default_popup": "hello.html", //  入口展示文件
    "default_icon": "./img/logo.jpg" // logo 图标
  },
  //新增快捷键，通过键盘快速打开
  "commands": {
    "_execute_browser_action": {
      "suggested_key": {
        "default": "Ctrl+Shift+F",
        "mac": "MacCtrl+Shift+F"
      },
      "description": "Opens hello.html"
    }
  }
  //  插件编写完成之后 在扩展页面打包插件
  //  开启开发者模式
  //  第一次打包的时候，会生成一个pem个人密钥文件，以后再次打包的时候就需要密钥文件了。
  //  生成的 .crx 文件就是安装包文件
  //  然后在安装就可以使用了
}
```
