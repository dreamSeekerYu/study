/* eslint-disable no-useless-escape */

const QQ = /MQQBrowser\/([\d\.]+)/;
const FIREFOX = /(?:Firefox|FxiOS)\/([\d\.]+)/;
const IOS_WEBVIEW = /OS ([\d_\.]+) like Mac OS X/;
const CHROME_WEBVIEW = /Version\/[\d+\.]+\s*Chrome/;
const MSIE = /MSIE\s([\d\.]+)/;
const IE_MOBILE = /IEMobile\/([\d\.]+)/;

declare global {
  interface Window {
    // eslint-disable-next-line camelcase
    __wxjs_environment: string;
  }
}
/**
 * 当前浏览器信息
 *
 * @author Liying <ly.boy2012@gmail.com>
 * @date 2019-12-30
 * @export
 * @interface IBrowser
 */
export interface IBrowser {
  /** 浏览器名称 */
  name: string;
  /** 是否是winPhone浏览器 */
  isWindowsPhone?: boolean;
  /** 是否是QQ浏览器 */
  isQQ?: boolean;
  /** 是否是火狐浏览器 */
  isFirefox?: boolean;
  /** 是否是IE移动浏览器 */
  isIEMobile?: boolean;
  /** 是否是IE浏览器 */
  isIE?: boolean;
  /** 安卓,苹果下的IE */
  isIELikeWebkit?: boolean;
  /** 是否是Chrome Webview */
  isWebview?: boolean;
  /** 是否是safari */
  isSafari?: boolean;
  /** 是否是android系统浏览器 */
  isAndroid?: boolean;
  /** 是否是chrome浏览器 */
  isChrome?: boolean;
  /** 浏览器版本 */
  version: string;
}

/**
 * 当前浏览器外部环境检测
 *
 * @author Liying <ly.boy2012@gmail.com>
 * @date 2019-12-30
 * @export
 * @interface IAppInfo
 */
export interface IAppInfo {
  /** 应用环境名称 */
  appname: string;
  /** 是否是微信公众号 */
  isWeixin?: boolean;
  /** 是否是微信小程序 */
  isWechat?: boolean;
  /** 是否是微博 */
  isWeibo?: boolean;
  /** 是否是专车应用内 old */
  isUCar?: boolean;
  /** 是否是专车应用内 new */
  isUCarinc?: boolean; // 新增是否在ucar webview 环境
  /** 只有在专车内容用可获取 平台 */
  platform?: string;
  /** 只有在专车内容用可获取 app版本 */
  version?: string;
  /** 只有在专车内容用可获取 api版本号 */
  apiNumber?: string;
}

/**
 * 当前浏览器系统环境检测
 *
 * @author Liying <ly.boy2012@gmail.com>
 * @date 2019-12-30
 * @export
 * @interface IOSInfo
 */
export interface IOSInfo {
  name: string; // 系统名字
  isWindowsPhone?: boolean;
  isIPhone?: boolean;
  isIPad?: boolean;
  isIOS?: boolean;
  isAndroid?: boolean;
  isAndroidPad?: boolean;
  version: string; // 系统版本
}

/**
 * unknown默认返回值
 */
const unknown: IBrowser = {
  name: 'unknown',
  version: '0.0.0',
};

/**
 * 获取当前系统环境
 *
 * @author Liying <ly.boy2012@gmail.com>
 * @date 2019-12-20
 * @export
 * @param {string} [userAgent] userAgent
 * @returns {IOSInfo}
 */
export function getOSInfo(userAgent?: string): IOSInfo {
  const ua: string = userAgent || navigator.userAgent;
  let matchs: RegExpMatchArray | null = ua.match(
    /Windows\sPhone\s(?:OS\s)?([\d\.]+)/
  );

  if (matchs !== null) {
    return {
      name: 'Windows Phone',
      isWindowsPhone: true,
      version: matchs[1],
    };
  }

  const isSafari: RegExpMatchArray | null = ua.match(/Safari/);
  matchs = ua.match(/Android[\s\/]([\d\.]+)/);
  const isAndroid: RegExpMatchArray | null = ua.match(/Mobile\s+Safari/);
  if (isSafari !== null && matchs !== null) {
    if (isAndroid !== null) {
      return {
        name: 'Android',
        isAndroid: true,
        version: matchs[1],
      };
    }
    return {
      name: 'AndroidPad',
      isAndroidPad: true,
      version: matchs[1],
    };
  }
  matchs = ua.match(/(iPhone|iPad|iPod)/);

  if (matchs !== null) {
    const name: string = matchs[1];
    matchs = ua.match(/OS ([\d_\.]+) like Mac OS X/);
    if (matchs !== null) {
      return {
        name,
        isIPhone: name === 'iPhone' || name === 'iPod',
        isIPad: name === 'iPad',
        isIOS: true,
        version: matchs[1].split('_').join('.'),
      };
    }
  }

  return unknown;
}

/**
 * 获得app环境信息
 *
 * @author Liying <ly.boy2012@gmail.com>
 * @date 2019-12-20
 * @export
 * @param {string} [userAgent] userAgent
 * @returns {IAppInfo}
 */
export function getAppInfo(userAgent?: string): IAppInfo {
  const ua: string = userAgent || navigator.userAgent;
  const matchs: RegExpMatchArray | null = ua.match(
    /UCAR(?:INC)?HybridWebView-(\w+)-(\d+)(-([\d\.]+))?/i
  );
  if (matchs !== null) {
    return {
      appname: 'UCar',
      isUCar: true,
      isUCarinc: /UCARINCHybridWebView/i.test(ua),
      platform: matchs[1],
      apiNumber: matchs[2],
      version: matchs[4],
    };
  }
  // eslint-disable-next-line
  if (/miniProgram/i.test(ua) || (window.__wxjs_environment === 'miniprogram')) {
    return {
      appname: 'Wechat',
      isWechat: true,
    };
  }

  if (/MicroMessenger/i.test(ua)) {
    return {
      appname: 'Weixin',
      isWeixin: true,
    };
  }

  if (/Weibo/i.test(ua)) {
    return {
      appname: 'Weibo',
      isWeibo: true,
    };
  }

  return {
    appname: 'unknown',
  };
}

/**
 * 获得浏览器环境信息
 *
 * @author Liying <ly.boy2012@gmail.com>
 * @date 2019-12-20
 * @export
 * @param {string} [userAgent] userAgent
 * @returns {IBrowser}
 */
export function getBrowserInfo(userAgent?: string): IBrowser {
  const ua: string = userAgent || navigator.userAgent;
  let matchs: RegExpMatchArray | null = ua.match(QQ);
  if (matchs !== null) {
    return {
      name: 'QQ',
      isQQ: true,
      version: matchs[1],
    };
  }
  matchs = ua.match(FIREFOX);
  if (matchs !== null) {
    return {
      name: 'Firefox',
      isFirefox: true,
      version: matchs[1],
    };
  }
  if (MSIE.test(ua) && IE_MOBILE.test(ua)) {
    matchs = ua.match(/IEMobile/);
    if (matchs !== null) {
      return {
        name: 'IEMobile',
        isIEMobile: true,
        version: matchs[1],
      };
    }
    matchs = ua.match(/Android|iPhone/);
    if (matchs !== null) {
      return {
        name: 'IE',
        isIELikeWebkit: true,
        version: matchs[1],
      };
    }
    matchs = ua.match(IE_MOBILE);
    if (matchs !== null) {
      return {
        name: 'IE',
        isIE: true,
        version: matchs[1],
      };
    }
  }
  if (/(?:Chrome|CriOS)\/([\d\.]+)/.test(ua)) {
    matchs = ua.match(CHROME_WEBVIEW);
    if (matchs !== null) {
      return {
        name: 'Chrome Webview',
        isWebview: true,
        version: matchs[1],
      };
    }
    matchs = ua.match(/(?:Chrome|CriOS)\/([\d\.]+)/);
    if (matchs !== null) {
      return {
        name: 'Chrome',
        isChrome: true,
        version: matchs[1],
      };
    }
  }
  // eslint-disable-next-line
  if (/Safari/.test(ua) && /Android[\s\/]([\d\.]+)/.test(ua)) {
    matchs = ua.match(/Android[\s\/]([\d\.]+)/);
    if (matchs !== null) {
      return {
        name: 'Android',
        isAndroid: true,
        version: matchs[1],
      };
    }
  }
  /* eslint-disable */
  if (
    /iPhone|iPad|iPod/.test(ua) &&
    /Safari/.test(ua) &&
    /Version\/([\d\.]+)/.test(ua)
  ) {
    matchs = ua.match(/Version\/([\d\.]+)/);
    if (matchs !== null) {
      return {
        name: 'Safari',
        isSafari: true,
        version: matchs[1],
      };
    }
    if (IOS_WEBVIEW.test(ua)) {
      matchs = ua.match(IOS_WEBVIEW);
      if (matchs !== null) {
        return {
          name: 'iOS Webview',
          isWebview: true,
          version: matchs[0].replace(/\_/g, '.'),
        };
      }
    }
  }

  return unknown;
};

export default {
  getBrowserInfo,
  getAppInfo,
  getOSInfo,
};
