import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ userobj }) => (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">{ userobj.displayName }'s Profile</Link></li>
        </ul>
    </nav>
);

export default Navigation;