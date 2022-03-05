import React from 'react';
import { BrowserRouter as Router, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
const requiredAuth = ({ children, ...rest }) => {
    const session = localStorage.getItem('session') == true || false
    return (
        <Route
            {...rest}
            render={({ location }) =>
                session ? (
                    children
                ) : (
                    <Navigate
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
export default requiredAuth;