import { Alert, Box, Button, Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { createAccount } from "../../resolvers/createAccount";
import { userDTO } from "../../dto";
import {
  CustomTextField,
  TransparentFormControlLabel,
} from "../../styles/styleMUI";
import { useNavigate } from "react-router-dom";
import { authAccount } from "../../resolvers/authAccount";
import SpringModalPolicy from "../../components/common/ModalPolicy";
import { CreateOrUpdateCookies } from "../../server/cookies";

function SignAuth({ user, setUser, cookies }: any) {
  const navigate = useNavigate();

  const [formType, setFormType] = useState<string>("auth");
  const [dataForm, setDataForm] = useState<userDTO>(user);
  const [errorForm, setErrorForm] = useState<any>({ val: false });

  useEffect(() => {
    console.log(cookies.getAll());
    if (cookies.get("token")) navigate("../HomeUser");
  }, []);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = DOMPurify.sanitize(event.target.value);
    setDataForm((prevDataForm: userDTO) => ({
      ...prevDataForm,
      [event.target.name]: sanitizedValue,
    }));
  };

  const handleChangeEntrepreneur = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDataForm((prevUser: userDTO) => ({
      ...prevUser,
      entrepreneur: e.target.checked,
    }));
  };

  const handleSubmit = async () => {
    if (
      dataForm.email === "" ||
      dataForm.password === "" ||
      dataForm.name === "" ||
      dataForm.password === ""
    ) {
      setErrorForm({ msj: "Debe diligenciar todo el formulario", val: true });
      setTimeout(() => {
        setErrorForm({ val: false });
      }, 4000);
    } else {
      if (dataForm.password !== dataForm.password2) {
        setTimeout(() => {
          setErrorForm({ val: false });
        }, 4000);
        setErrorForm({ msj: "Debe coincidir las contraseñas", val: true });
      } else {
        try {
          if (formType === "regtr") {
            const auth_resp = await createAccount(formType, dataForm);
            alert(auth_resp.msj);
            if (!auth_resp.result || auth_resp.result === null) {
              window.location.reload();
            } else {
              try {
                await setUser({
                  id: auth_resp.result.user.ui,
                  serv: "logged",
                  name: dataForm.name,
                  email: dataForm.email,
                  token: auth_resp.token,
                  entrepreneur: dataForm.entrepreneur,
                });
                await CreateOrUpdateCookies(cookies, {
                  token: auth_resp.token,
                  entrepreneur: dataForm.entrepreneur,
                });
                await navigate("../HomeUser");
              } catch (error) {
                alert(error);
                window.location.reload();
              }
            }
          }
          if (formType === "auth") {
            const auth_resp = await authAccount(formType, dataForm);
            alert('server response: '+auth_resp.msj);
            if (!auth_resp.result || auth_resp.result === null) {
              window.location.reload();
            } else {
              try {
                await setUser({
                  id: auth_resp.result.user.ui,
                  serv: "logged",
                  name: dataForm.name,
                  email: dataForm.email,
                  token: auth_resp.token,
                  entrepreneur: dataForm.entrepreneur,
                });
                console.log;
                await CreateOrUpdateCookies(cookies, {
                  token: auth_resp.token,
                  entrepreneur: dataForm.entrepreneur,
                });
                await navigate("../HomeUser");
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
      autoComplete="on"
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
        <TransparentFormControlLabel
          control={
            <Switch
              checked={dataForm.entrepreneur}
              onChange={handleChangeEntrepreneur}
              color="warning"
            />
          }
          label="Eres emprendedor?"
        />
        <CustomTextField
          label="Ingrese su nombre"
          variant="outlined"
          fullWidth
          name="name"
          value={dataForm.name}
          onChange={handleChange}
          required
        />
        <CustomTextField
          label="Ingrese su correo"
          variant="outlined"
          fullWidth
          name="email"
          value={dataForm.email}
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
              value={dataForm.password}
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
              value={dataForm.password2}
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
