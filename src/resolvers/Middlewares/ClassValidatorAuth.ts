import { firebaseauthDTO } from "../../server/dto/firebaseAuthDTO";

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexPsw =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const regexTotalName = /^(?=[a-zA-Z\s]{4,})(?!.*\s{8,})[a-zA-Z\s]+$/;
export const ClassValidatorAuth = ({
  name,
  email,
  password,
  password2,
  serv,
}: firebaseauthDTO): boolean => {
  if (serv === "") return false;
  if (serv === "regtr" && password !== password2) return false;

  return regexEmail.test(email) &&
    regexPsw.test(password) &&
    regexTotalName.test(name)
    ? true
    : false;
};
