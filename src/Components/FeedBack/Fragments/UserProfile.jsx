// UserProfile.js
import { Box, Avatar, Typography, ThemeProvider } from "@mui/material";
import styled from "@emotion/styled";
import lightTheme from "../../../Theme/LightTheme";

const ProfileContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "12px",
});

const UserDetail = styled(Box)(({theme})=>({
    display: "flex",
    flexDirection:"column",
}))
const UserPic = styled(Avatar)(({theme})=>({
    height:'32px',
    width:'32px',
}))
const UserName = styled(Typography)(({theme})=>({
    fontWeight:'bold',
    color:theme.palette.text.primary,
    fontSize:'16px',
}))

const UserDate = styled(Typography)(({theme})=>({
    color:theme.palette.text.date,
    fontSize:"12px",
}))

const UserProfile = ({ avatarSrc, name, date }) => (
    <ThemeProvider theme={lightTheme}>
        <ProfileContainer>
            <UserPic src={avatarSrc} alt={name} />
            <UserDetail>
                <UserName variant="body1" fontWeight="bold">{name}</UserName>
                <UserDate variant="caption" color="textSecondary">{date}</UserDate>
            </UserDetail>
        </ProfileContainer>
    </ThemeProvider>
    
);

export default UserProfile;
