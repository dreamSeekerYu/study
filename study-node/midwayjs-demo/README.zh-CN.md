# my_midway_project

{{description}}

## 快速入门

<!-- 在此次添加使用文档 -->

如需进一步了解，参见 [midway 文档][midway]。

### 本地开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 部署

```bash
$ npm start
$ npm stop
```

### 单元测试

- [midway-bin] 内置了 [mocha], [thunk-mocha], [power-assert], [istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert]。
- 具体参见 [midway 文档 - 单元测试](https://eggjs.org/zh-cn/core/unittest)。

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。


[midway]: https://midwayjs.org

[(语雀)中文文档](https://www.yuque.com/midwayjs/midway_v2/controller)


[Database(TypeORM) 配置数据库的链接操作](https://www.yuque.com/midwayjs/midway_v2/orm)

[配置 swagger api 展示](https://www.yuque.com/midwayjs/midway_v2/swagger)

访问：http://127.0.0.1:7002/swagger-ui/index.html 拿到 swagger UI 界面。
访问：http://127.0.0.1:7002/swagger-ui/json 拿到 swagger json 结构。