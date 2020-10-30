/* eslint-disable no-bitwise */
import { Base64 } from 'js-base64';

/**
 * 加解密相关
 */
class Crypto {
  en(oldStr: string, enKey?: string) {
    if (!oldStr) {
      return;
    }
    // 如果没有key, 取一个随机数做为密钥
    const key = enKey || this.random();
    // 将经过url编码的字符串进行base64位编码
    const str = Base64.encode(encodeURIComponent(oldStr));
    // 加密操作
    const keyLen = key.length;
    const strLen = str.length;
    let newStr = '';
    let i = 0;
    for (; i < strLen; i += 1) {
      newStr += String.fromCharCode(
        str.charCodeAt(i) ^ key.charCodeAt(i % keyLen)
      );
    }
    // 如果有key, 传出base64编码后的加密字符串, 如果没有key, 传出加密字符串与key
    return enKey
      ? Base64.encode(newStr)
      : {
          str: Base64.encode(newStr),
          key,
        };
  }

  de(denStr: string, key: string) {
    const str = Base64.decode(denStr);
    const keyLen = key.length;
    const strLen = str.length;
    let newStr = '';
    let i = 0;
    for (; i < strLen; i += 1) {
      newStr += String.fromCharCode(
        str.charCodeAt(i) ^ key.charCodeAt(i % keyLen)
      );
    }
    return decodeURIComponent(Base64.decode(newStr));
  }

  random(num = 6) {
    let text = '';
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < num; i += 1) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}

/**
 * 加解密实例
 */
export const crypto = new Crypto();

/**
 * base64实例
 */
export const base64 = Base64;

export default new Crypto();
