import React, { useState } from "react";
import { Alert } from 'react-bootstrap';

function AlertMessage({ msg }) {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert className="mt-2" variant="danger" onClose={() => setShow(false)} dismissible>
                <p>{msg}</p>
            </Alert>
        );
    }
    return null;
}

export default AlertMessage;
