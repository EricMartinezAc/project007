import React from "react";
import "../../styles/Elementos.css";
import "../../styles/Footer.css";

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <div className="footer-1">
      <div className="menu-footer">
        <div className="menu-footer-soporte">
          <h4>Soporte técnico</h4>
          <a
            href="https://www.iseenggroup.com/soporte-tecnico"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contacta un soporte técnico
          </a>
          <a
            href="https://www.iseenggroup.com/soporte-tecnico/pregFrec"
            target="_blank"
            rel="noopener noreferrer"
          >
            Preguntas frecuentes
          </a>
          <a
            href="https://www.iseenggroup.com/soporte-tecnico/manUsu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Manual de usuario
          </a>
          <a
            href="https://www.iseenggroup.com/soporte-tecnico/manFallasEqu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Manual de fallas de equipos
          </a>
        </div>
        <div className="menu-footer-dev">
          <h4>Desarrolla con nosotros</h4>
          <a
            href="https://www.iseenggroup.com/developer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Necesitas un sistema?
          </a>
          <a
            href="https://www.iseenggroup.com/developer/ARController/solicitud"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicita mejoras
          </a>
          <a
            href="https://www.iseenggroup.com/developer/ARController/comentarios"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comentarios del producto
          </a>
        </div>
        <div className="menu-footer-contac">
          <h4>Contáctanos</h4>
          <a
            href="https://www.facebook.com/groups/993522477707507/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/iseeg1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://t.me/iseegco"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
          <a
            href="https://wa.link/fvnio8"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="menu-footer-contactanos">
        Celular: <a href="tel:+573002951136">3002951136</a> | - | Emails:{" "}
        <a href="mailto:isenv.projects@outlook.com">
          isenv.projects@outlook.com
        </a>
        | - |
        <a href="mailto:arcontroller.support@gmail.com">
          arcontroller.support@gmail.com
        </a>
        <br />
      </div>
      {/* <Copyright /> */}
    </div>
  );
};

export default Footer;
