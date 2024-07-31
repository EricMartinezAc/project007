import React from "react";
import PropTypes from "prop-types";
import { Image } from "@nextui-org/react";

function Modal(isOpen: boolean, img: string) {
  return (
    <div className={`${isOpen ? "block" : "hidden"}`}>
      <Image src={img} alt="imgen modal" />
    </div>
  );
}

Modal.propTypes = {};

export default Modal;
