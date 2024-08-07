import { firebase } from "../server/services/firebase.services";

export const OutAccount = async (): Promise<any> => {
  try {
    const result = await firebase.signOut();
    console.log(result);
    return {
      email: "",
      datatime: Math.floor(Date.now() / 1000).toString(),
      data: result,
    };
  } catch (error) {
    throw new Error(`${error}`);
  }
};
