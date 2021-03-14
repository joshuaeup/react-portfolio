import React from "react";
import { Link } from "react-scroll";
import Pdf from "../../assets/Resume.pdf";
import profileImg from "../../assets/images/profile.jpg";

const Navigation = (props) => {
    return (
        <>
            <div id="Aside-banner">
                <img id="Aside-banner__img" alt="profile" src={profileImg} />
                <h2 id="Aside-banner__title">Joshua Proctor</h2>
            </div>
            <div id="Navigation">
                <ul>
                    <Link
                        to="profile-scroll"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        onClick={props.toggleHandler}
                    >
                        <li className="Navigation-item">
                            <i className="fas fa-user-circle"></i>{" "}
                            <span>Profile</span>
                        </li>
                    </Link>
                    <Link
                        to="projects-scroll"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        onClick={props.toggleHandler}
                    >
                        <li className="Navigation-item">
                            <i className="fas fa-laptop"></i>{" "}
                            <span>Projects</span>
                        </li>
                    </Link>
                    <Link
                        to="contact-scroll"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        onClick={props.toggleHandler}
                    >
                        <li className="Navigation-item">
                            <i className="fas fa-envelope-open-text"></i>{" "}
                            <span>Contact</span>
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
        </>
    );
};

export default Navigation;
