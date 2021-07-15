import { Card, Button } from 'react-bootstrap'
import { useState } from 'react'
import MyBadge from './MyBadge'


function Cardp (props) {
    const [showPrice, setShowPrice] = useState(null)
    const [btnColor, setBtnColor] = useState('primary')
    const [cardClass, setCardClass] = useState("px-3 py-4 m-0 border-0 bg-transparent w-100")

        return (
            <Card className={cardClass}>
             <MyBadge color="warning" price={props.theme.price} />
                <Card.Img className="imageFix" variant="top" src={props.theme.img} />
                <Card.Body className="d-flex flex-column pb-0 pt-2 px-0 justify-content-between">
                    <Card.Title className="mb-2">{props.theme.title}</Card.Title>
                    <div>
                        <Card.Text className="text-truncate first-Uppercase">
                            {props.theme.category}
                        </Card.Text>

                        <Button 
                        className="mt-3 w-100" 
                        variant={btnColor} 
                        onClick={ () => {
                            setShowPrice(props.theme.price) 
                            setBtnColor('success')
                            setCardClass("p-3 m-0 bg-selected border-0 w-100")
                            props.getUserSelectedBook(props.theme)
                        }

                        }
                        onDoubleClick={ () => {
                            setShowPrice('') 
                            setBtnColor('primary')
                            setCardClass("p-3 m-0 border-0 bg-transparent w-100")
                        }

                        }
                        >Order Now {showPrice && (<span>£ {showPrice}</span>)} 
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        )
}

export default Cardp
