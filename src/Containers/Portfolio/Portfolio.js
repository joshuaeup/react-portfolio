import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "../../Components/Navigation/Navigation";
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
    const findProject = (project) => {
        // Find element with matching title
        const selectedProject = projects.find((item) => {
            return String(item.title) === project;
        });

        // Log message and exit if error
        if (!selectedProject) {
            console.log("Product Not Found");
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
                            <Route
                                path="/"
                                exact
                                render={() => <Home data={projects} />}
                            />
                            <Route
                                path="/projects/:project"
                                exact
                                render={(props) => (
                                    <Projects
                                        data={findProject(
                                            props.match.params.project
                                        )}
                                    />
                                )}
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
