// App.js
import FeedbackCard from './components/feedBack/feedbackCard';

function App() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
            <FeedbackCard 
                avatarSrc="https://i.pravatar.cc/300" 
                name="Steven" 
                date="31 Jan 2023, 01:31 PM" 
                reason="Feedback reason will be displayed here"
                feedbackText="Your way of presenting the topic was very good in the client meeting"
                icon="E"
                additionalInfo="Efficient"
                summary="Very good"
                onSubmit={() => alert("Response submitted!")}
                responseText2="Happy  to hear that! 😊"
                responseText="Thanks! I'll try to improve further👍"
                submitButtonText="Submit Your Response"

            />
        </div>
    );
}

export default App;
