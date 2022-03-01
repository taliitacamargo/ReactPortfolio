import React from 'react';
import resume from '../assets/resume.pdf';

export default function About() {
    return (

        <div className="container">


            <div>
                <h1> Skills</h1>
                <ul className = "skills">
                    <h3>Front-End Proficiencies</h3>
                    <li>CSS</li>
                    <li>BootStrap</li>
                    <li>HTML</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>JQuery</li>
                </ul>
                <ul className = "skills">
                    <h3>Back-End Proficiencies</h3>
                    <li>APIs</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>MySql</li>
                    <li>Node</li>
                    <li></li>
                </ul>
            </div>
            <hr/>   
                    <div>
                <h1>Resume</h1>
                <div className="resume-container">
                    <a className="resume" href={resume}>View Resume</a>
                </div>
            </div>
        </div>
    );
}