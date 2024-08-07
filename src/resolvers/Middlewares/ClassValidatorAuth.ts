import { firebaseauthDTO } from "../../server/dto/firebaseAuthDTO";

// Regex para un email válido
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Regex para una contraseña con letras, números o signos especiales, entre 4 y 8 caracteres
const regexPsw = /^[A-Za-z\d!@#$%&*?]{4,8}$/;

// Regex para un nombre que contenga solo letras y al menos 2 espacios
const regexTotalName = /^(?=(?:[a-zA-Z]*\s){2,})[a-zA-Z\s]+$/;

export const ClassValidatorAuth = ({
  name,
  email,
  password,
  password2,
  serv,
}: firebaseauthDTO): boolean => {
  if (serv === "") return false;
  if (serv === "regtr" && password !== password2) return false;
  console.log("01", regexEmail.test(email));
  console.log("02", regexPsw.test(password));
  console.log("03", regexTotalName.test(name));

  return regexEmail.test(email) &&
    regexPsw.test(password) &&
    regexTotalName.test(name)
    ? true
    : false;
};
