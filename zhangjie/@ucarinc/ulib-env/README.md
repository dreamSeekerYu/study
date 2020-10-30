## ENV

环境检测库, 根据 userAgent 检测当前系统环境, 浏览器环境, 浏览器应用环境（专车 app，微信等）

### Install

npm:

```
npm install --save @ucarinc/ulib-env --registry  https://unpm.10101111.com
```

yarn:

```
yarn install @ucarinc/ulib-env --registry  https://unpm.10101111.com
```

### Usage

```
import env from '@ucarinc/ulib-env';

cosnt ua = '';

// ua为空或不传时默认用 window.navigator.userAgent
const appInfo = env.getAppInfo(ua);
const osInfo = env.getOSInfo(ua);
const browserInfo = env.getBrowserInfo(ua);

```

返回值详见 API 文档
