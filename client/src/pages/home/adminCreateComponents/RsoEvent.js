import React from 'react';

function CreateRsoEvent()
{
    return (
        <div className='form'>
            <form>
                <label>Event Name:
                    <input type='text' />
                </label>
                <label>Category:
                    <input type='text' />
                </label>
                <label>Description:
                    <textarea />
                </label>
                <label>Date/Time:
                    <input type='datetime-local' />
                </label>
                <label>Contact Number:
                    <input type='tel' />
                </label>
                <label>Contact Email:
                    <input type='email' />
                </label>
                <label>Host RSO(Spelled Exactly):
                    <input type='text' />
                </label>
                <label>Longitude:
                    <input type='number' step='any' />
                </label>
                <label>Latitude:
                    <input type='number' step='any' />
                </label>
            </form>
        </div>
    )
}   

export default CreateRsoEvent;