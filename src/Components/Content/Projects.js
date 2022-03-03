import React from 'react';
import fastTrack from '../assets/FastTrack.jpg';
import tixShare from '../assets/TixShare.jpeg';
import cardGraphix from '../assets/CardGraphix.jpg';
import budgetTracker from '../assets/BudgetTracker.jpg';
import fitnessTracker from '../assets/FitnessTracker.jpg';
import quizChallenge from '../assets/QuizChallenge.jpg'

export default function Projects() {
    return(
    <div className = "container ">
        <h1>My Projects</h1>
        <div className = "prj-container project-container">
            
            <a className= "projects" href = "https://fasttrackpenn.herokuapp.com/"><small className = "prj-name">FastTrack</small>
            <img className = "project-img block1" src ={fastTrack } alt="fastrack"/> </a>
            
            <a className= "projects" href = "https://toriskyt.github.io/project-one/"><small className = "prj-name">TixShare</small>
            <img className = "project-img block1" src ={tixShare} alt="fastrack"/> </a>

            <a className= "projects" href = "https://card-graphix.herokuapp.com/"><small className = "prj-name">CardGraphix</small>
            <img className = "project-img block2 " src ={cardGraphix} alt="cardgraphix"/> </a>

            <a className= "projects" href = "https://powerful-plains-32252.herokuapp.com"><small className = "prj-name">BudgetTracker</small>
            <img className = "project-img block2" src ={budgetTracker} alt="budgettracker"/> </a>
      
            <a className= "projects" href = "https://mysterious-tundra-72660.herokuapp.com"><small className = "prj-name">FitnessTracker</small>
            <img className = "project-img block2" src ={fitnessTracker} alt="fitnesstracker"/> </a>

            <a className= "projects" href = "https://taliitacamargo.github.io/quiz-project/"><small className = "prj-name">QuizChallenge</small>
            <img className = "project-img block2" src ={quizChallenge} alt="quizchallenge"/> </a>
        </div>
        
    </div>
    );
}