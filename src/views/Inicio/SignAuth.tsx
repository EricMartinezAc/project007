import { Box, Button, Radio, RadioGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import { createAccount } from "../../resolvers/createAccount";
import { firebaseauthDTO } from "../../server/dto/firebaseAuthDTO";
import { CustomTextField, FCntrlLabel } from "../../styles/styleMUI";

function SignAuth() {
  const [values, setValues] = useState<firebaseauthDTO>({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [formType, setFormType] = useState<string>("auth");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(values);
    if (values.password !== values.password2)
      throw new Error("confirme se contraseña");

    const auth_resp = createAccount({ serv: formType, ...values });
    console.log("hereee", auth_resp);
  };

  const [errorPsw, setErrorPsw] = useState<boolean>(false);

  const onchangePsw2 = () => {
    setErrorPsw(true);
  };

  return (
    <Box
      className="SingUp"
      component="form"
      sx={{
        "& .MuiFullWidthCustomTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="singUp-form">
        <h2 id="singUp-formh2">
          {formType === "auth"
            ? "AUTEFICACIÓN DE USUARIO"
            : "REGISTRO DE USUARIO"}
        </h2>
        <CustomTextField
          label="Ingrese su nombre"
          variant="outlined"
          fullWidth
          name="name"
          value={values.name}
          onChange={handleChange}
          required
        />
        <CustomTextField
          label="Ingrese su correo"
          variant="outlined"
          fullWidth
          name="email"
          value={values.email}
          onChange={handleChange}
          required
        />
        <div className="pswArea">
          <div className="pswComponent">
            <CustomTextField
              label="Ingrese una contraseña"
              type="password"
              variant="outlined"
              fullWidth
              name="password"
              value={values.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="pswComponent">
            <CustomTextField
              className="inputFormAuth"
              label="Vuela a ingresar la contraseña"
              type="password"
              variant="outlined"
              fullWidth
              name="password2"
              value={values.password2}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <Button
          sx={{
            fontSize: "12px",
            fontWeight: "bold",
            color: "coral",
            margin: "13px 0",
            backgroundColor: "#000",
          }}
          fullWidth
          variant="contained"
          color="inherit"
          onClick={handleSubmit}
        >
          {formType === "auth" ? "INICIO DE SESIÓN" : "REGISTRO DE USUARIO"}
        </Button>

        <Button
          sx={{
            fontSize: "12px",
            fontWeight: "bold",
            color: "#999",
            margin: "0",
          }}
          fullWidth
          onClick={() => {
            formType === "auth" ? setFormType("regtr") : setFormType("auth");
          }}
        >
          {formType === "auth"
            ? "registre su cuenta aquí"
            : "Inicie sesión con su cuenta registrada"}
        </Button>
      </div>
    </Box>
  );
}

export default SignAuth;
