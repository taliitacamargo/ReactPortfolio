import React from 'react';
import profileImage from '../assets//profileImg.jpg';

export default function About() {
    return (
        
        <div className = "container">
            <h2> Hello, I'm Talita,</h2>
            <img id = "profileIMG" src = {profileImage} alt = "me"/>

            <p>
                An adventure-seeker searching for new experiences in the world of web-development. The very first time I found myself interested in developing web-pages was when the company that I work for started searching around for a developer that could build our website as well as an application. It was then that I realized that I could become that person just by learning something new. I currently work in the logistics industry with vehicle shipments, but learning new skills in different fields has always been something I'm excited about, specially with coding, so here we are!
                This experience so far has been interesting and fun. Regardless of the time spent trying to debug my code, searching around the web for new methods I can use, or even just taking a peek at other's inspected web-pages, the knowledge that comes with doing these things pay off.
                I'm excited for this new chapter of my life, and I hope that by creating this page I can share a bit of my experience with you.
            </p>
        </div>
    );
}