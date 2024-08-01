import React from "react";
import PropTypes from "prop-types";
import { Image } from "@nextui-org/react";

function Modal(isOpen: boolean = false, img: string) {
  return (
    <div className={`${isOpen ? "block" : "hidden"}`}>
      <Image src={img} alt="imgen modal" />
      hols <br />
    </div>
  );
}

Modal.propTypes = {};

export default Modal;
