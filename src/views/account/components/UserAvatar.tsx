import { Button } from "@mui/material";
import imgLogo from "../../../static/icos/slog-removebg-preview.png";
import React from "react";

function UserAvatar() {
  return (
    <div className="userAvatarContainer">
      <button className="userAvatar" tabIndex={0}>
        <img src={imgLogo} alt="Avatar" />
      </button>
    </div>
  );
}

export default UserAvatar;
