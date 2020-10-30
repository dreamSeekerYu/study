'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsBase64 = require('js-base64');

/* eslint-disable no-bitwise */
/**
 * 加解密相关
 */

var Crypto =
/*#__PURE__*/
function () {
  function Crypto() {}

  var _proto = Crypto.prototype;

  _proto.en = function en(oldStr, enKey) {
    if (!oldStr) {
      return;
    } // 如果没有key, 取一个随机数做为密钥


    var key = enKey || this.random(); // 将经过url编码的字符串进行base64位编码

    var str = jsBase64.Base64.encode(encodeURIComponent(oldStr)); // 加密操作

    var keyLen = key.length;
    var strLen = str.length;
    var newStr = '';
    var i = 0;

    for (; i < strLen; i += 1) {
      newStr += String.fromCharCode(str.charCodeAt(i) ^ key.charCodeAt(i % keyLen));
    } // 如果有key, 传出base64编码后的加密字符串, 如果没有key, 传出加密字符串与key


    return enKey ? jsBase64.Base64.encode(newStr) : {
      str: jsBase64.Base64.encode(newStr),
      key: key
    };
  };

  _proto.de = function de(denStr, key) {
    var str = jsBase64.Base64.decode(denStr);
    var keyLen = key.length;
    var strLen = str.length;
    var newStr = '';
    var i = 0;

    for (; i < strLen; i += 1) {
      newStr += String.fromCharCode(str.charCodeAt(i) ^ key.charCodeAt(i % keyLen));
    }

    return decodeURIComponent(jsBase64.Base64.decode(newStr));
  };

  _proto.random = function random(num) {
    if (num === void 0) {
      num = 6;
    }

    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < num; i += 1) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  };

  return Crypto;
}();
/**
 * 加解密实例
 */


var crypto = new Crypto();
/**
 * base64实例
 */

var base64 = jsBase64.Base64;
var crypto$1 = new Crypto();

var crypto$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  crypto: crypto,
  base64: base64,
  'default': crypto$1
});

var Cookie =
/*#__PURE__*/
function () {
  function Cookie() {}

  var _proto = Cookie.prototype;

  _proto.getCookies = function getCookies(key) {
    var val = ''; // 查找cookie中的内容

    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i += 1) {
      var str = cookies[i].trim();

      if (str.indexOf(key + "=") === 0) {
        val = str.substring(key.length + 1, str.length);
        break;
      }
    }

    if (!val) {
      return null;
    } // 检查内容是否经过加密


    if (val.indexOf('en:/str:') === 0) {
      val = crypto$1.de(val.slice(8), key);
      return val;
    }

    return val;
  } // 过期时间, 毫秒
  ;

  _proto.setCookies = function setCookies(key, val, expires) {
    var expiresStr = '';
    var saveVal = val;

    if (expires) {
      var date = new Date();
      date.setTime(date.getTime() + expires * 1e3);
      expiresStr = "; expires=" + date.toUTCString();
    }

    if (typeof val !== 'string') {
      saveVal = JSON.stringify(val);
    } // 加密字符串值后存入cookie


    document.cookie = key + "=en:/str:" + crypto$1.en(saveVal, key) + expiresStr + "; path=/";
  };

  _proto.removeCookies = function removeCookies(key) {
    var date = new Date();
    var val = this.getCookies(key);
    date.setTime(date.getTime() - 1);
    var expires = "; expires=" + date.toUTCString();

    if (val !== null) {
      document.cookie = key + "=" + val + expires + "; path=/";
    }
  };

  return Cookie;
}();

var cookieIns = new Cookie();
var cookie = cookieIns;

var cookie$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  cookie: cookie,
  'default': cookieIns
});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var SK = 'sk_W8A_c@';
var STORE_TYPE;

(function (STORE_TYPE) {
  STORE_TYPE["local"] = "local";
  STORE_TYPE["session"] = "session";
  STORE_TYPE["cookie"] = "cookie";
})(STORE_TYPE || (STORE_TYPE = {}));

/**
 * 判断是否支持sessionStorage localstorage
 */
function localStorageSupported() {
  var storage = window.sessionStorage;

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

var Storage =
/*#__PURE__*/
function () {
  function Storage() {
    _defineProperty(this, "cookieS", new CookieStorage());

    _defineProperty(this, "localS", new LStorage());

    _defineProperty(this, "sessionS", new SStorage());

    _defineProperty(this, "supportLocalStore", localStorageSupported());
  }

  var _proto = Storage.prototype;

  /**
   * 是否是cookie存储器
   * @param s store
   */
  _proto.isCookieStorage = function isCookieStorage(s) {
    return s && s instanceof CookieStorage;
  }
  /**
   * 存入存储器中
   * @param key 存入的key
   * @param value 值
   * @param type 存入类型参考STORE_TYPE
   * @param options 存入设置
   */
  ;

  _proto.set = function set(key, value, type, options) {
    var _ref = options || {},
        _ref$awCookie = _ref.awCookie,
        awCookie = _ref$awCookie === void 0 ? false : _ref$awCookie,
        _ref$expire = _ref.expire,
        expire = _ref$expire === void 0 ? 0 : _ref$expire,
        _ref$enctry = _ref.enctry,
        enctry = _ref$enctry === void 0 ? false : _ref$enctry; // 获取存储


    var store = this.getStorage(type);
    var storeValue = {
      v: value
    }; // 如果是设置了过期, cookie自带过期

    if (expire && !this.isCookieStorage(store) && this.supportLocalStore) {
      storeValue.e = Date.now() + expire * 1e3;
    } // 如果是支持localstorage 或者 cookie


    if (this.supportLocalStore || this.isCookieStorage(store)) {
      var storeValueStr = JSON.stringify(storeValue); // 如果需要加密, cookie自带加解密

      if (enctry && !this.isCookieStorage(store)) {
        storeValueStr = crypto$1.en(storeValueStr, SK);
      }

      store.set(key, storeValueStr);
    } else if (awCookie) {
      this.cookieS.set(key, storeValue, {
        expire: expire
      });
    } else {
      console.error("\u8BE5\u6A21\u5F0F\u4E0B\u4E0D\u652F\u6301\u6B64\u5B58\u50A8, key:" + key);
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
  ;

  _proto.get = function get(key, type, options) {
    var _ref2 = options || {},
        _ref2$awCookie = _ref2.awCookie,
        awCookie = _ref2$awCookie === void 0 ? false : _ref2$awCookie,
        _ref2$enctry = _ref2.enctry,
        enctry = _ref2$enctry === void 0 ? false : _ref2$enctry; // 获取存储


    var store = this.getStorage(type);
    var value;

    try {
      // 如果支持本地存储或是cookie存储
      if (this.supportLocalStore || this.isCookieStorage(store)) {
        value = store.get(key);
      } else if (awCookie) {
        value = this.cookieS.get(key);
      } else {
        console.error("\u8BE5\u6A21\u5F0F\u4E0B\u4E0D\u652F\u6301\u6B64\u5B58\u50A8, key:" + key);
        return;
      }

      if (value) {
        // 如果是加密的, cookiestorage自带加解密
        if (enctry && !this.isCookieStorage(store)) {
          value = crypto$1.de(value, SK);
        }

        value = JSON.parse(value); // 判断是否是过期的, 过期清理

        if (value.e && Date.now() >= value.e) {
          this.remove(key, type, options);
          return;
        }

        return value.v;
      }
    } catch (e) {
      console.error("\u5B58\u50A8\u5931\u8D25key:" + key, e);
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
  ;

  _proto.remove = function remove(key, type, options) {
    var store = this.getStorage(type);

    if (this.supportLocalStore || this.isCookieStorage(store)) {
      store.remove(key);
      return true;
    }

    if (options && options.awCookie) {
      this.cookieS.remove(key);
      return true;
    }

    console.error("\u8BE5\u6A21\u5F0F\u4E0B\u4E0D\u652F\u6301\u6B64\u5B58\u50A8, key:" + key);
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
  ;

  _proto.getStorage = function getStorage(type) {
    // oppo vivo 太6, 只支持local
    var onlyLocal = sessionNotSupported();

    if (type === STORE_TYPE.cookie) {
      return this.cookieS;
    }

    if (type === STORE_TYPE.session && !onlyLocal) {
      return this.sessionS;
    }

    return this.localS;
  };

  return Storage;
}();

var CookieStorage =
/*#__PURE__*/
function () {
  function CookieStorage() {}

  var _proto2 = CookieStorage.prototype;

  _proto2.get = function get(k) {
    return cookieIns.getCookies(k);
  };

  _proto2.set = function set(k, v, opts) {
    return cookieIns.setCookies(k, v, opts ? opts.expire : 0);
  };

  _proto2.remove = function remove(k) {
    return cookieIns.removeCookies(k);
  };

  return CookieStorage;
}();

var LStorage =
/*#__PURE__*/
function () {
  function LStorage() {}

  var _proto3 = LStorage.prototype;

  _proto3.get = function get(k) {
    return localStorage.getItem(k);
  };

  _proto3.set = function set(k, v) {
    localStorage.setItem(k, v);
  };

  _proto3.remove = function remove(k) {
    localStorage.removeItem(k);
  };

  return LStorage;
}();

var SStorage =
/*#__PURE__*/
function () {
  function SStorage() {}

  var _proto4 = SStorage.prototype;

  _proto4.get = function get(k) {
    return sessionStorage.getItem(k);
  };

  _proto4.set = function set(k, v) {
    sessionStorage.setItem(k, v);
  };

  _proto4.remove = function remove(k) {
    sessionStorage.removeItem(k);
  };

  return SStorage;
}();

var storageIns = new Storage(); // local

function getLocal(key, options) {
  return storageIns.get(key, STORE_TYPE.local, options);
}
function setLocal(key, value, options) {
  return storageIns.set(key, value, STORE_TYPE.local, options);
}
function removeLocal(key, options) {
  storageIns.remove(key, STORE_TYPE.local, options);
} // session

function getSession(key, options) {
  return storageIns.get(key, STORE_TYPE.session, options);
}
function setSession(key, value, options) {
  return storageIns.set(key, value, STORE_TYPE.session, options);
}
function removeSession(key, options) {
  storageIns.remove(key, STORE_TYPE.session, options);
} // cookie

function getCookie(key, options) {
  return storageIns.get(key, STORE_TYPE.cookie, options);
}
function setCookie(key, value, options) {
  return storageIns.set(key, value, STORE_TYPE.cookie, options);
}
function removeCookie(key, options) {
  storageIns.remove(key, STORE_TYPE.cookie, options);
}

var storage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get STORE_TYPE () { return STORE_TYPE; },
  storageIns: storageIns,
  getLocal: getLocal,
  setLocal: setLocal,
  removeLocal: removeLocal,
  getSession: getSession,
  setSession: setSession,
  removeSession: removeSession,
  getCookie: getCookie,
  setCookie: setCookie,
  removeCookie: removeCookie,
  'default': storageIns
});

exports.cookie = cookie$1;
exports.crypto = crypto$2;
exports.storage = storage;
