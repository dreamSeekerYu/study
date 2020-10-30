/* eslint-disable max-classes-per-file */
import cookieUtils from './cookie';
import crypto from './crypto';

const SK = 'sk_W8A_c@';

export enum STORE_TYPE {
  local = 'local',
  session = 'session',
  cookie = 'cookie',
}

export interface IStorage {
  get: (key: string) => any;
  set: (key: string, value: any, options?: ISetOptions) => any;
  remove: (key: string) => any;
}

export interface ISetOptions {
  expire: number; // 过期时间 单位毫秒
  awCookie?: boolean; // 不支持本地存储时是否使用cookie存储
  enctry?: boolean; // 加密
}

/**
 * 判断是否支持sessionStorage localstorage
 */
function localStorageSupported() {
  const storage = window.sessionStorage;
  try {
    storage.setItem('z', '0');
    storage.removeItem('z');
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * 是否支持sessionStorage 有浏览器存入不报错但是就是存不进去
 */
function sessionNotSupported() {
  // const userAgent = window.navigator.userAgent.toLowerCase();
  // const isVivo = userAgent.indexOf('vivo') > -1;
  // const isOppo = userAgent.indexOf('oppo') > -1;
  // return isVivo || isOppo;
  return false;
}

class Storage {
  // cookie存储器
  private cookieS: IStorage = new CookieStorage();

  // localstorage 存储器
  private localS: IStorage = new LStorage();

  // sessionstorage 存储器
  private sessionS = new SStorage();

  // 检测本地是否支持localstorage
  private supportLocalStore = localStorageSupported();

  /**
   * 是否是cookie存储器
   * @param s store
   */
  isCookieStorage(s: any) {
    return s && s instanceof CookieStorage;
  }

  /**
   * 存入存储器中
   * @param key 存入的key
   * @param value 值
   * @param type 存入类型参考STORE_TYPE
   * @param options 存入设置
   */
  set(key: string, value: any, type: STORE_TYPE, options?: ISetOptions) {
    const { awCookie = false, expire = 0, enctry = false } = options || {};

    // 获取存储
    const store = this.getStorage(type);

    const storeValue: any = { v: value };
    // 如果是设置了过期, cookie自带过期
    if (expire && !this.isCookieStorage(store) && this.supportLocalStore) {
      storeValue.e = Date.now() + expire * 1e3;
    }

    // 如果是支持localstorage 或者 cookie
    if (this.supportLocalStore || this.isCookieStorage(store)) {
      let storeValueStr = JSON.stringify(storeValue);

      // 如果需要加密, cookie自带加解密
      if (enctry && !this.isCookieStorage(store)) {
        storeValueStr = crypto.en(storeValueStr, SK) as string;
      }

      store.set(key, storeValueStr);
    } else if (awCookie) {
      this.cookieS.set(key, storeValue, { expire });
    } else {
      console.error(`该模式下不支持此存储, key:${key}`);
      return;
    }

    return value;
  }

  /**
   * 获取存储器中
   * @param key 获取的key
   * @param type 获取类型参考STORE_TYPE
   * @param options 获取设置与设置相同
   */
  get(key: string, type: STORE_TYPE, options?: ISetOptions) {
    const { awCookie = false, enctry = false } = options || {};

    // 获取存储
    const store = this.getStorage(type);

    let value;
    try {
      // 如果支持本地存储或是cookie存储
      if (this.supportLocalStore || this.isCookieStorage(store)) {
        value = store.get(key);
      } else if (awCookie) {
        value = this.cookieS.get(key);
      } else {
        console.error(`该模式下不支持此存储, key:${key}`);
        return;
      }

      if (value) {
        // 如果是加密的, cookiestorage自带加解密
        if (enctry && !this.isCookieStorage(store)) {
          value = crypto.de(value, SK);
        }

        value = JSON.parse(value);
        // 判断是否是过期的, 过期清理
        if (value.e && Date.now() >= value.e) {
          this.remove(key, type, options);
          return;
        }
        return value.v;
      }
    } catch (e) {
      console.error(`存储失败key:${key}`, e);
      return;
    }

    return value;
  }

  /**
   * 移除值从存储器中
   * @param key key
   * @param type 类型参考STORE_TYPE
   * @param options 设置与存入相同
   * @returns 返回是否移除成功
   */
  remove(key: string, type: STORE_TYPE, options?: ISetOptions) {
    const store = this.getStorage(type);

    if (this.supportLocalStore || this.isCookieStorage(store)) {
      store.remove(key);
      return true;
    }

    if (options && options.awCookie) {
      this.cookieS.remove(key);
      return true;
    }

    console.error(`该模式下不支持此存储, key:${key}`);
    return false;
  }

  /**
   * 获取存储类型 default: localstorage
   *
   * @author xiaolong.li01 <xiaolong.li01@ucarinc.com>
   * @date 2020-03-21
   * @param {STORE_TYPE} type
   * @returns
   * @memberof Storage
   */
  getStorage(type: STORE_TYPE) {
    // oppo vivo 太6, 只支持local
    const onlyLocal = sessionNotSupported();
    if (type === STORE_TYPE.cookie) {
      return this.cookieS;
    }
    if (type === STORE_TYPE.session && !onlyLocal) {
      return this.sessionS;
    }

    return this.localS;
  }
}

class CookieStorage implements IStorage {
  get(k: string) {
    return cookieUtils.getCookies(k);
  }

  set(k: string, v: any, opts?: ISetOptions) {
    return cookieUtils.setCookies(k, v, opts ? opts.expire : 0);
  }

  remove(k: string) {
    return cookieUtils.removeCookies(k);
  }
}

class LStorage implements IStorage {
  get(k: string) {
    return localStorage.getItem(k);
  }

  set(k: string, v: any) {
    localStorage.setItem(k, v);
  }

  remove(k: string) {
    localStorage.removeItem(k);
  }
}

class SStorage implements IStorage {
  get(k: string) {
    return sessionStorage.getItem(k);
  }

  set(k: string, v: any) {
    sessionStorage.setItem(k, v);
  }

  remove(k: string) {
    sessionStorage.removeItem(k);
  }
}

export const storageIns = new Storage();

// local
export function getLocal(key: string, options?: ISetOptions) {
  return storageIns.get(key, STORE_TYPE.local, options);
}

export function setLocal(key: string, value: any, options?: ISetOptions) {
  return storageIns.set(key, value, STORE_TYPE.local, options);
}

export function removeLocal(key: string, options?: ISetOptions) {
  storageIns.remove(key, STORE_TYPE.local, options);
}

// session
export function getSession(key: string, options?: ISetOptions) {
  return storageIns.get(key, STORE_TYPE.session, options);
}

export function setSession(key: string, value: any, options?: ISetOptions) {
  return storageIns.set(key, value, STORE_TYPE.session, options);
}

export function removeSession(key: string, options?: ISetOptions) {
  storageIns.remove(key, STORE_TYPE.session, options);
}

// cookie
export function getCookie(key: string, options?: ISetOptions) {
  return storageIns.get(key, STORE_TYPE.cookie, options);
}

export function setCookie(key: string, value: any, options?: ISetOptions) {
  return storageIns.set(key, value, STORE_TYPE.cookie, options);
}

export function removeCookie(key: string, options?: ISetOptions) {
  storageIns.remove(key, STORE_TYPE.cookie, options);
}

export default storageIns;
