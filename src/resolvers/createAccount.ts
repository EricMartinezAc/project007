import { firebaseauthDTO } from "../server/dto/firebaseAuthDTO";
import { DataUser } from "../server/dto/dataUser";

import { firebase } from "../server/services/firebase.services";
import { ClassValidatorAuth } from "./Middlewares/ClassValidatorAuth";
import jwt from "jsonwebtoken";

export const createAccount = ({
  serv,
  name,
  email,
  password,
  password2,
}: firebaseauthDTO): DataUser => {
  if (!ClassValidatorAuth({ serv, name, email, password, password2 }))
    return { email, datatime: "null", data: "null" };

  console.log("01");
  const result = firebase.createAccount({ name, email, password });

  const datatime = Math.floor(Date.now() / 1000).toString();

  return { email, datatime, data: result };
};
