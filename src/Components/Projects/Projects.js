import React, { useState } from "react";
import Title from "../Title/Title";
import ProjectsData from "./ProjectsData";

const Projects = (props) => {
    const [projects] = useState(ProjectsData);
    return (
        <>
            <div id="projects-container">
                <hr className="border-line" />
                <Title text="Projects" />
                <div className="portfolio-column-grid">
                    {projects.map((project, id) => {
                        return (
                            <div
                                className="portfolio-column-grid__column"
                                key={id}
                            >
                                <div className="portfolio-column-grid__column__img__container">
                                    <img
                                        className="portfolio-column-grid__column__img"
                                        alt={project.title}
                                        src={project.image}
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
                        );
                    })}
                </div>
            </div>
        </>
    );
};
export default Projects;
