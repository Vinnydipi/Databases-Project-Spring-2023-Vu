import React from 'react';
// Import css file
import './createEvent.css';

function CreateEvent({ rsoList, handleSubmit })
{
    return (
        <div className='form'>
            <form className='rsoForm' onSubmit={ handleSubmit }>
                <button>X</button>
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
        </div>
    )
}   

export default CreateEvent;