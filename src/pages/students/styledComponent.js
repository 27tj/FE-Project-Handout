import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { theme } from "../../theme.js";

//Components
export const StyledTilte = styled(Typography)({
  textAlign: "center",
  [theme.breakpoints.up("xs")]: {
    fontSize: "48px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "60px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "max(60px, calc(100vw/20))",
  },
});

export const StyledGridTilte = styled(Grid)({
  textAlign: "center",
  color: "white",
  backgroundColor: "rgba(181, 181, 181, 0.3)",
  marginBottom: "3px",
  [theme.breakpoints.up("xs")]: {
    fontSize: "max(30px, calc(100vw/15))",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "max(40px, calc(100vw/15))",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "max(60px, calc(100vw/15))",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "max(80px, calc(100vw/15))",
  },
});
export const StyledSubTilte = styled(Typography)({
  textAlign: "center",
  [theme.breakpoints.up("xs")]: {
    fontSize: "30px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "40px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "max(45px, calc(100vw/20))",
  },
});

export const StyledGridItem = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  marginTop: "2px",
  width: "10px",
  [theme.breakpoints.up("xs")]: {
    fontSize: "15px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "30px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "40px",
  },
});
export const StyledGridItemTilte = styled(Grid)({
  backgroundColor: "rgba(181, 181, 181, 0.3)",
  textAlign: "center",
  color: "white",
  [theme.breakpoints.up("xs")]: {
    fontSize: "max(calc(30px/1.5), calc(100vw/15/1.5))",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "max(calc(45px/1.5), calc(100vw/15/1.5))",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "max(calc(60px/1.5), calc(100vw/15/1.5))",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "max(calc(80px/1.5), calc(100vw/15/1.5))",
  },
});

export const StyledImage = styled("img")({
  height: "auto",
  width: "90%",
  [theme.breakpoints.up("xs")]: {
    width: "min(100%,525px)",
  },
  [theme.breakpoints.up("sm")]: {
    width: "max(525px,90%)",
  },
  [theme.breakpoints.up("md")]: {
    width: "max(794px,70%)",
  },
  [theme.breakpoints.up("lg")]: {
    width: "max(815px,60%)",
  },
  [theme.breakpoints.up("xl")]: {
    width: "max(901px,50%)",
  },
});
export const StyledArticle = styled(Typography)({
  paddingTop: "5px",
  textAlign: "center",
  [theme.breakpoints.up("xs")]: {
    fontSize: "max(16px, calc(100vw/25))",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "max(20px, calc(100vw/25))",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "max(20px, calc(100vw/25))",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "max(44px, calc(100vw/25))",
  },
});
export const StyledArticleSmall = styled(Typography)({
  textAlign: "center",
  [theme.breakpoints.up("xs")]: {
    fontSize: "max(16px, calc(100vw/35))",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "max(20px, calc(100vw/35))",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "max(25px, calc(100vw/35))",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "max(30px, calc(100vw/35))",
  },
});
export const StyledQuestion = styled("div")({
  marginTop: "15px",
  paragraph: "false",
  [theme.breakpoints.up("xs")]: {
    fontSize: "max(16px, calc(100vw/25))",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "max(24px, calc(100vw/25))",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "max(24px, calc(100vw/25))",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "max(48px, calc(100vw/25))",
  },
});

export const StyledTextField = styled(TextField)({
  width: "20%",
  //   height: "50%",
  fontSize: "50%",
  [theme.breakpoints.up("xs")]: {
    width: "min(30%,116px)",
  },
  [theme.breakpoints.up("sm")]: {
    width: "min(20%, 200px)",
  },
});

//Wrapper
export const ContentWrapper = styled("div")({
  height: "100vh",
  fontSize: "60px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const TitleWrapper = styled("div")({
  textAlign: "center",
  height: "100vh",
  fontSize: "60px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const IntroductionWrapper = styled("div")({
  textAlign: "center",
  height: "100vh",
  fontSize: "60px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const QuestionWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

export const FormWrapper = styled("div")({
  height: "100vh",
  fontSize: "60px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
