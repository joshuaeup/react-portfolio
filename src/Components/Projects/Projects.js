import React, { useState } from "react";
import Title from "../Title/Title";
import { Link } from "react-router-dom";
import TextInput from "react-autocomplete-input";
import "react-autocomplete-input/dist/bundle.css";
const technologies = ["HTML", "CSS", "JavaScript", "React", "SCSS", "EJS"];
const Projects = (props) => {
    // Set state of data
    const [projects, setProjects] = useState(props.data);
    const [input, setInput] = useState("");

    // Function to filter projects by technologies
    const filterHandler = (e) => {
        // Accept input from user then convert to lower case
        const input = e.toLowerCase().trim();
        setInput(input);

        // Run filter to only store values that include entered frontend and backend technologies
        const filteredData = props.data.filter((project) => {
            return (
                project.expanded.frontend
                    .toLowerCase()
                    .includes(String(input)) ||
                project.expanded.backend.toLowerCase().includes(String(input))
            );
        });

        // set state of data to value
        setProjects(filteredData);
    };

    return (
        <>
            <div id="projects-container">
                <hr className="border-line" />
                <Title text="Projects" />
                <div id="filter-input-container">
                    <label
                        className="input-container__label"
                        htmlFor="filter-input"
                    >
                        Filter By Technologies
                    </label>
                    <TextInput
                        options={technologies}
                        id="filter-input"
                        placeholder="Ex: JavaScript"
                        trigger={""}
                        onChange={filterHandler}
                        style={{
                            height: "60%",
                            width: "100%",
                            marginTop: "1rem",
                        }}
                    />
                </div>

                <div className="portfolio-column-grid">
                    {projects.length > 0 ? (
                        <>
                            {projects.map((project, id) => {
                                console.log("ID:", id);
                                return (
                                    <Link
                                        key={id}
                                        to={`/projects/${project.id}`}
                                    >
                                        <div className="portfolio-column-grid__column">
                                            <div className="portfolio-column-grid__column__img__container">
                                                <img
                                                    className="portfolio-column-grid__column__img"
                                                    alt={project.title}
                                                    src={
                                                        project.expanded
                                                            .images[0]
                                                    }
                                                />
                                            </div>
                                            <div className="portfolio-column-grid__column__info">
                                                <h2 className="portfolio-column-grid__column__info__title">
                                                    {project.title}
                                                </h2>
                                                <p className="portfolio-column-grid__column__info__text">
                                                    {project.subTitle}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </>
                    ) : (
                        <div className="no-data-title">
                            <p>No projects currently using {input}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
export default Projects;
