import React from "react";
// Components
import Profile from "../../../Components/Profile/Profile";
import Projects from "../../../Components/Projects/Projects";
import Skills from "../../../Components/Skills/Skills";
import Contact from "../../../Components/Contact/Contact";
import Navigation from "../../../Components/Navigation/Navigation";

const Home = (props) => {
    return (
        <div id="body-two-column-grid">
            <aside>
                <Navigation />
            </aside>
            <div id="Main">
                <Profile />
                <hr className="border-line" />
                <Projects />
                <hr className="border-line" />
                <Skills />
                <hr className="border-line" />
                <Contact />
            </div>
        </div>
    );
};

export default Home;
