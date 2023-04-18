import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

// Import API
import { handleCreateEvent } from '../API/event/handleCreateEvent';

function AdminCreateEvent({ showForm, setShowForm })
{
    // Holds RSO lists that the admin can make an event for
    const [rsoList, setRsoList] = useState([]);
    // The current logged in User
    const userId = sessionStorage.getItem('id'); 

    const setData = (event) =>
    {
        event.preventDefault();
        const formData = new FormData(event.target);

        // Finds hostRso id number
        const selectedRso = rsoList.find((rso) => rso.name  === formData.get('hostRso'));

        const eventData = 
        {
            name: formData.get('name'),
            category: formData.get('category'),
            description: formData.get('description'),
            time: formData.get('time'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            isPrivate: formData.get('isPrivate'),
            hostRso: formData.get('hostRso'),
            long: formData.get('long'),
            lat: formData.get('lat'),
            rsoID: selectedRso ? selectedRso.rsoId : 2, // adds the rsoID
        };
        
        handleCreateEvent(eventData)// Call the API function
    };

    useEffect(() =>
    {
        // Make a call to the backend to get the data
        Axios.get(`http://localhost:3001/mainPage/getRso?userId=${userId}`)
        .then(response =>
            {
                setRsoList(response.data);
            })
            .catch(error =>
            {
                console.log(error);
            });
    }, [userId, showForm]);

    return(
        <div className='form-wrapper'>
            {showForm && (
                <form className='eventForm' onSubmit={ setData }>
                    <button onClick={() => setShowForm(false)}>X</button>
                    <br></br>
                    <label>Event Name:
                        <input type='text' name='name'/>
                    </label>
                    <br></br>
                    <label>Category:
                        <input type='text' name='category'/>
                    </label>
                    <br></br>
                    <label>Description:
                        <textarea name='description'/>
                    <br></br>
                    </label>
                    <br></br>
                    <label>Date/Time:
                        <input type='datetime-local' name='time'/>
                    </label>
                    <br></br>
                    <label>Contact Number:
                        <input type='tel' name='phone'/>
                    </label>
                    <br></br>
                    <label>Contact Email:
                        <input type='email' name='email'/>
                    </label>
                    <br></br>
                    <label>Private Or Public</label>
                        <select name='isPrivate'>
                            <option value=''></option>
                            <option value='0'>Private</option>
                            <option value='1'>Public</option>
                        </select>
                    <br></br>
                    <label>Host RSO:
                        <select name='hostRso'>
                            <option value=''>Select RSO</option>
                            <option value='NONE'>NONE</option>
                            {rsoList.map((rso) => (
                                <option key={rso.rsoId} value={rso.name}>
                                    {rso.name}
                                </option>
                            ))}
                        </select>
                    </label>
                    <br></br>
                    <label>Longitude:
                        <input type='number' step='any' name='long'/>
                    </label>
                    <br></br>
                    <label>Latitude:
                        <input type='number' step='any' name='lat'/>
                    </label>
                    <br></br>
                    <button type='submit'>Submit</button>
                </form>
            )}
        </div>
    )
}

export default AdminCreateEvent;