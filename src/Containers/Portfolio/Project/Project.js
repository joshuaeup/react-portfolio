import React, { useEffect } from "react";
import Banner from "../../../Components/Banner/Banner";
import Footer from "../../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import Pdf from "../../../assets/Resume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = (props) => {
    // const [loading, setLoading] = useState(true);
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    return (
        <>
            {/* {loading === false ? (
                <> */}
            <>
                <aside className={props.toggleClass}>
                    <div id="Aside-banner">
                        <img
                            id="Aside-banner__img"
                            alt="profile"
                            src="https://scontent-atl3-2.cdninstagram.com/v/t51.2885-19/s320x320/100968162_582160999103654_8240949936351346688_n.jpg?_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_ohc=Abxj4euwxwIAX_f6uIS&tp=1&oh=2fd3245c2db4c6e6f3745dcf97ad9782&oe=603EF403"
                        />
                        <h2 id="Aside-banner__title">Joshua Proctor</h2>
                    </div>
                    <div id="Navigation">
                        <ul>
                            <Link to="/">
                                <li className="Navigation-item">
                                    <i className="fas fa-home"></i>{" "}
                                    <span onClick={props.toggleHandler}>
                                        Back To Home
                                    </span>
                                </li>
                            </Link>
                            <a
                                href={Pdf}
                                target="_blank"
                                onClick={props.toggleHandler}
                                rel="noreferrer"
                            >
                                <li className="Navigation-item">
                                    <i className="fa fa-file-pdf"></i>{" "}
                                    <span>Resume</span>
                                </li>
                            </a>
                        </ul>
                    </div>
                </aside>
                <div id="Main">
                    <Banner title="Projects" />
                    <div id="profile-container">
                        <div className="two-column-grid">
                            <div
                                className="two-column-grid__column"
                                data-aos="fade-right"
                            >
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
                                    {props.data.expanded.repo !== undefined && (
                                        <a
                                            className="two-column-grid__column__link"
                                            href={props.data.expanded.repo}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <button className="btn">
                                                View Github
                                            </button>
                                        </a>
                                    )}

                                    {props.data.expanded.site !== undefined && (
                                        <a
                                            className="two-column-grid__column__link"
                                            href={props.data.expanded.site}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <button className="btn">
                                                View Site
                                            </button>
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div
                                className="two-column-grid__column"
                                data-aos="fade-left"
                            >
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

                            {props.data.expanded.background !== undefined && (
                                <div
                                    className="product-page-container__body__container"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom"
                                    data-aos-duration="2500"
                                >
                                    <h1 className="product-page-container__title">
                                        Background
                                    </h1>
                                    <p className="product-page-container__text">
                                        {props.data.expanded.background}
                                    </p>
                                </div>
                            )}
                        </div>

                        {props.data.expanded.images[1] !== undefined && (
                            <div className="product-page-container">
                                <img
                                    className="product-page-img-wide"
                                    alt="Project"
                                    src={props.data.expanded.images[1]}
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom"
                                    data-aos-duration="2500"
                                />

                                <div
                                    className="product-page-container__body__container"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom"
                                    data-aos-duration="2500"
                                >
                                    <h1 className="product-page-container__title">
                                        {props.data.expanded.column1Title}
                                    </h1>
                                    <p className="product-page-container__text">
                                        {props.data.expanded.column1Text}
                                    </p>
                                </div>
                            </div>
                        )}

                        {props.data.expanded.images[2] !== undefined && (
                            <div className="product-page-container">
                                <div
                                    className="product-page-container__body__container"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom"
                                    data-aos-duration="2500"
                                >
                                    <h1 className="product-page-container__title">
                                        {props.data.expanded.column2Title}
                                    </h1>
                                    <p className="product-page-container__text">
                                        {props.data.expanded.column2Text}
                                    </p>
                                </div>
                                <img
                                    className="product-page-img-wide"
                                    alt="Project"
                                    src={props.data.expanded.images[2]}
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom"
                                    data-aos-duration="2500"
                                />
                            </div>
                        )}

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
                            <div className="project-navigation-container">
                                {props.data.id > 0 && (
                                    <Link
                                        className=""
                                        to={`${props.data.id - 1}`}
                                    >
                                        <button
                                            id="prev"
                                            className="project-navigation"
                                        >
                                            <i className="fas fa-arrow-left"></i>{" "}
                                            <span>Previous</span>
                                        </button>
                                    </Link>
                                )}
                                {props.data.id < props.length - 1 && (
                                    <Link
                                        className=""
                                        to={`${props.data.id + 1}`}
                                    >
                                        <button
                                            id="next"
                                            className="project-navigation"
                                        >
                                            <span>Next</span>{" "}
                                            <i className="fas fa-arrow-right"></i>
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            </>

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

export default Projects;
