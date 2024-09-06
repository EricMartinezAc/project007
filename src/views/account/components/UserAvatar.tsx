import { Button } from "@mui/material";
import imgLogo from "../../../static/icos/slog-removebg-preview.png";
import React from "react";

function UserAvatar({ locationCurrent, handleClickAvatar }: any) {
  return (
    <div
      style={{
        display: locationCurrent.pathname !== "/signAuth" ? "block" : "none",
      }}
      className="item-nav-sesionArea"
      onClick={handleClickAvatar}
    >
      <button tabIndex={0}>
        <img src={imgLogo} alt="Avatar" />
      </button>
    </div>
  );
}

export default UserAvatar;
