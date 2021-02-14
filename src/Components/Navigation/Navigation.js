import React from "react";
import { Link } from "react-scroll";

const Navigation = (props) => {
    return (
        <>
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
                </ul>
            </div>
        </>
    );
};

export default Navigation;
