import { useState } from "react";
import { Box, styled, ThemeProvider } from "@mui/material";
import LightTheme from '../../Theme/LightTheme';
import UserProfile from "./Fragments/UserProfile";
import FeedbackReason from "./Fragments/FeedbackReason";
import FeedbackText from "./Fragments/FeedbackText";
import FeedbackLabel from "./Fragments/FeedbackLabel";
import SubmitButton from "../Buttons/SubmitButton";
import ResponseSection from "./Fragments/ResponseSection";

const Container = styled(Box)(({theme}) => ({
    width: "100%",
    maxWidth: "567px",      
    border: "1px solid",
    borderColor: theme.palette.text.feedBorderColor,
    borderRadius: "16px",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
}));

const UserProfileContainer = styled(Box)(({theme})=>({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
}))

const ButtonHolder = styled(Box)(({theme})=>({
    display:"flex",
    justifyContent:"center",
}))

const UserResponseHolder = styled(Box)(({theme})=>({
    display:"flex",
    flexDirection:"column",
    width:"100%",
}))

const FeedBackCard = ({ 
    avatarSrc, 
    name, 
    date, 
    reason, 
    feedbackText, 
    additionalInfo, 
    summary,
    responseText,
    responseText2
}) => {
    const [state, setState] = useState({
        isSubmitted: false,
        isExpanded: false
    });

    const handleSubmit = () => {
        setState(prevState => ({ ...prevState, isSubmitted: true }));
    };

    const toggleExpansion = () => {
        setState(prevState => ({ ...prevState, isExpanded: !prevState.isExpanded }));
    };

    return (
        <ThemeProvider theme={LightTheme}>
            <Container>
                <UserProfileContainer>
                    <UserProfile 
                        avatarSrc={avatarSrc} 
                        name={name} 
                        date={date} 
                    />
                    <FeedbackLabel icon={avatarSrc} summary={summary} additionalInfo={additionalInfo} />
                </UserProfileContainer>
                
                <FeedbackReason reason={reason} />
                
                <FeedbackText text={feedbackText} />
                
                <UserResponseHolder>
                    {!state.isSubmitted && (
                        <ButtonHolder>
                            <SubmitButton onClick={handleSubmit} />
                        </ButtonHolder>
                    )}
                    
                    {state.isSubmitted && (
                        <ResponseSection 
                            isExpanded={state.isExpanded}
                            onToggle={toggleExpansion}
                            submissionTime={date}
                            responseText={responseText}
                            responseText2={responseText2}
                        />
                    )}
                </UserResponseHolder>
            </Container>
        </ThemeProvider>
    );
};

export default FeedBackCard;
