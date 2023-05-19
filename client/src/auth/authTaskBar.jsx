import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Import Logo
import UCFLogo from '../components/Logo';

export function TaskBar() 
{
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className='navButtons'>
            <UCFLogo/>
            {location.pathname !== '/' && (<button onClick={() => navigate('/')}>Login</button>)}
            {location.pathname !== '/registerSuperAdmin' && (<button onClick={() => navigate('/registerSuperAdmin')}>Superadmin Registration</button>)}
            {location.pathname !== '/registerStudent' && (<button onClick={() => navigate('/registerStudent')}>Student Registration</button>)}
        </div>
    )
}

export default TaskBar;