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
            description: "A fun word game to find the missing puzzle. This is for laptop's only!",
            github: "https://github.com/Arinze-Kevin/Hangman-game",
            live: "hangman-game-livid.vercel.app",
            stack: "JavaScript",
            isPrivate: false
        },
        {
            title: "Weather App",
            description: "A weather application is a based application to get weather updates and forecast",
            github: "https://github.com/Arinze-Kevin/weather-app",
            live: "https://house-marketplace.vercel.app/",
            stack: "Node + Express",
            isPackage: true,
            isPrivate: true
        },
        {
            title: "Expensify App",
            description: "An Expenses tracker application, that helps users to track their day to day expenses.",
            github: "https://github.com/Arinze-Kevin/Expensify-app",
            live: "https://react-expensify-app1.herokuapp.com/",
            stack: "Firebase + React",
            isPackage: true,
            isPrivate: true
        },
        {
            title: "Note App",
            description: "A web app to jot down quick thoughts or to save longer notes",
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