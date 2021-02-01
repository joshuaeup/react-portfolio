import React from "react";
// Components
import Profile from "../../../Components/Profile/Profile";
import Projects from "../../../Components/Projects/Projects";
import Skills from "../../../Components/Skills/Skills";
import Contact from "../../../Components/Contact/Contact";
import Footer from "../../../Components/Footer/Footer";

const Home = (props) => {
    return (
        <div id="Main">
            <div id="top-banner">
                <h1 id="top-banner__title">
                    <hr className="title-container__title__line" />
                    <span>Portfolio</span>
                    <hr className="title-container__title__line" />
                </h1>
            </div>
            <Profile />
            <Projects />
            <hr className="border-line" />
            <Skills />
            <hr className="border-line" />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
