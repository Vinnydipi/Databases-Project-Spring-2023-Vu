import Axios from 'axios';

// Sends the information for creating an RSO to the backend
export const handleJoinRso = (rsoId, userId) =>
    {
        Axios.post(`http://localhost:3001/mainPage/createEvent/getRsoIfAdmin`)
        .then((response) => 
        {
            // Handles success response
            console.log(response);
            alert("Created New Event, Redirecting To Home Page");
        })
        .catch((error) =>
        {
            // Handle error response
            console.log(error);
            alert("Error Creating Event, Try Again");
        })
    };