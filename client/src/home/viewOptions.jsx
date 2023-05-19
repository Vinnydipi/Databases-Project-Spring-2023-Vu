import React from 'react';

function ViewOptions({ viewOption, setViewOption, setH2Tag })
{
    return(
         <div className="viewContainer">
             <h3>View Options</h3>
             <label>
                <input type="radio" name="eventType"
                    value="private" checked={ viewOption === 'private' }
                    onChange={(e) => 
                    {
                        setViewOption(e.target.value);
                        setH2Tag(e.target.value);
                    }}/>
                Private Events
            </label>
            <label>
                <input type="radio" name="eventType"
                    value="rso" checked={ viewOption === 'rso' }
                    onChange={(e) => 
                    {
                        setViewOption(e.target.value);
                        setH2Tag(e.target.value);
                    }}/>
                RSO Events
            </label>
            <label>
                <input type="radio" name="eventType"
                    value="public" checked={ viewOption === 'public' }
                    onChange={(e) => 
                    {
                        setViewOption(e.target.value);
                        setH2Tag(e.target.value);
                    }}/>
                Public Events
            </label>
        </div>
 
    )
}

export default ViewOptions;