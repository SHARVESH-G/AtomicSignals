import { Button } from "@mui/material";
import styled from "@emotion/styled";

const StyledButton = styled(Button)({
  color: "#4caf50",
  textTransform: "none",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  gap: "8px"
});

const SubmitButton = ({ onClick,buttonText }) => (
  <StyledButton onClick={onClick}>{buttonText}</StyledButton>
);

export default SubmitButton;