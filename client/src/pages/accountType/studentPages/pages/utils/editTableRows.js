import React from 'react';

const EditTableRow = ({ review, handleCancelClick, handleNewRating, 
                        handleNewReview, handleSubmitNewData, handleDeleteReview}) =>
{
    return(
        <tr key={review.commentId}>
            <td>
                <select onChange={ (e) => handleNewRating(e.target.value) }>
                    <option value=''>Update Rating</option>
                    <option value='1'>1 Star</option>
                    <option value='2'>2 Stars</option>
                    <option value='3'>3 Stars</option>
                    <option value='4'>4 Stars</option>
                    <option value='5'>5 Stars</option>
                </select>
            </td>
            <td>
                <input
                    type='text'
                    placeholder='Update Review'
                    name='review'
                    onChange={ (e) => handleNewReview(e.target.value) }
                ></input>
            </td>
            <td>
                <button onClick={ handleSubmitNewData }>Save</button>
                <br></br>
                <button onClick={ handleCancelClick }>Cancel</button>
                <br></br>
                <button onClick={ handleDeleteReview }>Delete</button>
            </td>
        </tr>
    )
}

export default EditTableRow;