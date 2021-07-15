import { Form, Col, Row, Button, InputGroup, Container } from 'react-bootstrap'
import { useState, useEffect } from 'react';


function FormComp() {
    const [validated, setValidated] = useState(false);

    const [nameInput, setNameInput] = useState('')
    const [nameInputVal, setNameInputVal] = useState(false)

    const [lastNameInput, setLastNameInput] = useState('')
    const [lastNameInputVal, setLastNameInputVal] = useState(false)


    const [emailInput, setEmailInput] = useState('')
    const [emailInputVal, setEmailInputVal] = useState(false)


    const [passwordInput, setPasswordInput] = useState('')
    const [passwordInputVal, setPasswordInputVal] = useState(false)

    const [btnState, setBtnState] = useState(true)

    


    const [isValidated, setIsValidated] = useState(false)

    useEffect(() => {
        checkName()
        checkLastName()
        checkPassWord()
        checkEmail()
        changeBtnState()

    }, [nameInput, lastNameInput, emailInput, passwordInput, btnState])

    const changeBtnState = () =>{
        if(nameInput && lastNameInput && emailInput && passwordInput)
        setBtnState(false)
    }

    const checkName = () => {
        if (nameInput.length > 1) {
            setNameInputVal(true)

        } else {
            setNameInputVal(false)

        }

    }
    const checkLastName = () => {
        if (lastNameInput.length > 2) {
            setLastNameInputVal(true)

        } else {
            setLastNameInputVal(false)

        }

    }

    const checkPassWord = () => {
        if ((passwordInput.length > 7) && passwordInput.match(/[A-Za-z]/) && passwordInput.match(/[0-9]/)) {
            setPasswordInputVal(true)
        } else {
            setPasswordInputVal(false)
        }
    }

    const checkEmail = () => {
        if (emailInput.includes('.') && emailInput.includes('@') && (emailInput.length > 4)) {
            setEmailInputVal(true)
            console.log('Email vvaldasdasdasdasd', emailInput.includes('.'), emailInput.includes('@'))
        } else {
            setEmailInputVal(false)
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true)
        
        if (nameInput && lastNameInput && emailInput && passwordInput) {
            setIsValidated(true)
        } 
    };

    //     Name - Required, at least 2 chars
    // Surname - Required, at least 3 chars
    // Email - Required - Should be an email field
    // Password - Required - Should contain at least 8 chars, 1 digit, 1 letter
    // PasswordConfirm - Required - Should be equal than Password

    return (
        //   <Form noValidate validated={validated} onSubmit={handleSubmit}>
       <Container>
            <Row>
               <Col md={6}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            {/* First Name */}
                            <Form.Group as={Col} md="8" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    onChange={(e) => setNameInput(e.target.value)}
                                    isValid={nameInputVal}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Your name should have at least 2 characters
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
            
                        {/* Last Name */}
                        <Row>
                            <Form.Group as={Col} md="8" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                    onChange={(e) => setLastNameInput(e.target.value)}
                                    isValid={lastNameInputVal}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Your name should have at least 3 characters
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        {/* Email */}
                        <Row>
                            <Form.Group as={Col} md="8" controlId="validationCustomUsername">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    required
                                    onChange={(e) => setEmailInput(e.target.value)}
                                    isValid={emailInputVal}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please check your e-mail
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
            
                        {/* PassWord */}
                        <Row>
                            <Form.Group as={Col} md="8" controlId="validationCustom02">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    required
                                    type="password"
                                    placeholder="password"
                                    onChange={(e) => setPasswordInput(e.target.value)}
                                    isValid={passwordInputVal}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Your password should have at least 8 characters
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Your password should have at a number
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Your password should have at least a letter
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
            
                        <Button disabled={btnState} type="submit">Submit form</Button>
                    </Form >
               </Col>
               <Col md={6}>
                   {isValidated && <h4 className="mb-4">Please check your information</h4>}
                    {isValidated && (<p>Name: {nameInput}</p>)}
                    {isValidated && (<p>Last Name: {lastNameInput}</p>) }
                    {isValidated && (<p>Email: {emailInput}</p>) }
                    {isValidated && (<p>PassWord: ****{passwordInput.slice(passwordInput.length - 3, passwordInput.length)}</p>)}
                         
               </Col>
            </Row>
       </Container>
    )
}

export default FormComp