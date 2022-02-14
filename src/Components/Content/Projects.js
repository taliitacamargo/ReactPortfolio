import React from 'react';
import fastTrack from '../assets/FastTrack.jpg';
import tixShare from '../assets/TixShare.jpeg'

export default function Projects() {
    return(
    <div className = "container ">
        <h1>My Projects</h1>
        <div className = "prj-container project-container">
            
            <a className= "projects" href = "https://fasttrackpenn.herokuapp.com/"><h3>FastTrack</h3>
            <img className = "project-img" src ={fastTrack } alt="fastrack"/> </a>
            
            <a className= "projects" href = "https://toriskyt.github.io/project-one/"><h3>TixShare</h3>
            <img className = "project-img" src ={tixShare} alt="fastrack"/> </a>
      
        </div>
        
    </div>
    );
}