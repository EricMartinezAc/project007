import { FormControlLabel, InputBase, TextField } from "@mui/material";
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
