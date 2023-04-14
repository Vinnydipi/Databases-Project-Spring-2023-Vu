/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

// Logout feature
import { logout } from '../../../../components/logout';

function MainRso()
{
    return (
        <>
            <div className='inputForm'>
                RSO PAGE
                <form>
                    <h2>Request To Create RSO</h2>
                    <label htmlfor='name'>RSO Name:</label>
                    <input type='text' id='name'></input>
                    <br></br>
                    <label htmlfor='email'>Creator's Email:</label>
                    <input type='text' id='email'></input>
                    <br></br>
                    <button type='submit'>Request</button>
                </form>
            </div>
            <div className='table'>
                <table>
                    <thead>
                       <h1>Active Rso's</h1>
                            <tr>
                                <th>RSO Name</th>
                                <th>Admin</th>
                                <th>Total Members</th>
                                <th>Status</th>
                            </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Row 1</td>
                            <td>Row 2</td>
                            <td>Row 3</td>
                            <td>Row 4</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default MainRso;