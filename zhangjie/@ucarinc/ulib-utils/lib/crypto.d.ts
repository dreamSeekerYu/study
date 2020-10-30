import { Base64 } from 'js-base64';
/**
 * 加解密相关
 */
declare class Crypto {
    en(oldStr: string, enKey?: string): string | {
        str: string;
        key: string;
    } | undefined;
    de(denStr: string, key: string): string;
    random(num?: number): string;
}
/**
 * 加解密实例
 */
export declare const crypto: Crypto;
/**
 * base64实例
 */
export declare const base64: typeof Base64;
declare const _default: Crypto;
export default _default;
