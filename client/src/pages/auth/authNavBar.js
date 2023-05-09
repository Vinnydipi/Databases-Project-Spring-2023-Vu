import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function NavButtons() 
{
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className='navButtons'>
            {location.pathname !== '/' && (
                <button onClick={() => navigate('/')}>To Login Page</button>
            )}
            {location.pathname !== '/registerSuperAdmin' && (
                <button onClick={() => navigate('/registerSuperAdmin')}>Superadmin Account Registration</button>
            )}
            {location.pathname !== '/registerStudent' && (
                <button onClick={() => navigate('/registerStudent')}>Student Account Registration</button>
            )}
        </div>
    )
}

export default NavButtons;