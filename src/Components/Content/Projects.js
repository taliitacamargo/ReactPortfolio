import React from 'react';
import fastTrack from '../assets/FastTrack.jpg';
import tixShare from '../assets/TixShare.jpeg';
import cardGraphix from '../assets/CardGraphix.jpg';
import budgetTracker from '../assets/BudgetTracker.jpg';
import fitnessTracker from '../assets/FitnessTracker.jpg';
import quizChallenge from '../assets/QuizChallenge.jpg'

export default function Projects() {
    return (
        <div className="container ">
            <h1>My Projects</h1>

            <div className="prj-container ">

                <span className="projects" >
                    <small className="prj-name">FastTrack</small>
                    <a href="https://fasttrackpenn.herokuapp.com/">
                        <img className="project-img block1" src={fastTrack} alt="fastrack" />
                        <p className="prj-description">Developed to target users who fast and want to keep track of their fasting schedules or find new ones.</p>
                    </a>
                </span>

                <span className="projects" >
                    <small className="prj-name">TixShare</small>
                    <a href="https://toriskyt.github.io/project-one/">
                        <img className="project-img block1" src={tixShare} alt="fastrack" />
                        <p className="prj-description">A Website where users can donate tickets for events to those who wish to attend but cannot afford to.</p>
                    </a>
                </span>

                <span className="projects" >
                    <small className="prj-name">CardGraphix</small>
                    <a href="https://card-graphix.herokuapp.com/">
                        <img className="project-img block2 " src={cardGraphix} alt="cardgraphix" />
                        <p className="prj-description">A Website where users can create their own business card designs free of charge and export it to PDF for printing</p>
                    </a>
                </span>

                <span className="projects" >
                    <small className="prj-name">BudgetTracker</small>
                    <a href="https://powerful-plains-32252.herokuapp.com">
                        <img className="project-img block2" src={budgetTracker} alt="budgettracker" />
                        <p className="prj-description">A Website where you can track your spendings and earnings by inputting them.</p>
                    </a>
                </span>

                <span className="projects" >
                    <small className="prj-name">FitnessTracker</small>
                    <a href="https://mysterious-tundra-72660.herokuapp.com">
                        <img className="project-img block2" src={fitnessTracker} alt="fitnesstracker" />
                        <p className="prj-description">A Web Page where users are able to create, save, and continue workouts.</p>
                    </a>
                </span>

                <span className="projects" >
                    <small className="prj-name">QuizChallenge</small>
                    <a href="https://taliitacamargo.github.io/quiz-project/">
                        <img className="project-img block2" src={quizChallenge} alt="quizchallenge" />
                        <p className="prj-description">An application where users can play a quiz challenge about Javascript.</p></a>
                </span>
            </div>

        </div>
    );
}