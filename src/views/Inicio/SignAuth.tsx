import { Alert, Box, Button, Radio, RadioGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import { createAccount } from "../../resolvers/createAccount";
import { firebaseauthDTO } from "../../server/dto/firebaseAuthDTO";
import { CustomTextField } from "../../styles/styleMUI";
import { useNavigate } from "react-router-dom";
import { authAccount } from "../../resolvers/authAccount";
import SpringModalPolicy from "../../components/common/ModalPolicy";

function SignAuth({ token, setToken }: any) {
  const navigate = useNavigate();
  const [values, setValues] = useState<firebaseauthDTO>({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [formType, setFormType] = useState<string>("auth");

  const [errorForm, setErrorForm] = useState<any>({ val: false });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    if (
      values.email === "" ||
      values.password === "" ||
      values.name === "" ||
      values.password === ""
    ) {
      setErrorForm({ msj: "Debe diligenciar todo el formulario", val: true });
      setTimeout(() => {
        setErrorForm({ val: false });
      }, 4000);
    } else {
      if (values.password !== values.password2) {
        setTimeout(() => {
          setErrorForm({ val: false });
        }, 4000);
        setErrorForm({ msj: "Debe coincidir las contraseñas", val: true });
      } else {
        try {
          if (formType === "regtr") {
            const auth_resp = await createAccount({
              serv: formType,
              ...values,
            });
            alert(auth_resp.data.msj);
            if (!auth_resp.data.result || auth_resp.data.result === null) {
              window.location.reload();
            } else {
              try {
                console.log("goal");
                await setToken(auth_resp.data.token);
                navigate("../");
              } catch (error) {
                console.log("auto goal");
                alert(error);
                window.location.reload();
              }
            }
          }
          if (formType === "auth") {
            const auth_resp = await authAccount({ serv: formType, ...values });
            alert(auth_resp.data.msj);
            if (!auth_resp.data.result || auth_resp.data.result === null) {
              window.location.reload();
            } else {
              try {
                await setToken(auth_resp.data.token);
                navigate("../");
              } catch (error) {
                alert(error);
                window.location.reload();
              }
            }
          }
        } catch (error) {
          alert(error);
        }
      }
    }
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
      {" "}
      <SpringModalPolicy />
      <div className="singUp-form">
        <h2 id="singUp-formh2">
          {formType === "auth"
            ? "AUTENTICACIÓN DE USUARIO"
            : "REGISTRO DE USUARIO"}
        </h2>
        <Alert
          sx={{ display: !errorForm.val ? "none" : "block", fontSize: "15px" }}
          severity="error"
        >
          {errorForm.msj}
        </Alert>
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
              label="Repite la contraseña"
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
