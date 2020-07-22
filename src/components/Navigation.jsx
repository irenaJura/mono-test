import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                Home
            </Link>
            <div className="navbar-nav">
                <NavLink className="nav-item nav-link" to="/edit">
                    Edit Vehicles
               </NavLink>
            </div>
        </nav>

    );
}

export default Navigation;