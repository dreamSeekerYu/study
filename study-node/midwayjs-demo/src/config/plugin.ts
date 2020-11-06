import { EggPlugin } from 'egg';
export default {
  static: false, // default is true
  cors: {
    enable: true,
    package: 'egg-cors'
  },
  // mysql : {
  //   enable: true,
  //   package: 'egg-mysql',
  // }

} as EggPlugin;
