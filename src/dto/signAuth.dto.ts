import { CookiesDTO } from "./cookies.dto";
import { userDTO } from "./dataUser.dto";

export interface SignAuthRegisterDTO {
  user: userDTO;
  setUser: any;
  cookies: CookiesDTO;
}
