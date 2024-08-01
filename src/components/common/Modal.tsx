import React from "react";
import PropTypes from "prop-types";
import { Image } from "evergreen-ui";

function Modal(isOpen: boolean = false, img: string) {
  console.log(isOpen);
  return (
    <div className={`${isOpen ? "block" : "hidden"}`}>
      <Image src={img} alt="imgen modal" />
      hols <br />
    </div>
  );
}

Modal.propTypes = {};

export default Modal;
