import { CookiesDTO, dataCookiesDTO } from "../../dto";

const defaultCookieOptions = {
  domain: "liiv-e.web.app",
  path: "/",
  secure: true,
  httpOnly: false,
  sameSite: "Strict",
  maxAge: 3600,
};

const localhostCookieOptions = {
  path: "/",
  secure: false,
  sameSite: "Strict",
  maxAge: 3600,
};

export const CreateOrUpdateCookies = async (
  cookies: CookiesDTO,
  data: dataCookiesDTO
) => {
  if (!data || !cookies) throw new Error("Sin datos");
  console.log(cookies, data);
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined) {
      cookies.set(key, value, defaultCookieOptions);
      console.log(cookies.get(key));

      if (window.location.hostname === "localhost") {
        cookies.set(key, value, localhostCookieOptions);
        console.log(cookies.get(key));
      }
    }
  });
};
