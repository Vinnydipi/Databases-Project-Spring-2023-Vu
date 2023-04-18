/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// Import form
import AdminCreateEvent from '../adminButton/adminCreateEvent';
// Import superAdmin buttons
import CreatePublicEvent from '../superAdminButton/createPublicEvent';
import CreateUniversity from '../superAdminButton/createUniversity';

// Importing the logout feature
import { logout } from '../../components/logout';

// Import Styles
import './style/navStyle.css';

function Navigation({ navigate, userType })
{
    const [showForm, setShowForm] = useState(false);
    const [showCreatePublic, setShowCreatePublic] = useState(false);
    const [showCreateUni, setShowCreateUni] = useState(false);

    return (
        <div className="navigationButtons">
            {/* Navigates to the RSO page */}
            <button onClick={() => navigate('/mainPage/MainRso')}>View RSO's</button>
            {userType === 'admin' && (showForm 
                ? <AdminCreateEvent setShowForm={ setShowForm } showForm={showForm} /> 
                : <button onClick={() => setShowForm(true)}>Create Event</button>)}
            {userType === "superadmin" && (showCreatePublic ? (
                <CreatePublicEvent
                    setShowCreatePublic={setShowCreatePublic}
                    showCreatePublic={showCreatePublic}
                />
            ) : (
                <button onClick={() => {
                        setShowCreatePublic(true);
                        setShowCreateUni(false);
                    }}>
                    Create Public Event
                </button>
            ))}
            {userType === "superadmin" && (showCreateUni ? (
                <CreateUniversity setShowCreateUni={setShowCreateUni} showCreateUni={showCreateUni} />
            ) : (
                <button onClick={() => {
                        setShowCreateUni(true);
                        setShowCreatePublic(false);
                    }}>
                    Create University
                </button>
            ))}
            {/* Logs the user out and returns to the login page*/}
			<button onClick={logout}>Logout</button>
        </div>
    )
}

export default Navigation;