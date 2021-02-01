import React from "react";

const Profile = (props) => {
    return (
        <>
            <div id="profile-container">
                <div className="two-column-grid">
                    <div className="two-column-grid__column">
                        <h2 className="two-column-grid__column__title">
                            About Me
                        </h2>
                        <h3 className="two-column-grid__column__subtitle">
                            I'm a _____ Developer
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
                            <li className="two-column-grid__column__list__item">
                                <i className="fab fa-instagram"></i>
                            </li>
                            <li className="two-column-grid__column__list__item">
                                <i className="fab fa-twitter"></i>
                            </li>
                            <li className="two-column-grid__column__list__item">
                                <i className="fab fa-linkedin-in"></i>
                            </li>
                            <li className="two-column-grid__column__list__item">
                                <i className="fab fa-github"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="two-column-grid__column">
                        <div className="two-column-grid__column__img__container">
                            <img
                                className="two-column-grid__column__img"
                                alt="profile"
                                src="https://joshuaeup.github.io/my-port/static/media/bioPhoto3.567e9558.JPG"
                            />
                        </div>
                    </div>
                </div>
                <div className="six-column-grid">
                    <div className="six-column-grid__social-link__container">
                        <a
                            className="six-column-grid__social-link__container__link"
                            href="/"
                        >
                            <img
                                className="six-column-grid__social-link__container__link__img"
                                alt="social"
                                src="https://joshuaeup.github.io/my-port/static/media/profileThree.afa504b0.JPG"
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
                                src="https://joshuaeup.github.io/my-port/static/media/profileThree.afa504b0.JPG"
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
                                src="https://joshuaeup.github.io/my-port/static/media/profileThree.afa504b0.JPG"
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
                                src="https://joshuaeup.github.io/my-port/static/media/profileThree.afa504b0.JPG"
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
                                src="https://joshuaeup.github.io/my-port/static/media/profileThree.afa504b0.JPG"
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
                                src="https://joshuaeup.github.io/my-port/static/media/profileThree.afa504b0.JPG"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
