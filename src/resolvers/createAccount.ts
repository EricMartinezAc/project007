import { firebaseauthDTO } from "../server/dto/firebaseAuthDTO";
import { DataUser } from "../server/dto/dataUser";

import { firebase } from "../server/services/firebase.services";
import { ClassValidatorAuth } from "./Middlewares/ClassValidatorAuth";
import jwt from "jsonwebtoken";

export const createAccount = ({
  name,
  email,
  password,
  password2,
}: firebaseauthDTO): DataUser => {
  const serv = "regtr";
  if (!ClassValidatorAuth({ name, email, password, password2, serv }))
    return { email, token: "null", data: "null" };

  const result = firebase.createAccount({ name, email, password });
  const secretKey = new Date().toISOString();
  const token = jwt.sign({ userid: new Date(), name }, secretKey, {
    expiresIn: "10h",
  });
  return { email, token, data: result };
};
