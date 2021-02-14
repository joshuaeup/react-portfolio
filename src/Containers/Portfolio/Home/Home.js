import React, { useEffect } from "react";
// Components
import Navigation from "../../../Components/Navigation/Navigation";
import Profile from "../../../Components/Profile/Profile";
import Projects from "../../../Components/Projects/Projects";
import Contact from "../../../Components/Contact/Contact";
import Footer from "../../../Components/Footer/Footer";
import Banner from "../../../Components/Banner/Banner";
import { Element } from "react-scroll";

const Home = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <>
            <aside className={props.toggleClass}>
                <Navigation toggleHandler={props.toggleHandler} />
            </aside>
            <div id="Main">
                <Banner title="Portfolio" />
                <Element name="profile-scroll">
                    <Profile />
                </Element>
                <Element name="projects-scroll">
                    <Projects data={props.data} />
                </Element>
                <Element name="contact-scroll">
                    <Contact />
                </Element>
                <Footer />
            </div>
        </>
    );
};

export default Home;
