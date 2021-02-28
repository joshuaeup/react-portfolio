import React from "react";
// import PlaceHolderImg from "../../assets/images/placeholder.png";

const Profile = (props) => {
    return (
        <>
            <div id="profile-container">
                <div className="two-column-grid">
                    <div className="two-column-grid__column">
                        <h2 className="two-column-grid__column__title accent">
                            About Me
                        </h2>
                        <h3 className="two-column-grid__column__subtitle">
                            I'm a Software Engineer
                        </h3>
                        <p className="two-column-grid__column__body">
                            With a passion for using my technical skills to
                            introduce innovative methods to meet objectives. My
                            role is to build industry-standard websites and web
                            applications. I'm driven to always remain curious,
                            and expand my knowledge every chance I have.
                            AlwaysLearning();
                        </p>
                        <ul className="two-column-grid__column__list">
                            <a href="https://www.instagram.com/jcode10/">
                                <li className="two-column-grid__column__list__item">
                                    <i className="fab fa-instagram"></i>
                                </li>
                            </a>
                            <a href="https://twitter.com/joshuaeup">
                                <li className="two-column-grid__column__list__item">
                                    <i className="fab fa-twitter"></i>
                                </li>
                            </a>
                            <a href="https://www.linkedin.com/in/joshua-proctor/">
                                <li className="two-column-grid__column__list__item">
                                    <i className="fab fa-linkedin-in"></i>
                                </li>
                            </a>
                            <a href="https://github.com/joshuaeup">
                                <li className="two-column-grid__column__list__item">
                                    <i className="fab fa-github"></i>
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div
                        className="two-column-grid__column"
                        style={{ marginBottom: "2rem" }}
                    >
                        <div className="two-column-grid__column__img__container">
                            <img
                                className="two-column-grid__column__img"
                                alt="profile"
                                src="https://lh3.googleusercontent.com/pw/ACtC-3f1S9tya4EOzJIftJZrl4ovaoGWdpCt7MdsMsF9sBQAMAqvcjS0oV0901bSPX-cYT1XXSGP61Z5kbStGVHWgcDC0-fPDOIxFBXIiOjz5ed_E3TcrGTaaaoMMiQNtaHuRP3ZAhuaQteJWfWMjVBxxvdq=w1050-h1406-no?authuser=0"
                            />
                        </div>
                    </div>
                </div>
                {/* <div className="six-column-grid">
                    <div className="six-column-grid__social-link__container">
                        <a
                            className="six-column-grid__social-link__container__link"
                            href="/"
                        >
                            <img
                                className="six-column-grid__social-link__container__link__img"
                                alt="social"
                                src={PlaceHolderImg}
                            />
                        </a>
                    </div>
                    <div className="six-column-grid__social-link__container">
                        <a
                            className="six-column-grid__social-link__container__link"
                            href="/"
                        >
                            <img
                                className="six-column-grid__social-link__container__link__img"
                                alt="social"
                                src={PlaceHolderImg}
                            />
                        </a>
                    </div>
                    <div className="six-column-grid__social-link__container">
                        <a
                            className="six-column-grid__social-link__container__link"
                            href="/"
                        >
                            <img
                                className="six-column-grid__social-link__container__link__img"
                                alt="social"
                                src={PlaceHolderImg}
                            />
                        </a>
                    </div>
                    <div className="six-column-grid__social-link__container">
                        <a
                            className="six-column-grid__social-link__container__link"
                            href="/"
                        >
                            <img
                                className="six-column-grid__social-link__container__link__img"
                                alt="social"
                                src={PlaceHolderImg}
                            />
                        </a>
                    </div>
                    <div className="six-column-grid__social-link__container">
                        <a
                            className="six-column-grid__social-link__container__link"
                            href="/"
                        >
                            <img
                                className="six-column-grid__social-link__container__link__img"
                                alt="social"
                                src={PlaceHolderImg}
                            />
                        </a>
                    </div>
                    <div className="six-column-grid__social-link__container">
                        <a
                            className="six-column-grid__social-link__container__link"
                            href="/"
                        >
                            <img
                                className="six-column-grid__social-link__container__link__img"
                                alt="social"
                                src={PlaceHolderImg}
                            />
                        </a>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default Profile;
