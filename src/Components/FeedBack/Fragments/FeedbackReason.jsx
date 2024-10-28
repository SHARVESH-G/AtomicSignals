// FeedbackReason.js
import styled from "@emotion/styled";
import { ThemeProvider, Typography } from "@mui/material";
import lightTheme from "../../../Theme/LightTheme";

const UserMainFeed = styled(Typography)(({theme})=>({
    fontSize:'14px',
    color: theme.palette.text.primary,
}))
const FeedbackReason = ({ reason }) => (
    <ThemeProvider theme={lightTheme}>
        <UserMainFeed variant="subtitle1" fontWeight="bold">
            {reason}
        </UserMainFeed>
    </ThemeProvider>
);

export default FeedbackReason;
