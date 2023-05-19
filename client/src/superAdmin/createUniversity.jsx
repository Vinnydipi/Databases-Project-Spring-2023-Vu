/* eslint-disable no-unused-vars */
import React from 'react';

// Import API
import { handleCreateUniversity } from './API/handleCreateUniversity';
// Import Function
import { setUniData } from './functions';

function CreateUniversity({ showCreateUni, setShowCreateUni })
{
    return(
        <div className='createFormWrapper'>
            {showCreateUni && (
                <form className='createForm' onSubmit={(event) => setUniData(event, handleCreateUniversity, setShowCreateUni)}>
                    <h1 className='title'>New University</h1>
                    <label>University Name:</label>
                        <input placeholder='Exact University Name' type='text' name='name' required/>
                    <label>Location:</label>
                        <input placeholder='City' type='text' name='location' required/>
                    <label>Description:</label>
                        <textarea placeholder='200 Characters Max' name='description' required/>
                    <label>Email Domain(Do Not Include @):</label>
                        <input placeholder='SuperAdmin Email' type='text' name='emailDomain' required></input>
                    <div className='submit-cancel-wrapper'>
                        <button className='sub-cancel' type='submit'>Submit</button>
                        <button className='sub-cancel' onClick={() => setShowCreateUni(false)}>Cancel</button>
                    </div>
                </form>
            )}
        </div>
    )
}

export default CreateUniversity;
