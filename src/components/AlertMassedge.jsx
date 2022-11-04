import React from 'react'

import Alert from 'react-bootstrap/Alert'

const AlertMassedge = ({ show, setShow, alertMessage }) => {
    if (show) {
        return (
            <Alert
                variant={
                    alertMessage.message === 'Enter text for note!'
                        ? 'warning'
                        : 'success'
                }
                onClose={() => setShow(false)}
                dismissible
                className="alert"
            >
                <Alert.Heading>{alertMessage.message}</Alert.Heading>
            </Alert>
        )
    }
}

export default AlertMassedge
