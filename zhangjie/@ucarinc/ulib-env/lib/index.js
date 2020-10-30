'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/* eslint-disable no-useless-escape */
var QQ = /MQQBrowser\/([\d\.]+)/;
var FIREFOX = /(?:Firefox|FxiOS)\/([\d\.]+)/;
var IOS_WEBVIEW = /OS ([\d_\.]+) like Mac OS X/;
var CHROME_WEBVIEW = /Version\/[\d+\.]+\s*Chrome/;
var MSIE = /MSIE\s([\d\.]+)/;
var IE_MOBILE = /IEMobile\/([\d\.]+)/;

/**
 * unknown默认返回值
 */
var unknown = {
  name: 'unknown',
  version: '0.0.0'
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

function getOSInfo(userAgent) {
  var ua = userAgent || navigator.userAgent;
  var matchs = ua.match(/Windows\sPhone\s(?:OS\s)?([\d\.]+)/);

  if (matchs !== null) {
    return {
      name: 'Windows Phone',
      isWindowsPhone: true,
      version: matchs[1]
    };
  }

  var isSafari = ua.match(/Safari/);
  matchs = ua.match(/Android[\s\/]([\d\.]+)/);
  var isAndroid = ua.match(/Mobile\s+Safari/);

  if (isSafari !== null && matchs !== null) {
    if (isAndroid !== null) {
      return {
        name: 'Android',
        isAndroid: true,
        version: matchs[1]
      };
    }

    return {
      name: 'AndroidPad',
      isAndroidPad: true,
      version: matchs[1]
    };
  }

  matchs = ua.match(/(iPhone|iPad|iPod)/);

  if (matchs !== null) {
    var name = matchs[1];
    matchs = ua.match(/OS ([\d_\.]+) like Mac OS X/);

    if (matchs !== null) {
      return {
        name: name,
        isIPhone: name === 'iPhone' || name === 'iPod',
        isIPad: name === 'iPad',
        isIOS: true,
        version: matchs[1].split('_').join('.')
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

function getAppInfo(userAgent) {
  var ua = userAgent || navigator.userAgent;
  var matchs = ua.match(/UCAR(?:INC)?HybridWebView-(\w+)-(\d+)(-([\d\.]+))?/i);

  if (matchs !== null) {
    return {
      appname: 'UCar',
      isUCar: true,
      isUCarinc: /UCARINCHybridWebView/i.test(ua),
      platform: matchs[1],
      apiNumber: matchs[2],
      version: matchs[4]
    };
  } // eslint-disable-next-line


  if (/miniProgram/i.test(ua) || window.__wxjs_environment === 'miniprogram') {
    return {
      appname: 'Wechat',
      isWechat: true
    };
  }

  if (/MicroMessenger/i.test(ua)) {
    return {
      appname: 'Weixin',
      isWeixin: true
    };
  }

  if (/Weibo/i.test(ua)) {
    return {
      appname: 'Weibo',
      isWeibo: true
    };
  }

  return {
    appname: 'unknown'
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

function getBrowserInfo(userAgent) {
  var ua = userAgent || navigator.userAgent;
  var matchs = ua.match(QQ);

  if (matchs !== null) {
    return {
      name: 'QQ',
      isQQ: true,
      version: matchs[1]
    };
  }

  matchs = ua.match(FIREFOX);

  if (matchs !== null) {
    return {
      name: 'Firefox',
      isFirefox: true,
      version: matchs[1]
    };
  }

  if (MSIE.test(ua) && IE_MOBILE.test(ua)) {
    matchs = ua.match(/IEMobile/);

    if (matchs !== null) {
      return {
        name: 'IEMobile',
        isIEMobile: true,
        version: matchs[1]
      };
    }

    matchs = ua.match(/Android|iPhone/);

    if (matchs !== null) {
      return {
        name: 'IE',
        isIELikeWebkit: true,
        version: matchs[1]
      };
    }

    matchs = ua.match(IE_MOBILE);

    if (matchs !== null) {
      return {
        name: 'IE',
        isIE: true,
        version: matchs[1]
      };
    }
  }

  if (/(?:Chrome|CriOS)\/([\d\.]+)/.test(ua)) {
    matchs = ua.match(CHROME_WEBVIEW);

    if (matchs !== null) {
      return {
        name: 'Chrome Webview',
        isWebview: true,
        version: matchs[1]
      };
    }

    matchs = ua.match(/(?:Chrome|CriOS)\/([\d\.]+)/);

    if (matchs !== null) {
      return {
        name: 'Chrome',
        isChrome: true,
        version: matchs[1]
      };
    }
  } // eslint-disable-next-line


  if (/Safari/.test(ua) && /Android[\s\/]([\d\.]+)/.test(ua)) {
    matchs = ua.match(/Android[\s\/]([\d\.]+)/);

    if (matchs !== null) {
      return {
        name: 'Android',
        isAndroid: true,
        version: matchs[1]
      };
    }
  }
  /* eslint-disable */


  if (/iPhone|iPad|iPod/.test(ua) && /Safari/.test(ua) && /Version\/([\d\.]+)/.test(ua)) {
    matchs = ua.match(/Version\/([\d\.]+)/);

    if (matchs !== null) {
      return {
        name: 'Safari',
        isSafari: true,
        version: matchs[1]
      };
    }

    if (IOS_WEBVIEW.test(ua)) {
      matchs = ua.match(IOS_WEBVIEW);

      if (matchs !== null) {
        return {
          name: 'iOS Webview',
          isWebview: true,
          version: matchs[0].replace(/\_/g, '.')
        };
      }
    }
  }

  return unknown;
}
var index = {
  getBrowserInfo: getBrowserInfo,
  getAppInfo: getAppInfo,
  getOSInfo: getOSInfo
};

exports.default = index;
exports.getAppInfo = getAppInfo;
exports.getBrowserInfo = getBrowserInfo;
exports.getOSInfo = getOSInfo;
