import React from "react";

const Title = (props) => {
    return (
        <div className="title-container">
            <h2 className="title-container__title accent">
                <hr className="title-container__title__line" />
                <span>{props.text}</span>
                <hr className="title-container__title__line" />
            </h2>
        </div>
    );
};

export default Title;
