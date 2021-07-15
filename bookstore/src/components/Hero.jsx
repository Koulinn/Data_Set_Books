import { Jumbotron, Button, Container } from 'react-bootstrap'

function Hero() {
    return (
        <Jumbotron className="row jumboBG rounded-0 px-0">
           <Container className="px-4">
                <h1 className="text-light fw-bold">Book Store</h1>
                <p className="text-light fs-3">
                    Ultimate book collection
                </p>
                <p className="mt-5">
                    <Button variant="success">Order now!</Button>
                </p>
           </Container>
        </Jumbotron>
    )
}

export default Hero
