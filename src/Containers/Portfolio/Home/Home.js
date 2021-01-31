import React from "react";
// Components
import Profile from "../../../Components/Profile/Profile";
import Projects from "../../../Components/Projects/Projects";
import Skills from "../../../Components/Skills/Skills";

const Home = (props) => {
    return (
        <>
            <Profile />
            <hr className="border-line" />
            <Projects />
            <hr className="border-line" />
            <Skills />
        </>
    );
};

export default Home;
