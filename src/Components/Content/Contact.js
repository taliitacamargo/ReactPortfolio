import React from 'react';
import resume from '../assets/resume.pdf';
import { useForm, ValidationError } from '@formspree/react';

import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import {Link  } from 'react-router-dom';


const Contact = () =>  {
    const [state, handleSubmit] = useForm("xvolazrb");
 
    if (state.succeeded) {
        
        return (
        <div className = "container msg">
            <h2>Your message has been sent!</h2>
            <div className= "return-btn">
            <button className = "return" type= "return">
            {/* <Link to="/"/> */}
            Return</button>
            </div>
        </div>
        )
    }
    return (
        <div className="container">
            
                <h1>Let's Connect</h1>

            <div className= "form">
                
            <form onSubmit={handleSubmit}>
                <label htmlFor="email"/>
                 
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder ="johndoe@example.com"
                />
              
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
              
                <textarea
                    id="message"
                    name="message"
                    placeholder ="Your Message Here"
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
        <div className= "hr">
        <hr/>
        </div>

            <div>

                <nav className="nav" id="contact-info">
                    <ul className="links">
                        <li>
                            <a className="grow" href="mailto:taliitacamargo@icloud.com"><FaEnvelopeOpen className="grow" /></a>
                            <small>Email</small>

                        </li>
                        <li>
                            <a className="grow"  href={resume}><FaUserTie className="grow" /></a>
                            <small>Resume</small>

                        </li>
                        <li>
                            <a className="grow" href="https://www.linkedin.com/in/talita-camargo-03a40a52/"><FaLinkedin className="grow" /></a>
                            <small>LinkedIn</small>

                        </li>
                        <li>
                            <a className="grow" href="https://github.com/taliitacamargo"><FaGithubSquare className="grow" /></a>

                            <small>GitHub</small>

                        </li>

                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Contact;