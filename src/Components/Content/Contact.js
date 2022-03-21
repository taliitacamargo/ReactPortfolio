import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ContactMe from './Contact'

function Contact() {
    const [state, handleSubmit] = useForm("xvolazrb");

    if (state.succeeded) {

        return (
            <div className="container msg">
                <h2>Your message has been sent!</h2>
                <div className="return-btn">
                    <a className="return" type="return" href = "/About">
                        {/* <Link to="/"/> */}
                        Return</a>
                </div>
            </div>
        )
    }
    return (
        <div className="container">

            <h1>Let's Connect</h1>

            <div className="form">

                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" />

                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="johndoe@example.com"
                    />

                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />

                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message Here"
                    />

                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />

                    <button type="submit" disabled={state.submitting}>
                        Submit
                    </button>

                    <small>or email me directly at:</small>
                    <small >taliitacamargo@icloud.com</small>
                </form>
            </div>
        </div>
    );
}

function Contact2() {
    return(
    <Contact/>

    );
}

export default Contact2;