import React, { useState } from 'react';
// Import form
import AdminCreateEvent from '../adminButton/adminCreateEvent';

function Navigation({ navigate, userType })
{
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="navigationButtons">
            {/* Navigates to the RSO page */}
            <button onClick={() => navigate('/mainPage/MainRso')}>View RSO's</button>
            {userType === 'admin' && (showForm 
                ? <AdminCreateEvent setShowForm={ setShowForm } showForm={showForm} /> 
                : <button onClick={() => setShowForm(true)}>Create Event</button>)}
        </div>
    )
}

export default Navigation;