import React from "react";
import "./Nav.css";

import {
    Link, NavLink
} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="topnav">
            <NavLink end to="/"  >
                Home
            </NavLink>
            <NavLink to="/todo" >
                Todo
            </NavLink>
            <NavLink to="/about">
                About
            </NavLink>
            <NavLink to="/user">
                User
            </NavLink>

        </div>
    )
}

export default Navigation