import React, { useState } from 'react';
import { Button, ButtonToolbar } from "react-bootstrap";
import LogInPage from './LogInPage';
import { Link } from 'react-router-dom';

function LogOut(props) {
    const [isLogOut, setisLogOut] = useState(
       false
    );
    function onClick() {
        sessionStorage.clear();
        setisLogOut(true)
    }
    return (
        <div>
            
            <Link to="/" onClick={onClick}><Button variant="danger" style={{ "marginLeft": "20px" }}>
                LogOut
            </Button></Link>
        </div>

    );
}

export default LogOut
