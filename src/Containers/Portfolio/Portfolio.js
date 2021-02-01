import React from "react";
import { Route } from "react-router-dom";
import Navigation from "../../Components/Navigation/Navigation";

// Containers
import Home from "./Home/Home";

const Portfolio = () => {
    return (
        <>
            <i id="open-toggle" className="fas fa-bars "></i>
            <div id="body-two-column-grid">
                <aside>
                    <Navigation />
                </aside>
                <Route to="/" render={() => <Home />} />
            </div>
        </>
    );
};

export default Portfolio;
