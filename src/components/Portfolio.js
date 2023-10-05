import React from "react";
import Project from "./Project";
import sweetImg from '../assets/images/deployed-page.png';
import coderCuisine from '../assets/images/group-project1-screenshot.png';
import textEditor from '../assets/images/text-editor.png';
import techBlog from '../assets/images/tech-blog.png'


const projects = [
    {
        id:0,
        title: 'Code-Collective',
        image: '/images/code-collective.png',
        description: 'This application was designed so that we as a class can stay connected on a platform of our own design.',
        repo: 'https://github.com/jcg0/code-collective-project-3',
        live: 'https://code-collectives.herokuapp.com/'
    },
    {
        id:4,
        title: 'Sweet Solution',
        image: '/images/deployed-page.png',
        description: 'This application was designed so that a bakery could have and interactive website for their clients. The page allows users to log in and out view products and make orders.',
        repo: 'https://github.com/EarlofSmith/sweet-solution',
        live: ' https://sweet-solution-d664223c597a.herokuapp.com/'
    },
    {
        id:1,
        title: "Coder's Cuisine",
        image: '/images/group-project1-screenshot.png',
        description: "Coder's Cuisine is a website designed for people that have specific dietary restrictions or items at home that they want to use and need a new recipe! This website gives people more variety for the ingredients they usually use at home without having to make an extra trip to the grocery store.",
        repo: 'https://github.com/annapng/Project1',
        live: 'https://annapng.github.io/Project1/',  
    },
    {
        id:2,
        title: "text-editor-pwa",
        image: '/images/text-editor.png',
        description: 'This project allows you to create notes or code snippets with or without ann internet connection',
        repo: 'https://github.com/EarlofSmith/text-editor-pwa',
        live: 'https://jate-text-editors.herokuapp.com/',
    },
    {
        id:3,
        title: 'tech-blog',
        image: '/images/tech-blog.png',
        description:'This is a cms style blog site. It allows a user to be created and then post blogs and comments.',
        repo: 'https://github.com/EarlofSmith/tech-blog',
        live: 'https://tech-blogs1.herokuapp.com/dashboard',
    }
    
];

function Portfolio() {
    return (
        <div class='portfolio'>
            <p className="content is-medium" >Portfolio</p>
            <br />

            <Project projects={projects}/>
        </div>
    )
}

export default Portfolio;