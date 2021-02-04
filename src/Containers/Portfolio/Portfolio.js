import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Navigation from "../../Components/Navigation/Navigation";

// Containers
import Home from "./Home/Home";

const Portfolio = () => {
    const [loading, setLoading] = useState(true);

    // Updates loading state to false after 6 seconds
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    });
    return (
        <>
            {/* {loading === false ? (
                <> */}
            <i id="open-toggle" className="fas fa-bars "></i>
            <div id="body-two-column-grid">
                <aside>
                    <Navigation />
                </aside>
                <Route to="/" render={() => <Home />} />
            </div>
            {/* </>
            ) : (
                <div id="loader-container">
                    <div>
                        <h1 id="loader__title">Loading...</h1>
                        <div id="loader"></div>
                    </div>
                </div>
            )} */}
        </>
    );
};

export default Portfolio;
