import React from "react";
import ProjectCard from "../../shared/projectCard/ProjectCard";
import Button from '../../shared/button/Button'
import './Project.css'

const Project = () => {
    const featuredProjects = [
        {
            title: "House marketplace",
            description: "A house market website to rent, sell or buy houses",
            github: "",
            live: "",
            stack: "Firebase + React",
            isPrivate: false
        }
    ]
    const projects = [
        {
            title: "Hangman game",
            description: "A fun word game to find the missing puzzle. This is for laptop's only",
            github: "https://github.com/Arinze-Kevin/Hangman-game",
            live: "hangman-game-livid.vercel.app",
            stack: "JavaScript",
            isPrivate: false
        },
        {
            title: "House marketplace",
            description: "A house market website to rent, sell or buy houses",
            github: "https://github.com/Arinze-Kevin/House-Marketplace",
            live: "https://house-marketplace.vercel.app/",
            stack: "Firebase + React",
            isPackage: true,
            isPrivate: true
        },
        {
            title: "Note App",
            description: "A webb app to jot down quick thoughts or to save longer notes",
            github: "https://github.com/Arinze-Kevin/Note-App",
            live: "note-app-orcin.vercel.app",
            stack: "JavaScript",
            isPrivate: false
        },
        {
            title: "Todo list",
            description: "A web app to list your todo list.",
            github: "https://github.com/Arinze-Kevin/Todo-App",
            live: "todo-app-ari-kevin.vercel.app",
            stack: "JavaScript",
            isPrivate: false
        }
    ]

    return (
        <div className="project">
            <div className="portfolio_showcase">
                <h3 className="title">PROJECTS</h3>
                {
                    projects.map((project, index) => (
                        <ProjectCard {...project} key={index} id={index} />
                    ))
                }
            </div>
            <div>
                <Button
                    previous={{ url: '/', text: 'Home' }}
                    next={{ url: '/article', text: 'Article' }}
                />
            </div>
        </div>
    )
}

export default Project