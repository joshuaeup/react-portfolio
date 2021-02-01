import React from "react";
import { Route } from "react-router-dom";

// Containers
import Home from "./Home/Home";

const Portfolio = () => {
    return (
        <>
            <Route to="/" render={() => <Home />} />
        </>
    );
};

export default Portfolio;
