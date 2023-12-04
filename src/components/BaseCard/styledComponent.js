import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { styled } from "@mui/system";
import { theme } from "../../theme.js";
import Button from "@mui/material/Button";

export const StyledCard = styled(Card)({
  [theme.breakpoints.up("xs")]: {
    width: "max(120px, min(40vw, 240px))",
    height: "max(120px, min(40vw, 240px))",
    fontSize: "calc(max(120px, min(40vw, 240px))/6)",
  },
  [theme.breakpoints.up("sm")]: {
    width: "max(30vw, 240px)",
    height: "max(30vw, 240px)",
    fontSize: "calc(max(30vw, 240px)/6)",
  },
  [theme.breakpoints.up("md")]: {
    width: "min(30vw, 300px)",
    height: "min(30vw, 300px)",
    fontSize: "calc(min(30vw, 300px)/6)",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "calc(300px/6)",
    width: "300px",
    height: "300px",
  },
});

export const StyledTypography = styled(Typography)({
  [theme.breakpoints.up("xs")]: {
    fontSize: "0.6em",
    paddingLeft: "5px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "0.7em",
    paddingLeft: "6px",
  },
  [theme.breakpoints.up("md")]: {
    paddingLeft: "10px",
    fontSize: "0.82em",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1em",
    paddingLeft: "12px",
  },
});

export const StyledTextarea = styled("textarea")({
  width: "90%",
  resize: "none",
  [theme.breakpoints.up("xs")]: {
    height: "calc(max(120px, min(40vw, 240px))*0.65)",
  },
  [theme.breakpoints.up("sm")]: {
    height: "calc(max(30vw, 240px)*0.65)",
  },
  [theme.breakpoints.up("md")]: {
    height: "calc(min(30vw, 300px)*0.65)",
  },
  [theme.breakpoints.up("lg")]: {
    height: "calc(300px* 0.65)",
  },
});

export const StyledButton = styled(Button)({
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "6px",
  [theme.breakpoints.up("xs")]: {
    height: "calc(max(120px, min(40vw, 240px))*0.1)",
    fontSize: "max(0.4em, calc(120px/6*0.4))",
  },
  [theme.breakpoints.up("sm")]: {
    height: "calc(max(30vw, 240px)*0.1)",
    fontSize: "0.5em",
  },
  [theme.breakpoints.up("md")]: {
    height: "calc(min(30vw, 300px)*0.1)",
    fontSize: "0.5em",
  },
  [theme.breakpoints.up("lg")]: {
    height: "calc(300px* 0.1)",
    fontSize: "0.4em",
    marginTop: "0px",
  },
});
