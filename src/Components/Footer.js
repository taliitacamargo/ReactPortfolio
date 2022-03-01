import React from 'react';

import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { FaEnvelopeOpen } from "react-icons/fa";


export default function Footer () {
    return (
        
        <footer className = "footer">
                 <div>

<nav className="nav" id="contact-info">
    <ul className="links">
        <li>
            <a className="grow" href="mailto:taliitacamargo@icloud.com"><FaEnvelopeOpen className="grow" /></a>
        </li>
        
        <li>
            <a className="grow" href="https://www.linkedin.com/in/talita-camargo-03a40a52/"><FaLinkedin className="grow" /></a>
        </li>
        <li>
            <a className="grow" href="https://github.com/taliitacamargo"><FaGithubSquare className="grow" /></a>
        </li>

    </ul>
</nav>
</div>
        </footer>
    );
}

