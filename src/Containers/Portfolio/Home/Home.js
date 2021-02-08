import React, { useEffect } from "react";
// Components
import Profile from "../../../Components/Profile/Profile";
import Projects from "../../../Components/Projects/Projects";
import Skills from "../../../Components/Skills/Skills";
import Contact from "../../../Components/Contact/Contact";
import Footer from "../../../Components/Footer/Footer";
import Banner from "../../../Components/Banner/Banner";

const Home = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <div id="Main">
            <Banner title="Portfolio" />
            <Profile />
            <Projects data={props.data} />
            <Skills />
            <hr className="border-line" />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
