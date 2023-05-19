import Axios from 'axios';

// Sends the information for joining an RSO to the backend
export const handleCreatePublicEvent = (formData) =>
    {
        Axios.post('http://localhost:3001/mainPage/createPublicEvent', formData)
        .then((response) => 
        {
            // Handles success response
            console.log(response);
            alert("Added New Event!");
        })
        .catch((error) =>
        {
            // Handle error response
            console.log(error);
            alert("Error Adding Event, Resubmit!");
        });
    };