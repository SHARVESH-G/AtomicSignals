import { Box, Typography, styled } from "@mui/material";
import DoneAllIcon from '@mui/icons-material/DoneAll';

const ResponseContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  padding: "12px 0",
  borderTop: "2px dashed",
  borderColor: theme.palette.text.feedBorderColor,
  marginTop: "8px"
}));

const ResponseHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: "pointer"
});

const ViewButton = styled(Typography)(({theme})=>({
  color: theme.palette.success.main,
  fontSize:'12px',
}))

const ResponseSubmitted = styled(Typography)(({theme})=>({
  fontSize:'12px',
  color:theme.palette.text.primary,
  display:'flex',
}))

const DoubleTick = styled(DoneAllIcon)(({theme})=>
({
  color: theme.palette.text.doubleTick,
  fontSize:"12px"
}))


const SubmissionTime = styled(Typography)(({theme})=>({
  fontSize:"12px",
  color:theme.palette.text.secondary,
  marginLeft:"16px"
}))

const UserResponse = styled(Typography)(({theme})=>({
  fontSize:'14px',
  color:theme.palette.text.primary,
}))

const UserResponse2 = styled(Typography)(({theme})=>({
    fontSize:'14px',
    color:theme.palette.text.secondary,
}))

const ResponseSection = ({ isExpanded, onToggle, submissionTime, responseText , responseText2}) => {
  return (
    <ResponseContainer>
      <ResponseHeader onClick={onToggle}>
        <Box display="flex" alignItems="center" gap={1}>
          <DoubleTick/>
          <ResponseSubmitted>
            Response submitted <SubmissionTime>{submissionTime}</SubmissionTime>
          </ResponseSubmitted>
        </Box>
        {isExpanded ? (
          <ViewButton>Collapse</ViewButton>
        ) : (
          <ViewButton>View</ViewButton>
        )}
      </ResponseHeader>
      
      {isExpanded && (
        <Box>
          <UserResponse>{responseText}</UserResponse>
          <UserResponse2>{responseText2}</UserResponse2>
        </Box>
      )}
    </ResponseContainer>
  );
};

export default ResponseSection;