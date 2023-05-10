/* eslint-disable no-unused-vars */
import React from 'react';

// Import API
import { handleCreateUniversity } from './API/handleCreateUniversity';
// Import Function
import { setUniData } from './functions';

function CreateUniversity({ showCreateUni, setShowCreateUni })
{
    return(
        <div className='createUniContainer'>
            {showCreateUni && (
                <form className='universityForm' onSubmit={ setUniData(handleCreateUniversity, setShowCreateUni) }>
                    <button onClick={() => setShowCreateUni(false)}>X</button>
                    <br></br>
                    <label>University Name:</label><br></br>
                        <input type='text' name='name'/>
                    <br></br>
                    <label>Location:</label><br></br>
                        <input type='text' name='location'/>
                    <br></br>
                    <label>Description:</label><br></br>
                        <textarea name='description'/>
                    <br></br>
                    <label>Email Domain(Do Not Include @):</label><br></br>
                        <input type='text' name='emailDomain'></input>
                    <br></br>
                    <button type='submit'>Submit</button>
                </form>
            )}
        </div>
    )
}

export default CreateUniversity;
