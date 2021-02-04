import React, { useState } from "react";
import Title from "../../Components/Title/Title";
import SkillsData from "./SkillData";

const Skills = (props) => {
    const [skills] = useState(SkillsData);
    return (
        <>
            <div id="skills-container__outer">
                <hr className="border-line" />
                <Title text="Skills" />
                {skills.map((skill, index) => {
                    return (
                        <div key={index} className="skills-container">
                            <div className="skills-container__title__container">
                                <h2 className="skills-container__title__container__title">
                                    {skill.type}
                                </h2>
                                <i className="fas fa-laptop-code"></i>
                            </div>
                            <hr className="border-line" />
                            <div className="skills-container__grid">
                                {skill.skills.map((skillItem, index) => {
                                    return (
                                        <div
                                            key={skillItem + index}
                                            className="skills-container__grid__item"
                                        >
                                            <div className="skills-container__grid__item__container__img__container">
                                                <img
                                                    className="skills-container__grid__item__container__img"
                                                    alt="skill"
                                                    src={skillItem.image}
                                                />
                                            </div>
                                            <div className="skills-container__grid__item__container__text__container">
                                                <p className="skills-container__grid__item__container__text">
                                                    {skillItem.name}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Skills;
