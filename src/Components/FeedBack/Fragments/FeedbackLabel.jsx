import { Avatar, Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import lightTheme from "../../../Theme/LightTheme";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

const LabelContainer = styled(Box)(({ theme, isHovered }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.palette.text.feedcardbg,
    borderRadius: "16px",
    padding: "4px 8px",
    maxWidth: isHovered ? "200px" : "fit-content",
    transition: "maxWidth 0.5s ease",
    overflow: 'hidden',
}));

const UserFeed = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    color: theme.palette.text.primary,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'end',
}));

const UserFeed2 = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    color: theme.palette.text.secondary,
    margin: '0 8px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
}));

const FeedAvatar = styled(Avatar)(({ theme }) => ({
    height: '24px',
    width: "24px",
    margin: "0px 8px 0px 0px"
}));

const FeedbackLabel = ({ icon, summary, additionalInfo }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <ThemeProvider theme={lightTheme}>
            <LabelContainer
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                isHovered={isHovered}
            >
                <FeedAvatar src={icon || 'defaultIcon.png'} alt="Feedback Icon" />
                {isHovered && (
                    <UserFeed2>{additionalInfo || "info"}</UserFeed2>
                )}
                <UserFeed variant="body2">{summary || "No summary available"}</UserFeed> {/* Corrected this line */}
            </LabelContainer>
        </ThemeProvider>
    );
}

export default FeedbackLabel;
