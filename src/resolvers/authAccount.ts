import { ResponseFirebaseDTO, userDTO } from "../dto";

import { firebase } from "../server/services/firebase.services";
import { ClassValidatorAuth } from "./Middlewares/ClassValidatorAuth";

export const authAccount = async (
  serv: string,
  { name, email, password, entrepreneur }: userDTO
): Promise<ResponseFirebaseDTO> => {
  if (!ClassValidatorAuth({ serv, name, email, password, entrepreneur })) {
    throw new Error(
      "los datos deben cumplir políticas. Clic en ícono de interrogación '?' para más detalles."
    );
  }
  const datatime = Math.floor(Date.now() / 1000).toString();
  try {
    const result = await firebase.signIn({
      name,
      photoURL: "",
      email,
      password,
      datatime,
      entrepreneur,
    });
    console.log(result);
    return result;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
