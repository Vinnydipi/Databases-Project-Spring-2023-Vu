
// The Public Event information to be submitted to the backend
export const setData = (event, handleCreatePublicEvent, setShowCreatePublic) =>
{
    event.preventDefault();
    const formData = new FormData(event.target);

    // Sets the info to eventData so we can
    const eventData = 
    {
        name: formData.get('name'),
        category: formData.get('category'),
        description: formData.get('description'),
        time: formData.get('time'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        long: formData.get('long'),
        lat: formData.get('lat'),
    };

    // Calls the API with the given info above
    handleCreatePublicEvent(eventData);
    setShowCreatePublic(false);
};

// The Public Event information to be submitted to the backend
export const setUniData = (event, handleCreateUniversity, setShowCreateUni) =>
{
    event.preventDefault();
    const formData = new FormData(event.target);

    const eventData = {
        name: formData.get('name'),
        location: formData.get('location'),
        description: formData.get('description'),
        domain: formData.get('emailDomain'),
    };
        
    // Set the eventInfo to the eventData we just got
    handleCreateUniversity(eventData);
    setShowCreateUni(false);
}