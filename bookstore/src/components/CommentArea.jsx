import { Card } from 'react-bootstrap'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import WarningSign from './WarningSign'
import { useState } from 'react'
import { useEffect } from 'react'


export default function CommentArea (props) {
    const [commentList, setCommentList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorHandle, setErrorHandle] = useState(false)
    const [bookTitle, setBookTitle] = useState('Trending...')
    const [remainingComments, setRemainingComments] = useState(0)

    useEffect(() => {
        getComments()
    }, [])       
    

    const getComments = async () =>{
        try{

            let commentsRes = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + props.book.asin, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWYwNmIzNTgxNzAwMTVjMjI3MDUiLCJpYXQiOjE2MjUwNTQ5ODIsImV4cCI6MTYyNjI2NDU4Mn0.JwwVnNEQqYHceQ2fscSxdyITJxc4U7GeQFaHsd0Vs0Y",
                }
            })
            
            if(commentsRes.ok){

                let comments = await commentsRes.json()
                setCommentList([...comments])
                setIsLoading(false)
                setRemainingComments(comments.length)
            } else {
                setCommentList([])
                setIsLoading(false)
                setErrorHandle(true)
            }
        } catch (err){
        }
    }

    useEffect(()=> {
        getComments()
        setBookTitle(props.book.title)
    }, [props.book.title])
   
        return (  
            (<Card className="justify-content-center bg-transparent border-0">
                {errorHandle && <WarningSign variant="danger" text="Sorry try again in a bit"></WarningSign>}
                <h2>{bookTitle}</h2>
                <Card.Img className="imageFixBig" variant="top" src={props.book.img}>
                </Card.Img>
                {isLoading && (<Loading></Loading>)}
                {remainingComments ? 
                    (commentList.map(comment=><CommentList getNewComments={getComments} key={comment._id} reviewInfo={comment}></CommentList> )) 
                    : (<p className="mt-3 text-center">No comments to display</p>) }
                <AddComment getNewComments={getComments} book={props.book}></AddComment>
            </Card>) 
        )
}
