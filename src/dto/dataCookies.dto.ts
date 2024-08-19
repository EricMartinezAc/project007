import { userDTO } from "./dataUser.dto";

export interface dataCookiesDTO {
  user?: userDTO;
  token?: string;
  entrepreneur?: boolean;
}
