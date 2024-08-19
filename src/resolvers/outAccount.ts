import { CookiesDTO } from "../dto";
import { destroyAllCookies } from "../server/cookies";
import { firebase } from "../server/services/firebase.services";

export const OutAccount = async (cookies: CookiesDTO): Promise<void> => {
  try {
    if (!cookies) throw new Error("sin datos");
    destroyAllCookies(cookies, ["token", "entrepreneur"]);
    await firebase.signOut();
  } catch (error) {
    throw new Error(`${error}`);
  }
};
