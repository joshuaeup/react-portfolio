import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Projects from "../../Containers/Portfolio/Project/Project";
import ProjectsData from "./ProjectsData.js";

// Containers
import Home from "./Home/Home";

const Portfolio = () => {
    const [loading, setLoading] = useState(true);
    const [toggle, setToggle] = useState(true);
    const [toggleClass, setToggleClass] = useState("");
    const [projects] = useState(ProjectsData);

    // Updates loading state to false after 6 seconds
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    });

    // Method to find product using param
    const findProject = (id) => {
        // Find element with matching title
        const selectedProject = projects.find((item) => {
            return item.id === Number(id);
        });

        // Log message and exit if error
        if (!selectedProject) {
            console.log("Project Not Found");
            return;
        }

        // Return result
        return selectedProject;
    };

    const toggleHandler = () => {
        // Change state after execution
        setToggle(!toggle);

        // Check state of toggle to determine class to display
        if (toggle) {
            setToggleClass("change");
        } else {
            setToggleClass("");
        }
        console.log("Clicked");
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
                        <Switch>
                            <Route
                                path="/"
                                exact
                                render={() => (
                                    <Home
                                        toggleClass={toggleClass}
                                        toggleHandler={toggleHandler}
                                        data={projects}
                                    />
                                )}
                            />
                            <Route
                                path="/projects/:id"
                                exact
                                render={(props) => (
                                    <Projects
                                        toggleClass={toggleClass}
                                        toggleHandler={toggleHandler}
                                        data={findProject(
                                            props.match.params.id
                                        )}
                                        id={props.match.params.id}
                                        length={projects.length}
                                    />
                                )}
                            />
                        </Switch>
                    </div>
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
