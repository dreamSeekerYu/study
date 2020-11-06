import { Provide } from '@midwayjs/decorator';

@Provide()
export class ApiService {
  async getList() {
    console.log(this)
    // const user = await this.app.mysql.get('performanceError');
    // return {
    //   uid: options.uid,
    //   username: 'mockedName',
    //   phone: '12345678901',
    //   email: 'xxx.xxx@xxx.com',
    // };
  }
}
