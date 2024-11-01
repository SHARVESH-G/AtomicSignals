import styled from "@emotion/styled";
import { ThemeProvider, Typography } from "@mui/material";
import lightTheme from "../../../theme/lightTheme";

const UserSecFeed = styled(Typography)(({theme})=>({
    fontSize:'14px',
    color: theme.palette.text.secondary,
}))
const FeedbackText = ({ text }) => (
    <ThemeProvider theme={lightTheme}>
        <UserSecFeed variant="body2" color="textSecondary">
            {text}
        </UserSecFeed>
    </ThemeProvider>
);

export default FeedbackText;
