import React, { useEffect } from "react";
import Banner from "../../../Components/Banner/Banner";
import Footer from "../../../Components/Footer/Footer";

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <div id="Main">
            <Banner title="Projects" />
            <div id="profile-container">
                <div className="two-column-grid">
                    <div className="two-column-grid__column">
                        <h2 className="two-column-grid__column__title">
                            Portfolio Mock-One
                        </h2>
                        <hr
                            className="border-line"
                            style={{ marginBottom: 0 }}
                        />
                        <p className="two-column-grid__column__subtitle">
                            November 2017
                        </p>
                        <p
                            className="two-column-grid__column__body"
                            style={{
                                fontWeight: "400",
                                color: "#494747",
                            }}
                        >
                            I designed the first version of my portfolio after
                            completing the UNC Charlotte Coding Bootcamp. The
                            purpose of this portfolio was to display my current
                            coding abilities, while also housing all of the new
                            projects I would develop in the future.
                        </p>
                        <div id="two-column-grid__column__link__container">
                            <a
                                className="two-column-grid__column__link"
                                href="/"
                            >
                                <button className="btn">View Github</button>
                            </a>

                            <a
                                className="two-column-grid__column__link"
                                href="/"
                            >
                                <button className="btn">View Live Site</button>
                            </a>
                        </div>
                    </div>
                    <div className="two-column-grid__column">
                        <div className="two-column-grid__column__img__container">
                            <img
                                className="two-column-grid__column__img"
                                alt="profile"
                                src="https://cdn.auth0.com/blog/react-js/react.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div id="product-page-container-grid">
                <div className="product-page-container">
                    <h2
                        className="two-column-grid__column__title"
                        style={{
                            marginTop: "2rem",
                            marginBottom: "2rem",
                            textAlign: "center",
                        }}
                    >
                        Overview
                    </h2>
                    <img
                        className="product-page-img-wide"
                        alt="Project"
                        src="https://joshuaeup.github.io/my-port/static/media/mockOneBanner.d314473a.PNG"
                    />

                    <div className="product-page-container__body__container">
                        <h1 className="product-page-container__title">
                            Background
                        </h1>
                        <p className="product-page-container__text">
                            The Portfolio Mock-One was my first larger scaled
                            project using Javascript Libraries including
                            React.js, and Express.js. This project enabled me to
                            practice linking the Front-End UI design with the
                            Back-End development structure.
                        </p>
                    </div>
                </div>

                <div className="product-page-container">
                    <img
                        className="product-page-img-wide"
                        alt="Project"
                        src="https://joshuaeup.github.io/my-port/static/media/mockOneBanner.d314473a.PNG"
                    />

                    <div className="product-page-container__body__container">
                        <h1 className="product-page-container__title">
                            Background
                        </h1>
                        <p className="product-page-container__text">
                            The Portfolio Mock-One was my first larger scaled
                            project using Javascript Libraries including
                            React.js, and Express.js. This project enabled me to
                            practice linking the Front-End UI design with the
                            Back-End development structure.
                        </p>
                    </div>
                </div>

                <div className="product-page-container">
                    <div className="product-page-container__body__container">
                        <h1 className="product-page-container__title">
                            Background
                        </h1>
                        <p className="product-page-container__text">
                            The Portfolio Mock-One was my first larger scaled
                            project using Javascript Libraries including
                            React.js, and Express.js. This project enabled me to
                            practice linking the Front-End UI design with the
                            Back-End development structure.
                        </p>
                    </div>
                    <img
                        className="product-page-img-wide"
                        alt="Project"
                        src="https://joshuaeup.github.io/my-port/static/media/mockOneBanner.d314473a.PNG"
                    />
                </div>
                <h2
                    className="two-column-grid__column__title"
                    style={{
                        marginTop: "2rem",
                        marginBottom: "2rem",
                        textAlign: "center",
                    }}
                >
                    Technologies
                </h2>
                <div
                    className="product-page-container-grid"
                    style={{ paddingTop: 0 }}
                >
                    <div className="product-page-container__body__container__grid">
                        <h1 className="product-page-container__title">
                            Frontend
                        </h1>
                        <p className="product-page-container__text">
                            HTML | CSS | JavaScript | React | Bootstrap
                        </p>
                    </div>
                    <div className="product-page-container__body__container__grid">
                        <h1 className="product-page-container__title">
                            Backend
                        </h1>
                        <p className="product-page-container__text">
                            JavaScript | Node.js | Express.js | SQL
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Projects;
