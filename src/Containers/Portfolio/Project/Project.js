import React, { useEffect } from "react";
import Banner from "../../../Components/Banner/Banner";
import Footer from "../../../Components/Footer/Footer";

const Projects = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    console.log(props.data);
    return (
        <div id="Main">
            <Banner title="Projects" />
            <div id="profile-container">
                <div className="two-column-grid">
                    <div className="two-column-grid__column">
                        <h2 className="two-column-grid__column__title">
                            {props.data.title}
                        </h2>
                        <hr
                            className="border-line"
                            style={{ marginBottom: 0 }}
                        />
                        <p className="two-column-grid__column__subtitle">
                            {props.data.expanded.date}
                        </p>
                        <p
                            className="two-column-grid__column__body"
                            style={{
                                fontWeight: "400",
                                color: "#494747",
                            }}
                        >
                            {props.data.expanded.text}
                        </p>
                        <div id="two-column-grid__column__link__container">
                            <a
                                className="two-column-grid__column__link"
                                href={props.data.expanded.repo}
                            >
                                <button className="btn">View Github</button>
                            </a>

                            <a
                                className="two-column-grid__column__link"
                                href={props.data.expanded.site}
                            >
                                <button className="btn">View Site</button>
                            </a>
                        </div>
                    </div>
                    <div className="two-column-grid__column">
                        <div className="two-column-grid__column__img__container">
                            <img
                                className="two-column-grid__column__img"
                                alt="profile"
                                src={props.data.expanded.logo}
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
                        src={props.data.expanded.images[0]}
                    />

                    <div className="product-page-container__body__container">
                        <h1 className="product-page-container__title">
                            Background
                        </h1>
                        <p className="product-page-container__text">
                            {props.data.expanded.background}
                        </p>
                    </div>
                </div>

                <div className="product-page-container">
                    <img
                        className="product-page-img-wide"
                        alt="Project"
                        src={props.data.expanded.images[1]}
                    />

                    <div className="product-page-container__body__container">
                        <h1 className="product-page-container__title">
                            Background
                        </h1>
                        <p className="product-page-container__text">
                            {props.data.expanded.background}
                        </p>
                    </div>
                </div>

                <div className="product-page-container">
                    <div className="product-page-container__body__container">
                        <h1 className="product-page-container__title">
                            Background
                        </h1>
                        <p className="product-page-container__text">
                            {props.data.expanded.background}
                        </p>
                    </div>
                    <img
                        className="product-page-img-wide"
                        alt="Project"
                        src={props.data.expanded.images[2]}
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
                    {props.data.expanded.frontend !== "" && (
                        <div className="product-page-container__body__container__grid">
                            <h1 className="product-page-container__title">
                                Frontend
                            </h1>
                            <p className="product-page-container__text">
                                {props.data.expanded.frontend}
                            </p>
                        </div>
                    )}
                    {props.data.expanded.backend !== "" && (
                        <div className="product-page-container__body__container__grid">
                            <h1 className="product-page-container__title">
                                Backend
                            </h1>
                            <p className="product-page-container__text">
                                {props.data.expanded.backend}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Projects;
