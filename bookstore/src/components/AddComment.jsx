import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import StarRatings from 'react-star-ratings'
import { useState } from 'react'
import { useEffect } from 'react'

export default function AddComment(props) {

    const [userReview, setUserReview] = useState({
        comment: '',
        rate: undefined,
        elementId: props.book.asin
    })

    const inputHandler = (key, value) => {
        setUserReview({
            ...userReview,
                [key]: value
        })
    }
    const getRate = (newRating) => {
        setUserReview({
            ...userReview,
             rate: newRating
        })
    }

    const sendForm = async (e) => {
        e.preventDefault()
        await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
            method: 'POST',
            body: JSON.stringify(userReview),
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWYwNmIzNTgxNzAwMTVjMjI3MDUiLCJpYXQiOjE2MjUwNTQ5ODIsImV4cCI6MTYyNjI2NDU4Mn0.JwwVnNEQqYHceQ2fscSxdyITJxc4U7GeQFaHsd0Vs0Y",
                "Content-Type": "application/json"
            }
        })

        setUserReview({
            ...userReview,
            comment: '',
            rate: undefined
        })
    
        await props.getNewComments()
    }

    useEffect(() =>{
        setUserReview({
            ...userReview,
            elementId: props.book.asin
        })
    },[props.book.asin])

    // componentDidUpdate(prevProps, prevState){
    //     if(this.props.book.asin !== prevProps.book.asin){
    //         this.setState({
    //             userReview: {
    //                 ...this.state.userReview,
    //                 elementId: this.props.book.asin
    //             }
    //         })
    //     }
    // }

        return (
            <div className="ml-2">
                <h2 className="px-4 ml-2 align-items-center">{props.title}</h2>
                <Form onSubmit={sendForm} className="justify-content-center flex-column" inline>
                    <Form.Group className="mb-3 d-flex flex-column justify-content-center" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Leave a comment</Form.Label>
                        <Form.Control onChange={(e) => inputHandler('comment', e.target.value)} value={userReview.comment} as="textarea" rows={3} />
                    </Form.Group>
                    <div className="d-flex mb-4">
                                <StarRatings
                                    rating={userReview.rate}
                                    starRatedColor="blue"
                                    starHoverColor="blue"
                                    starEmptyColor="rgb(129 129 129)"
                                    changeRating={getRate}
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension="16px"
                                    starSpacing="4px"
                                />
                    </div>
                    <Button type="submit" variant="outline-success">Add a comment</Button>
                </Form>

            </div>
        )
}
