import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import WarningSign from './WarningSign'

export default function CommentList (props) {

    const [commentExists, setCommentExists] = useState(true)

    const removeComment = async (e) => {
         await fetch('https://striveschool-api.herokuapp.com/api/comments/' + props.reviewInfo._id, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWYwNmIzNTgxNzAwMTVjMjI3MDUiLCJpYXQiOjE2MjUwNTQ5ODIsImV4cCI6MTYyNjI2NDU4Mn0.JwwVnNEQqYHceQ2fscSxdyITJxc4U7GeQFaHsd0Vs0Y",
            }
        })
        // let res = await deleteRes.json()
        setCommentExists(false)
        setTimeout(() => props.getNewComments(), 3000)
    }
   
        return (
            <>
            {!commentExists && <WarningSign text="Comment deleted Successfully" variant="success"></WarningSign>}
            {commentExists &&
            <div className="my-3 ml-2">
                <div>
                    <h6>Comment</h6>
                    <p>{props.reviewInfo.comment}</p>
                </div>
                <div>
                    <h6>Rate</h6>
                    <p>{props.reviewInfo.rate}</p>
                </div>
                <div>
                    <h6>Date</h6>
                    <p>{props.reviewInfo.createdAt}</p>
                </div>

                <Button onClick={() => removeComment()} >Delete Comment</Button>

            </div>
            }
            </>
        )

    
}

