import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "../../Components/Navigation/Navigation";
import Projects from "../../Containers/Portfolio/Project/Project";

// Containers
import Home from "./Home/Home";

const Portfolio = () => {
    const [loading, setLoading] = useState(true);
    const [toggle, setToggle] = useState(true);
    const [toggleClass, setToggleClass] = useState("");
    // let toggleClass = "";

    // Updates loading state to false after 6 seconds
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    });

    const toggleHandler = () => {
        // Change state after execution
        setToggle(!toggle);

        // Check state of toggle to determine class to display
        if (toggle) {
            setToggleClass("change");
        } else {
            setToggleClass("");
        }
    };
    return (
        <>
            {loading === false ? (
                <>
                    <i
                        id="open-toggle"
                        className="fas fa-bars "
                        onClick={toggleHandler}
                    ></i>
                    <div id="body-two-column-grid">
                        <aside className={toggleClass}>
                            <Navigation toggle={toggleHandler} />
                        </aside>
                        <Switch>
                            <Route path="/" exact render={() => <Home />} />
                            <Route
                                path="/projects/one"
                                exact
                                render={() => <Projects />}
                            />
                        </Switch>
                    </div>
                    {/* <Footer /> */}
                </>
            ) : (
                <div id="loader-container">
                    <div>
                        <h1 id="loader__title">Loading...</h1>
                        <div id="loader"></div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Portfolio;
