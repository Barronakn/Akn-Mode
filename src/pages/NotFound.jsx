import React from 'react';
import { NavLink } from "react-router-dom";
const NotFound = () => {
    return (
      <div className="notFound">
        <img src="./pngtree-page-not-found-png-image_3829771.png" alt="" />
        <h1>Cette page n'existe pas</h1><br />
        <NavLink to="/">Home</NavLink>
      </div>
    );
};

export default NotFound;