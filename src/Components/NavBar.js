import React from 'react';

function NavBar({currentPage, handlePageChange}) {
    return(
        <header className = "header">
            <nav>
        <ul className = "nav nav-tabs">
            <li className="nav-item">
                <a
                href = "#about"
                onClick = {() => handlePageChange('About')}
                className = {currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                    About
                </a>
            </li>

            <li className="nav-item">
                <a
                href = "#projects"
                onClick = {() => handlePageChange('Projects')}
                className = {currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>
                    Projects
                </a>
            </li>

            <li className="nav-item">
                <a
                href = "#contact"
                onClick = {() => handlePageChange('Contact')}
                className = {currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                    Contact
                </a>
            </li>
        </ul>
        </nav>
        </header>
    );
}

export default NavBar;