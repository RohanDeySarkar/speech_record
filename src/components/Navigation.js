import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar
} from 'react-bootstrap';

export default class Navigation extends Component {
    render(){
        return(
            <Navbar className="bg-dark px-3 py-3 mx-auto">
                <NavLink 
                    className="d-inline p-2 bg-dark text-white px-md-5"
                    to="/">View My Speeches
                </NavLink>
                <NavLink 
                    className="d-inline p-2 bg-dark text-white px-md-5"
                    to="/submit">Submit a New Speech
                </NavLink>
            </Navbar>
        )
    }
}

