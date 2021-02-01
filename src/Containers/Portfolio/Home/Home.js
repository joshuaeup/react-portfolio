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
            <Profile />
            <hr className="border-line" />
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