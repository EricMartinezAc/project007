export interface CookiesDTO {
  set(key: string, value: string, options?: CookieAttributes): void;
  get(key: string, options?: CookieAttributes): string | undefined;
  remove(key: string, options?: CookieAttributes): void;
}
interface CookieAttributes {
  path?: string;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  expires?: Date | number;
  sameSite?: string;
}
