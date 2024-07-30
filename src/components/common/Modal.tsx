import { Image } from "@nextui-org/react";
import React from "react";
import PropTypes from "prop-types";

function Modal(isOpen: boolean) {
  return <div className={`${isOpen ? "block" : "hidden"}`}>Modal</div>;
}

Modal.propTypes = {};

export default Modal;

