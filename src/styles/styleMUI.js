import {
  FormControlLabel,
  InputBase,
  Paper,
  Switch,
  TextField,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import { alpha, styled } from "@mui/material/styles";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  color: "#eee",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    zoom: 1.5,
  },
}));

export const CustomTextField = styled(TextField)({
  margin: "16px 0",
  "& label": {
    backgroundColor: "transparent",
    color: "#eee",
    padding: "0 4px",
    border: "none",
    fontSize: "1em",
  },
  "& .MuiInputLabel-shrink": {
    backgroundColor: "transparent",
    color: "#1ee",
  },
  "& .MuiInputBase-input": {
    backgroundColor: "trasnparent",
    color: "#eee",
    fontSize: "12px",
    border: "none",
    borderRadius: "2% ",
    margin: "5px",
  },
  "& .MuiInputBase-input:focus": {
    boxShadow: "0 0 5px rgba(255, 87, 51, 0.6)",
    borderColor: "#ff5733",
  },
});

export const FCntrlLabel = styled(FormControlLabel)(({ theme }) => ({
  backgroundColor: "transparent",
  border: "none",
  "& .MuiFormControlLabel-label": {
    color: "#a51",
    fontWeight: "bold",
    fontSize: "15px",
  },
  "& .MuiRadio-root": {
    "& svg": {
      color: "#a67",
    },
  },
}));

export const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: pink[600],
    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: pink[600],
  },
}));

export const TransparentFormControlLabel = styled(FormControlLabel)(
  ({ theme }) => ({
    backgroundColor: "transparent",
    color: "white", // Letras blancas
    border: "none", // Sin borde
    "& .MuiSwitch-root": {
      backgroundColor: "transparent",
    },
    "& .MuiSwitch-switchBase": {
      color: theme.palette.warning.main,
    },
    // "& .MuiSwitch-track": {
    //   backgroundColor: "transparent", // Fondo transparente para el track del switch
    // },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.warning.main, // Color del pulgar del switch
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      border: "none",
    },
    "& .MuiFormControlLabel-label": {
      color: "white", // Letras blancas
      fontSize: "1.35rem", // Tamaño de fuente más grande
      whiteSpace: "nowrap",
    },
  })
);

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
