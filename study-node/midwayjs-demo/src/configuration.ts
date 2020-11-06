// configuration.ts
import { Configuration } from '@midwayjs/decorator';
import * as swagger from '@midwayjs/swagger';

@Configuration({
  imports: [
    '@midwayjs/orm',           // 加载 orm 组件
    swagger                    // swagger 展示 api
  ]
})
export class ContainerConfiguratin {

}