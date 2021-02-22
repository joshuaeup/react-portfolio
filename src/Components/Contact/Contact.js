import React, { useState } from "react";

const Contact = () => {
    const [inputType, setInputType] = useState("feedback");

    // const sendMessage = (event) => {
    //     event.preventDefault();
    //     if (!this.validateMail()) {
    //         return;
    //         }
    //     const templateParams = {
    //       from_name: this.state.name + " (" + this.state.email + ")",
    //       to_name: "joshuaeup@gmail.com",
    //       feedback: this.state.feedback
    //     };
    //     emailjs
    //         .send("gmail", "portfoliositecontact", templateParams, {id given from your EmailJS template})
    //         .then(
    //             function(response) {
    //             toast.success("Your message has successfully sent!", {
    //                 position: toast.POSITION.BOTTOM_CENTER
    //             });
    //             console.log("SUCCESS!", response.status, response.text);
    //             },
    //             function(err) {
    //             toast.error("Your message was not able to be sent");
    //             }
    //         );
    //     }

    return (
        <main id="padded-main" style={{ padding: "2rem 0" }}>
            <h2 className="two-column-grid__column__title">Contact Me</h2>
            <div className="two-grid-container">
                <div className="contact-column">
                    <div className="contact-column__link__container">
                        <div className="input-radio contact-column__link">
                            <label className="text__wrapper">
                                Feedback
                                <input
                                    required
                                    className="input"
                                    type="radio"
                                    name="form-input"
                                    value="feedback"
                                    checked={inputType === "feedback" && true}
                                    onChange={(e) =>
                                        setInputType(e.target.value)
                                    }
                                />
                                <div className="radio-overlay"></div>
                            </label>
                        </div>
                    </div>
                    <div className="contact-column__link__container">
                        <div className="input-radio contact-column__link">
                            <label className="text__wrapper">
                                General Inquiry
                                <input
                                    required
                                    className="input"
                                    type="radio"
                                    name="form-input"
                                    value="general"
                                    checked={inputType === "general" && true}
                                    onChange={(e) =>
                                        setInputType(e.target.value)
                                    }
                                />
                                <div className="radio-overlay"></div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="contact-column">
                    {inputType === "feedback" && (
                        <>
                            <form
                                name="feedback"
                                action="mailto:joshuaeup@gmail.com"
                                method="POST"
                                encType="type/html"
                            >
                                <div className="input-container">
                                    <label
                                        className="input-container__label"
                                        htmlFor="fname"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        required
                                        className="input-container__field"
                                        placeholder="First Name"
                                        id="fname"
                                        type="text"
                                    />
                                </div>
                                <div className="input-container">
                                    <label
                                        className="input-container__label"
                                        htmlFor="lname"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        required
                                        className="input-container__field"
                                        placeholder="Last Name"
                                        id="lname"
                                        type="text"
                                    />
                                </div>
                                <div className="input-container">
                                    <label
                                        className="input-container__label"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        required
                                        className="input-container__field"
                                        placeholder="Email Address"
                                        id="email"
                                        type="email"
                                    />
                                </div>
                                <div className="input-container">
                                    <label
                                        className="input-container__label"
                                        htmlFor="number"
                                    >
                                        Phone #
                                    </label>
                                    <input
                                        required
                                        className="input-container__field"
                                        placeholder="(555) 555 5555"
                                        id="number"
                                        type="number"
                                    />
                                </div>
                                <div className="input-container">
                                    <label
                                        className="input-container__label"
                                        htmlFor="comment"
                                    >
                                        What's on your mind?
                                    </label>
                                    <textarea
                                        className="input-container__field"
                                        placeholder="Comments"
                                        id="comment"
                                        type="text"
                                    ></textarea>
                                </div>
                                <div className="input-container">
                                    <input
                                        className="input-container__field"
                                        id="submit"
                                        type="submit"
                                        value="Submit"
                                    />
                                </div>
                            </form>
                        </>
                    )}
                    {inputType === "general" && (
                        <>
                            <form
                                name="general"
                                action="mailto:joshuaeup@gmail.com"
                                method="POST"
                                encType="type/html"
                            >
                                <div className="input-container">
                                    <label
                                        className="input-container__label"
                                        htmlFor="fname"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        required
                                        className="input-container__field"
                                        placeholder="First Name"
                                        id="fname"
                                        type="text"
                                    />
                                </div>
                                <div className="input-container">
                                    <label
                                        className="input-container__label"
                                        htmlFor="lname"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        required
                                        className="input-container__field"
                                        placeholder="Last Name"
                                        id="lname"
                                        type="text"
                                    />
                                </div>
                                <div className="input-container">
                                    <label
                                        className="input-container__label"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        required
                                        className="input-container__field"
                                        placeholder="Email Address"
                                        id="email"
                                        type="email"
                                    />
                                </div>
                                <div className="input-container">
                                    <label
                                        className="input-container__label"
                                        htmlFor="comment"
                                    >
                                        What's on your mind?
                                    </label>
                                    <textarea
                                        required
                                        className="input-container__field"
                                        placeholder="Comments"
                                        id="comment"
                                        type="text"
                                    ></textarea>
                                </div>
                                <div className="input-container">
                                    <input
                                        className="input-container__field"
                                        id="submit"
                                        type="submit"
                                        value="Submit"
                                    />
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Contact;
