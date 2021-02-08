import React, { useState } from "react";
import Title from "../Title/Title";
// import ProjectsData from "../../Containers/Portfolio/ProjectsData";
import { Link } from "react-router-dom";

const Projects = (props) => {
    const [projects] = useState(props.data);
    return (
        <>
            <div id="projects-container">
                <hr className="border-line" />
                <Title text="Projects" />
                <div className="portfolio-column-grid">
                    {projects.map((project, id) => {
                        return (
                            <Link key={id} to={`/projects/${project.title}`}>
                                <div className="portfolio-column-grid__column">
                                    <div className="portfolio-column-grid__column__img__container">
                                        <img
                                            className="portfolio-column-grid__column__img"
                                            alt={project.title}
                                            src={project.expanded.images[0]}
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
                </div>
            </div>
        </>
    );
};
export default Projects;
