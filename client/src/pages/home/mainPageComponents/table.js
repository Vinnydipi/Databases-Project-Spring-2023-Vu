import React from "react";

function Table ({ h2Tag, navigate, eventList })
{
    return(
        <div className='eventTable'>
            <h2>viewing {h2Tag} events</h2>
            <button onClick={ () => navigate('/mainPage/editReviews') }>EDIT REVIEWS</button>
            <table>
            <thead>
                <tr>
                <th>Event Name</th>
                <th>Category</th>
                <th>Description</th>
                <th>Date/Time</th>
                <th>Contact Number</th>
                <th>Contact Email</th>
                <th>isApproved</th>
                <th>isPrivate</th>
                <th>Host RSO</th>
                <th>long.</th>
                <th>lat.</th>
                <th>Review Event</th>
                </tr>
            </thead>
            <tbody>
                {eventList.map((val) => (
                <tr key={val.eventId}>
                    <td>{val.name}</td>
                    <td>{val.category}</td>
                    <td>{val.description}</td>
                    <td>{val.time}</td>
                    <td>{val.contactPhone}</td>
                    <td>{val.contactEmail}</td>
                    <td>{val.isApproved === 0 ? 'Pending Approval' : 'Active'}</td>
                    <td>{val.isPrivate === 1 ? 'Private' : 'Public'}</td>
                    <td>{val.hostRso}</td>
                    <td>{val.longitude}</td>
                    <td>{val.latitude}</td>
                    <td>
                    {/* Navigates to the review page  */}
                    {/* And stores the event name in sessionStorage */}
                    <button onClick={() => {
                        sessionStorage.setItem('eventName', val.name);
                        sessionStorage.setItem('eventId', val.eventId);
                        navigate('/mainPage/ReviewForm');
                    }}>Review Event</button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    )
}

export default Table;