import Axios from 'axios';

// Sends the information for creating an RSO to the backend
export const handleLeaveRso = (rsoId, userId) =>
    {
        Axios.delete('http://localhost:3001/mainPage/MainRso', 
        {
            params: 
            {
                rsoId: rsoId,
                userId: userId,
            }
        }).then((response) => 
        {
            // Handles success response
            console.log(response.data);
            alert("You have left the RSO");
        })
        .catch((error) =>
        {
            // Handle error response
            console.log(error);
            alert("Failed to leave RSO! Try again");
        })
    };