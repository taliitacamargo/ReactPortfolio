import React from 'react';
import { useState } from 'react';
import '../App.css';
import About from './Content/About';
import NavBar from './NavBar';
import Contact from './Content/Contact';
import Projects from './Content/Projects';
import Resume from './Content/Resume'
import backgroundVideo from './assets/particles.mp4'
import Footer from './Footer';


export default function TheContainer() {
    const [currentPage, setCurrentPage] = useState("About");

    const renderPage = () => {
        if (currentPage === "About") {
            return <About />;
        } if (currentPage === "Contact") {
            return (<div><Contact /></div>)
        } if (currentPage === "Projects") {
            return <Projects />
        } if (currentPage === "Resume") {
            return <Resume />
        }
        return <About />;
    };
    const handlePageChange = (page) => setCurrentPage(page);
    return (
        
        <div>
            <video className='videoTag' autoPlay loop muted style = {{
              
                    position: "fixed",
                    width: "100%",
                    height:"100%",
                    left: "50%",
                    top: "50%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%) ",
                    zIndex: "-1", 
                }}>
                    <source src={backgroundVideo} type='video/mp4' />
                </video>

          
                <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />

                {renderPage()}
        
                <Footer />
 


          
        </div>
    );
}