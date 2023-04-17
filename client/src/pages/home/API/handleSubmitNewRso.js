import Axios from 'axios';

// Sends the information for creating an RSO to the backend
export const handleSubmitNewRso = (rsoName, uniId, creatorId) =>
    {
        Axios.post('http://localhost:3001/mainPage/MainRso', {
            name: rsoName,
            universityId: uniId,
            status: 'PENDING',
            creatorId: creatorId,
        }).then((response) => 
        {
            // Handles success response
            console.log(response.data);
            alert("RSO created successfully! 5 members required before becoming active")
        })
        .catch((error) =>
        {
            // Handle error response
            console.log(error);
            alert("Error Creating RSO, Please Try Again");
        })
    };