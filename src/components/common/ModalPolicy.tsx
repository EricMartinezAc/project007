import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import HelpButtonPolicy from "./HelpButtonPolicy";

interface FadeProps {
  children: React.ReactElement;
  in?: boolean;
  onClick?: any;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  onExited?: (node: HTMLElement, isAppearing: boolean) => void;
  ownerState?: any;
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
  props,
  ref
) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null as any, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null as any, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  fontSize: "20px",
};

export default function SpringModalPolicy() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="float rg2 tp32">
        <HelpButtonPolicy openModal={handleOpen} />
      </div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="spring-modal-title" variant="h6" component="h2">
              Políticas de datos
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Política de Datos Personales de Liiv-e Última actualización:
              07/07/2024. En Liiv-e, valoramos y respetamos tu privacidad. Esta
              política de datos personales está diseñada para informarte sobre
              cómo recopilamos, usamos, almacenamos y protegemos tus datos
              personales de acuerdo con la normativa colombiana, especialmente
              la Ley 1581 de 2012 y el Decreto 1377 de 2013. 1. Responsable del
              Tratamiento El responsable del tratamiento de tus datos personales
              es Liiv-e, una empresa con sede en Atlántico, Colombia. Puedes
              contactarnos en siheng.projects@gmail.com para cualquier consulta
              sobre el tratamiento de tus datos personales. 2. Información que
              Recopilamos Recopilamos la siguiente información personal cuando
              interactúas con nuestro sitio web, realizas compras, te registras
              en nuestra plataforma o te comunicas con nosotros: Datos de
              Identificación: Nombre completo, número de documento de identidad
              (cédula o pasaporte), y fecha de nacimiento. Datos de Contacto:
              Dirección de correo electrónico, dirección de envío, y número de
              teléfono. Datos de Transacción: Información sobre tus compras,
              historial de pedidos, y detalles de pago, procesados a través de
              plataformas de pago seguras. Datos de Navegación: Información
              sobre tu uso del sitio web, incluyendo tu dirección IP, el tipo de
              navegador, la fecha y hora de acceso, y las páginas visitadas.
              Datos de Registro: Información proporcionada al crear una cuenta,
              como nombre de usuario y contraseña. 3. Finalidades del
              Tratamiento La información recopilada se utiliza para las
              siguientes finalidades: Procesamiento de Pedidos: Gestionar y
              completar tus compras, incluyendo el procesamiento de pagos y la
              coordinación del envío de productos. Atención al Cliente: Brindar
              soporte técnico y responder a tus consultas o solicitudes. Mejora
              del Servicio: Analizar el uso del sitio web para mejorar nuestros
              productos y servicios, y personalizar tu experiencia.
              Comunicación: Enviar notificaciones sobre tus pedidos,
              promociones, ofertas especiales, y actualizaciones relacionadas
              con nuestros productos y servicios. Cumplimiento Legal: Cumplir
              con nuestras obligaciones legales y resolver disputas. 4. Derechos
              del Titular de la Información De acuerdo con la Ley 1581 de 2012,
              tienes los siguientes derechos respecto a tus datos personales:
              Acceso: Solicitar acceso a la información personal que tenemos
              sobre ti. Corrección: Pedir la corrección de datos incorrectos,
              inexactos o incompletos. Supresión: Solicitar la eliminación de
              tus datos personales cuando consideres que ya no son necesarios
              para las finalidades para las que fueron recogidos o si ejerces tu
              derecho de revocar la autorización. Revocación: Revocar la
              autorización para el tratamiento de tus datos personales en
              cualquier momento, salvo que exista una obligación legal o
              contractual que justifique la continuación del tratamiento.
              Restricción: Solicitar la restricción del tratamiento de tus datos
              cuando se cumplan ciertas condiciones. Para ejercer estos
              derechos, puedes contactarnos en siheng.projects@gmail.com.
              Responderemos a tu solicitud dentro de los plazos establecidos por
              la normativa vigente. 5. Protección de Datos Adoptamos medidas de
              seguridad razonables para proteger tu información personal contra
              el acceso no autorizado, divulgación, alteración o destrucción.
              Estas medidas incluyen controles técnicos y organizativos
              apropiados, tales como cifrado de datos y acceso restringido a la
              información. 6. Transferencia de Datos En algunos casos, tus datos
              personales pueden ser transferidos a terceros proveedores de
              servicios que actúan en nuestro nombre, como servicios de pago y
              empresas de logística. Estas transferencias se realizan bajo
              estrictos acuerdos de confidencialidad y de acuerdo con la
              normativa colombiana de protección de datos. 7. Cookies y
              Tecnologías Similares Utilizamos cookies y tecnologías similares
              para mejorar tu experiencia en nuestro sitio web. Las cookies son
              pequeños archivos que se almacenan en tu dispositivo y nos
              permiten recordar tus preferencias y actividades en nuestro sitio.
              Puedes ajustar la configuración de tu navegador para rechazar
              cookies, aunque esto puede limitar algunas funciones del sitio
              web. 8. Modificaciones a la Política de Datos Podemos actualizar
              esta política de datos personales para reflejar cambios en
              nuestras prácticas o en la legislación aplicable. Te notificaremos
              sobre cualquier cambio significativo mediante la publicación de la
              nueva política en nuestro sitio web. Te recomendamos que revises
              periódicamente esta política para estar al tanto de cómo
              protegemos tu información. 9. Contacto Si tienes preguntas,
              inquietudes o deseas ejercer tus derechos relacionados con tus
              datos personales, por favor contáctanos en: Correo Electrónico:
              siheng.projects@gamil.com. Agradecemos tu confianza en Liiv-e y
              nos comprometemos a proteger tu privacidad y datos personales.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
