export declare enum STORE_TYPE {
    local = "local",
    session = "session",
    cookie = "cookie"
}
export interface IStorage {
    get: (key: string) => any;
    set: (key: string, value: any, options?: ISetOptions) => any;
    remove: (key: string) => any;
}
export interface ISetOptions {
    expire: number;
    awCookie?: boolean;
    enctry?: boolean;
}
declare class Storage {
    private cookieS;
    private localS;
    private sessionS;
    private supportLocalStore;
    /**
     * 是否是cookie存储器
     * @param s store
     */
    isCookieStorage(s: any): boolean;
    /**
     * 存入存储器中
     * @param key 存入的key
     * @param value 值
     * @param type 存入类型参考STORE_TYPE
     * @param options 存入设置
     */
    set(key: string, value: any, type: STORE_TYPE, options?: ISetOptions): any;
    /**
     * 获取存储器中
     * @param key 获取的key
     * @param type 获取类型参考STORE_TYPE
     * @param options 获取设置与设置相同
     */
    get(key: string, type: STORE_TYPE, options?: ISetOptions): any;
    /**
     * 移除值从存储器中
     * @param key key
     * @param type 类型参考STORE_TYPE
     * @param options 设置与存入相同
     * @returns 返回是否移除成功
     */
    remove(key: string, type: STORE_TYPE, options?: ISetOptions): boolean;
    /**
     * 获取存储类型 default: localstorage
     *
     * @author xiaolong.li01 <xiaolong.li01@ucarinc.com>
     * @date 2020-03-21
     * @param {STORE_TYPE} type
     * @returns
     * @memberof Storage
     */
    getStorage(type: STORE_TYPE): IStorage;
}
export declare const storageIns: Storage;
export declare function getLocal(key: string, options?: ISetOptions): any;
export declare function setLocal(key: string, value: any, options?: ISetOptions): any;
export declare function removeLocal(key: string, options?: ISetOptions): void;
export declare function getSession(key: string, options?: ISetOptions): any;
export declare function setSession(key: string, value: any, options?: ISetOptions): any;
export declare function removeSession(key: string, options?: ISetOptions): void;
export declare function getCookie(key: string, options?: ISetOptions): any;
export declare function setCookie(key: string, value: any, options?: ISetOptions): any;
export declare function removeCookie(key: string, options?: ISetOptions): void;
export default storageIns;
