import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("xvolazrb");

    if (state.succeeded) {

        return (
            <div className="container msg">
                <h2>Your message has been sent!</h2>
                <div className="return-btn">
                    <button className="return" type="return">
                        {/* <Link to="/"/> */}
                        Return</button>
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
                </form>
            </div>
        </div>
    );
}

export default Contact;