import { Image } from "@nextui-org/react";
import React from "react";
import imgPromo from "../../static/images/9.png";

function Modal() {
  return (
    <div>
      <Image src={imgPromo} alt="promo" className="img-promo" />
    </div>
  );
}

export default Modal;
