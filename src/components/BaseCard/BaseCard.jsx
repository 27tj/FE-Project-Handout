import "./BaseCard.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {
  StyledCard,
  StyledTextarea,
  StyledTypography,
  StyledButton,
} from "./styledComponent";

export const BaseCard = ({ cardID = 0, readOnly = false, content }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
  };
  return (
    <StyledCard className={`cardID card`}>
      <StyledTypography component="div">card</StyledTypography>
      {readOnly == false ? (
        <form onSubmit={(event) => handleSubmit(event)} id="answer">
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <StyledTextarea form="answer" label="Multiline" variant="filled" />
            <StyledButton type="submit">Submit</StyledButton>
          </Grid>
        </form>
      ) : (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <StyledTextarea
            label="Multiline"
            variant="filled"
            readOnly={readOnly}
          >
            {content}
          </StyledTextarea>
        </Grid>
      )}
    </StyledCard>
  );
};
