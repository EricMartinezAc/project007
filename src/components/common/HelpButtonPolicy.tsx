import { Button } from "@mui/material";
import imgLogo from "../../static/icos/Help_icon-icons.com_73700.png";
import React from "react";
import { Link } from "react-router-dom";

function HelpButtonPolicy({ openModal }: any) {
  return (
    <div className="userAvatarContainer">
      <Button onClick={openModal} className="userAvatar" tabIndex={0}>
        <img src={imgLogo} alt="help?" />
      </Button>
    </div>
  );
}

export default HelpButtonPolicy;
