import React from 'react';

// Import Styles
import './style/viewOptionStyle.css';

function ViewOptions({ viewOption, setViewOption, setH2Tag })
{
    return(
        <form>
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
                </label><br></br>
                <label>
                    <input type="radio" name="eventType"
                        value="rso" checked={ viewOption === 'rso' }
                        onChange={(e) => 
                        {
                            setViewOption(e.target.value);
                            setH2Tag(e.target.value);
                        }}/>
                    RSO Events
                </label><br></br>
                <label>
                    <input type="radio" name="eventType"
                        value="public" checked={ viewOption === 'public' }
                        onChange={(e) => 
                        {
                            setViewOption(e.target.value);
                            setH2Tag(e.target.value);
                        }}/>
                    Public Events
                </label><br></br>
            </div>
        </form>
    )
}

export default ViewOptions;