import React from 'react';

const ReadOnlyRow = ({ review, handleEditReview, handleDeleteReview }) =>
{
    return(
        <tr key={review.commentId}>
                <td>{review.rating === 1 ? '1 Start' : review.rating + ' Stars'}</td>
                <td>{review.review}</td>
                <td>
                    <button type='button' 
                            onClick={(event) => handleEditReview(event, review)}>
                        Edit
                    </button>
                </td>
        </tr>
    )
}

export default ReadOnlyRow;