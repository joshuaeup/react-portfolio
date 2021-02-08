import React from "react";

const Banner = (props) => {
    return (
        <div id="top-banner">
            <h1 id="top-banner__title">
                <hr className="title-container__title__line" />
                <span>{props.title}</span>
                <hr className="title-container__title__line" />
            </h1>
        </div>
    );
};

export default Banner;
