import React from "react";
import { Route } from "react-router-dom";

// Containers
import Home from "./Home/Home";

// Components
import Navigation from "../../Components/Navigation/Navigation";

const Portfolio = () => {
    return (
        <>
            <Navigation />
            <main id="Main">
                <Route to="/" render={() => <Home />} />
            </main>
        </>
    );
};

export default Portfolio;
