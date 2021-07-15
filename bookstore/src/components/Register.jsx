import React from 'react'
import { Container, Row } from 'react-bootstrap'
import FormComp from './FormComp'

function Register() {
    return (
        <Container>
            <Row className="flex-column my-5">
                <div className="mb-5">
                    <h1>Register</h1>
                    <h6>Start you fee trial</h6>
                </div>
                <FormComp />
                
            </Row>
        </Container>
    )
}

export default Register
