import { useEffect } from 'react'
import { useState } from 'react'
import { Alert, Row } from 'react-bootstrap'

function WarningSign (props) {

    const [alertClasses, setAlertClasses] = useState("m-0 w-100 fade")

    useEffect( () => setTimeout(() =>  setAlertClasses("m-0 w-100 fadeOut"), 2300),[])

        return (
            <Row className="px-3">
                <Alert className={alertClasses} variant={props.variant}>
                    {props.text} 
                </Alert>
            </Row>
        )   
}

export default WarningSign
