import React from "react";

function Table ({ h2Tag, navigate, eventList })
{
    const handleMapClick = (lat, long) =>
    {
        // Construct the google maps URL with the lat and long
        const mapUrl = `https://www.google.com/maps?q=${lat},${long}`;

        // open a new window with the google maps url
        window.open(mapUrl, '_blank');
    }

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
                <th>Map Link</th>
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
                    <td>{val.isPrivate === 1 ? 'Public' : 'Private'}</td>
                    <td>{val.hostRso}</td>
                        {/* Create a link to google maps with the lat and long values */}
                    <td>
                        <button onClick={() => handleMapClick(val.latitude, val.longitude)}>
                            View Map
                        </button>
                    </td>
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