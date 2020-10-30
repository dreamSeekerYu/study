import crypto from './crypto';

class Cookie {
  getCookies(key: string) {
    let val = '';
    // 查找cookie中的内容
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i += 1) {
      const str = cookies[i].trim();
      if (str.indexOf(`${key}=`) === 0) {
        val = str.substring(key.length + 1, str.length);
        break;
      }
    }
    if (!val) {
      return null;
    }

    // 检查内容是否经过加密
    if (val.indexOf('en:/str:') === 0) {
      val = crypto.de(val.slice(8), key) as string;
      return val;
    }
    return val;
  }

  // 过期时间, 毫秒
  setCookies(key: string, val: any, expires: number) {
    let expiresStr = '';
    let saveVal = val;
    if (expires) {
      const date = new Date();
      date.setTime(date.getTime() + expires * 1e3);
      expiresStr = `; expires=${date.toUTCString()}`;
    }
    if (typeof val !== 'string') {
      saveVal = JSON.stringify(val);
    }
    // 加密字符串值后存入cookie
    document.cookie = `${key}=en:/str:${crypto.en(
      saveVal,
      key
    )}${expiresStr}; path=/`;
  }

  removeCookies(key: string) {
    const date = new Date();
    const val = this.getCookies(key);
    date.setTime(date.getTime() - 1);
    const expires = `; expires=${date.toUTCString()}`;
    if (val !== null) {
      document.cookie = `${key}=${val}${expires}; path=/`;
    }
  }
}

const cookieIns = new Cookie();

export const cookie = cookieIns;

export default cookieIns;
