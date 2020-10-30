declare global {
    interface Window {
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
    isUCarinc?: boolean;
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
    name: string;
    isWindowsPhone?: boolean;
    isIPhone?: boolean;
    isIPad?: boolean;
    isIOS?: boolean;
    isAndroid?: boolean;
    isAndroidPad?: boolean;
    version: string;
}
/**
 * 获取当前系统环境
 *
 * @author Liying <ly.boy2012@gmail.com>
 * @date 2019-12-20
 * @export
 * @param {string} [userAgent] userAgent
 * @returns {IOSInfo}
 */
export declare function getOSInfo(userAgent?: string): IOSInfo;
/**
 * 获得app环境信息
 *
 * @author Liying <ly.boy2012@gmail.com>
 * @date 2019-12-20
 * @export
 * @param {string} [userAgent] userAgent
 * @returns {IAppInfo}
 */
export declare function getAppInfo(userAgent?: string): IAppInfo;
/**
 * 获得浏览器环境信息
 *
 * @author Liying <ly.boy2012@gmail.com>
 * @date 2019-12-20
 * @export
 * @param {string} [userAgent] userAgent
 * @returns {IBrowser}
 */
export declare function getBrowserInfo(userAgent?: string): IBrowser;
declare const _default: {
    getBrowserInfo: typeof getBrowserInfo;
    getAppInfo: typeof getAppInfo;
    getOSInfo: typeof getOSInfo;
};
export default _default;
