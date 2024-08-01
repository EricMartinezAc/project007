import { Label, TextInput } from "evergreen-ui";
import React, { useState } from "react";

function SingUp() {
  const [nombreReg, setnombreReg] = useState<string>("");
  const [emailReg, setemailReg] = useState<string>("");
  const [pswReg, setPswReg] = useState<string>("");
  const [psw2Reg, setPsw2Reg] = useState<string>("");

  return (
    <div className="SingUp">
      <form className="SingUp-form">
        <h1>REGISTRO DE USUARIO</h1>
        <Label htmlFor="nombreReg">Nombres y apellidos</Label>
        <TextInput
          id="nombreReg"
          value={nombreReg}
          name="nombreReg"
          placeholder="ingrese su Email"
          type="emil"
        />
        <Label htmlFor="emailReg">Email</Label>
        <TextInput
          id="emailReg"
          value={emailReg}
          name="text-input-name"
          placeholder="ingrese su Email"
          type="emil"
        />
        <div className="pswArea">
          <div className="pswComponent">
            {" "}
            <Label htmlFor="pswReg">Contraseña</Label>
            <TextInput
              id="pswReg"
              value={pswReg}
              name="pswReg"
              placeholder="Digite una contraseña"
              type="password"
            />
          </div>
          <div className="pswComponent">
            {" "}
            <Label htmlFor="psw2Reg">Confirmar contraseña</Label>
            <TextInput
              id="psw2Reg"
              value={psw2Reg}
              name="psw2Reg"
              placeholder="TRespita su contraseña"
              type="password"
            />
          </div>
        </div>
        <button>Registrase</button>
      </form>
    </div>
  );
}

export default SingUp;
