import { Box, Button, Input, TextField } from "@mui/material";
import React, { useState } from "react";

function SingUp() {
  const [nombreReg, setnombreReg] = useState<string>("");
  const [emailReg, setemailReg] = useState<string>("");
  const [pswReg, setPswReg] = useState<string>("");
  const [psw2Reg, setPsw2Reg] = useState<string>("");
  const submitReg = () => {
    fetch;
  };

  return (
    <Box
      className="SingUp"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="singUp-form">
        <h1>REGISTRO DE USUARIO</h1>
        <TextField
          id="nombreReg"
          value={nombreReg}
          name="nombreReg"
          label="ingrese su Email"
          type="emil"
        />
        <TextField
          id="emailReg"
          value={emailReg}
          name="text-input-name"
          label="ingrese su Email"
          type="emil"
        />
        <div className="pswArea">
          <div className="pswComponent">
            <TextField
              id="pswReg"
              label="Ingrese su contraseña"
              value={pswReg}
              name="pswReg"
              type="password"
            />
          </div>
          <div className="pswComponent">
            <TextField
              id="psw2Reg"
              value={psw2Reg}
              name="psw2Reg"
              label="Respita su contraseña"
              type="password"
            />
          </div>
        </div>
      </div>
    </Box>
  );
}

export default SingUp;
