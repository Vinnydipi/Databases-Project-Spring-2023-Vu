/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// Import form
import AdminCreateEvent from '../adminButton/adminCreateEvent';
// Import superAdmin buttons
import CreatePublicEvent from '../superAdmin/createPublicEvent';
import CreateUniversity from '../superAdmin/createUniversity';

// Importing the logout feature
import { logout } from '../components/logout'

// Importing the Style
import '../styles/navigationStyle.css'

function TaskBar({ navigate, userType })
{
    const [showForm, setShowForm] = useState(false);
    const [showCreatePublic, setShowCreatePublic] = useState(false);
    const [showCreateUni, setShowCreateUni] = useState(false);

    return (
        <div className="taskBar">
            {/* Navigates to the RSO page */}
            <button className='navButton' onClick={() => navigate('/mainPage/MainRso')}>View RSO's</button>
            {userType === 'admin' && (showForm 
                ? <AdminCreateEvent setShowForm={ setShowForm } showForm={showForm} /> 
                : <button className='navButton' onClick={() => setShowForm(true)}>Create Event</button>)}
                
            {userType === "superadmin" && (showCreatePublic ? (
                <CreatePublicEvent
                    setShowCreatePublic={setShowCreatePublic}
                    showCreatePublic={showCreatePublic}
                />
            ) : (
                <button className='navButton'
                        onClick={() => {
                        setShowCreatePublic(true);
                        setShowCreateUni(false);
                    }}>
                    Create Public Event
                </button>
            ))}
            {userType === "superadmin" && (showCreateUni ? (
                <CreateUniversity setShowCreateUni={setShowCreateUni} showCreateUni={showCreateUni} />
            ) : (
                <button className='navButton'
                        onClick={() => {
                        setShowCreateUni(true);
                        setShowCreatePublic(false);
                    }}>
                    Create University
                </button>
            ))}
            {/* Logs the user out and returns to the login page*/}
			<button className='navButton' onClick={logout}>Logout</button>
        </div>
    )
}

export default TaskBar;