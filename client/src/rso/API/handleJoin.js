import Axios from 'axios';

// Sends the information for joining an RSO to the backend
export const handleJoinRso = (rsoId, userId) =>
{
    Axios.post(`http://localhost:3001/mainPage/MainRso/join?rsoId=${rsoId}&userId=${userId}`)
    .then((response) => 
    {
        // Handles success response
        console.log(response);
        alert("You have joined an RSO!");
    })
    .catch((error) =>
    {
        // Handle error response
        console.log(error);
        alert("Error Joining RSO, try again!");
    })
};