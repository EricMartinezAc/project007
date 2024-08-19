import { ResponseFirebaseDTO, userDTO } from "../dto";

import { firebase } from "../server/services/firebase.services";
import { ClassValidatorAuth } from "./Middlewares/ClassValidatorAuth";

export const createAccount = async (
  serv: string,
  { name, photoURL, email, password, password2, entrepreneur }: userDTO
): Promise<ResponseFirebaseDTO> => {
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
      photoURL,
      email,
      datatime,
      password,
      entrepreneur,
    });
    console.log(result);
    return result;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
