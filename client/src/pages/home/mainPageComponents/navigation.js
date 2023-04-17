import React from 'react';

function Navigation({ navigate, userType })
{
    return (
        <div className="navigationButtons">
            {/* Navigates to the RSO page */}
            <button onClick={() => navigate('/mainPage/MainRso')}>View RSO's</button>
            {userType === 'admin' && (<button onClick={() => navigate('/mainPage/createEvent')}>Create Event</button>)}
        </div>
    )
}

export default Navigation;