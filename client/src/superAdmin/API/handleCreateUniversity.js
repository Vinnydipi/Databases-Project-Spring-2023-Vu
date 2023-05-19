import Axios from 'axios';

// Sends the information for joining an RSO to the backend
export const handleCreateUniversity = (formData) =>
    {
        Axios.post('http://localhost:3001/mainPage/createUniversity', formData)
        .then((response) => 
        {
            // Handles success response
            console.log(response);
            alert("Added New University!");
        })
        .catch((error) =>
        {
            // Handle error response
            if (error.response.data.message === 'University already Exists' ||
                error.response.data === 'University already Exists')
            {
                alert("Error Adding University, University may already be registered!");
            }
            else
            {
                console.log(error);
                alert("Error adding University!");
            }
        });
    };
    