import { firebaseauthDTO } from "../server/dto/firebaseAuthDTO";
import { DataUser } from "../server/dto/dataUser";

import { firebase } from "../server/services/firebase.services";
import { ClassValidatorAuth } from "./Middlewares/ClassValidatorAuth";
import jwt from "jsonwebtoken";

export const createAccount = async ({
  serv,
  name,
  email,
  password,
  password2,
  entrepreneur,
}: firebaseauthDTO): Promise<DataUser> => {
  if (
    !ClassValidatorAuth({
      serv,
      name,
      email,
      password,
      password2,
      entrepreneur,
    })
  )
    throw new Error(
      "los datos deben cumplir políticas. Clic en ícono de interrogación '? para más detalles"
    );
  const datatime = Math.floor(Date.now() / 1000).toString();
  try {
    const result = await firebase.createAccount({
      name,
      email,
      password,
      entrepreneur,
    });
    console.log(result);
    return { email, datatime, data: result };
  } catch (error) {
    throw new Error(`${error}`);
  }
};
