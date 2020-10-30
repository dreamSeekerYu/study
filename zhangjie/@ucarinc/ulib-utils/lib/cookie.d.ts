declare class Cookie {
    getCookies(key: string): string | null;
    setCookies(key: string, val: any, expires: number): void;
    removeCookies(key: string): void;
}
declare const cookieIns: Cookie;
export declare const cookie: Cookie;
export default cookieIns;
