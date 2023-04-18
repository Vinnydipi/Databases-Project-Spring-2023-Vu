import Axios from 'axios';

// Sends the information for joining an RSO to the backend
export const handleCreateEvent = (formData) =>
    {
        Axios.post('http://localhost:3001/mainPage/createEvent', formData)
        .then((response) => 
        {
            // Handles success response
            console.log(response);
            alert("Added new Event");
        })
        .catch((error) =>
        {
            // Handle error response
            console.log(error);
            alert("Error Adding Event, Remember Events Cant have the same name or time!");
        })
    };