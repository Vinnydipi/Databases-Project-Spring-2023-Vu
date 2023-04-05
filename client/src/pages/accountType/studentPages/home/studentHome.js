/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { UserContext } from '../../../utils/UserContext';

// Importing the logout feature
import { logout } from '../../../components/logout';

// Importing styling
import '../style/studentHome.css';
// For the check box...idk man
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function StudentHome()
{

    // Used to navigate around the web app
    const navigate = useNavigate();

    // Getting userType
    const userType = useContext(UserContext);
    // This is for testing CSS purposes(Delete once backend is working!)
    const test = [
        {
            name: 'event 1',
            time: '10am',
            location: 'Orladno',
            type: 'private'
        },
        {
            name: 'event 2',
            time: '5:00 pm',
            location: 'Gville',
            type: 'public'
        }
    ]

    // check boxes
    const [checkedPrivate, setCheckedPrivate] = useState(true);
    const [checkedPublic, setCheckedPublic] = useState(true);
    const [checkedRSO, setCheckedRSO] = useState(true);

    // Handles for each checkBox 
    // The '!' negates the current value, so !true = false and !false = true
    const handleCheckedPrivate = () =>
    {
        setCheckedPrivate(!checkedPrivate);
    }
    const handleCheckedPublic = () =>
    {
        setCheckedPublic(!checkedPublic);
    }
    const handleCheckedRSO = () =>
    {
        setCheckedRSO(!checkedRSO);
    }

    // This array will hold all the events that the user
    // wished to view on the studentHomePage
    let events = [];

    useEffect(() =>
    {  
        console.log("Is Private: " + checkedPrivate);
        console.log("Is Public: " + checkedPublic);
        console.log("Is RSO: " + checkedRSO);

    }, [checkedPrivate, checkedPublic, checkedRSO]);

return(

    <div className="superAdminEvents">
            {/* page title */}
            STUDENT HOME PAGE
        <div className="navigationButtons">
            {/* Logs the user out and returns to the login page*/}
            <button onClick={ logout }>Logout</button>
            {/* Navigates to the RSO page */}
            <button>View RSO's</button>
        </div>
        <div className="checkBoxes">
            {/* INPUT FOR CHECKED PRIVATE BOX */}
            <input type="checkbox" checked={ checkedPrivate } onChange={ handleCheckedPrivate }/>
            <span className="privateCheckMark">
                { checkedPrivate && <FontAwesomeIcon icon={ faCheck }/> }
                {/* button name */}
                Private Events
            </span>
            {/* INPUT FOR CHECKED PUBLIC BOX */}
            <input type="checkbox" checked={ checkedPublic } onChange={ handleCheckedPublic }/>
            <span className="privateCheckMark">
                { checkedPublic && <FontAwesomeIcon icon={ faCheck }/> }
                {/* button name */}
                Public Events
            </span>
            {/* INPUT FOR CHECKED RSO BOX  */}
            <input type="checkbox" checked={ checkedRSO } onChange={ handleCheckedRSO }/>
            <span className="privateCheckMark">
                { checkedRSO && <FontAwesomeIcon icon={ faCheck }/> }
                {/* button name */}
                RSO Events
            </span>
        </div>
            <div className="eventTableWrapper">
                <div className="eventTable">
                    <table>
                        <thead>
                            <tr>
                                <th>Event Name</th>
                                <th>Time</th>
                                <th>Location</th>
                                <th>Private/Public/Rso</th>
                                <th>Rate Event</th>
                            </tr>
                        </thead>
                        <tbody>
                            {test.map( event => (
                                <tr key ={test.name}>
                                    <td>{event.name}</td>
                                    <td>{event.time}</td>
                                    <td>{event.location}</td>
                                    <td>{event.type}</td>
                                    <td>
                                        <button>Rate</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default StudentHome;