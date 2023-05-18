import React from "react";

import './rsoStyle.css';

function RsoPage({ rsoList, rsoName, setRsoName, navigate, handleJoinRso, handleLeaveRso, handleSubmitNewRso, logout, uniId, userId })
{
    return (
        <>
            <div className='taskBar'>
                <button onClick={ logout }>Logout</button>
                <button onClick={() => navigate('/mainPage')}>Home</button>
            </div>
            <div className='rso-container'>
                <div className='rso-inputForm-container'>
                    <div className='rso-inputForm'>
                        <form className='createRsoForm' id='createRsoForm' onSubmit={(e) =>
                        {
                            e.preventDefault();
                            handleSubmitNewRso(rsoName, uniId, userId);
                        }}>
                            <h2>Submit New RSO</h2>
                            <label htmlFor='name'>RSO Name:</label>
                            <input placeholder='Must Be Unique' type='text' id='name' onChange={(e) =>
                            {
                                setRsoName(e.target.value);
                            }}></input>
                            <br></br>
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                </div>   
                <div className='rso-table-container'>     
                    <div className='table'>
                        <h2>Joinable Rso's</h2>
                        <table>
                            <thead>
                                    <tr>
                                        <th>RSO Name</th>
                                        <th>University</th>
                                        <th>Total Members</th>
                                        <th>Status</th>
                                        <th>Member</th>
                                        <th>Actions</th>
                                    </tr>
                            </thead>
                            <tbody>
                                {rsoList.map((rso) => (
                                    <tr key={rso.rsoId}>
                                        <td>{rso.name}</td>
                                        <td>{rso.universityId === 1 ? 'UCF' : 'N/A'}</td>
                                        <td>{rso.memberCount}</td>
                                        <td>{rso.status}</td>
                                        <td>{rso.isMember ? 'Member' : 'Not a Member'}</td>
                                        <td>
                                            <button onClick={() => 
                                            {
                                                if (rso.isMember)
                                                    handleLeaveRso(rso.rsoId, userId);
                                                else
                                                    handleJoinRso(rso.rsoId, userId);
                                            }}>
                                                {rso.isMember ? 'Leave' : 'Join'}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>                              
            </div>
        </>
    )
}

export default RsoPage;