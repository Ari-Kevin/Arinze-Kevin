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
            description: "A fun word game to find the missing puzzle.",
            github: "https://github.com/Nnvemeka/butiq",
            live: "https://butiq.netlify.com",
            stack: "JavaScript",
            isPrivate: false
        },
        {
            title: "Todo App",
            description: "A web app to list your todo list for the day.",
            github: "",
            live: "https://github.com/Nnvemeka/task-manager-api",
            stack: "JavaScript",
            isPackage: true,
            isPrivate: true
        },
        {
            title: "Note App",
            description: "Keep track of your expenses!",
            github: "https://github.com/Nnvemeka/expensify-app",
            live: "https://nnv-expensify-app.herokuapp.com",
            stack: "JavaScript",
            isPrivate: false
        },
        {
            title: "Chat App",
            description: "Create a chat room and enjoy your conversation.",
            github: "https://github.com/Nnvemeka/chat-app",
            live: "https://nnv-chat.herokuapp.com",
            stack: "NodeJS + SocketIO + Express",
            isPrivate: false
        },
        {
            title: "Indecision",
            description: "What do you want to do? Let this application help you decide!",
            github: "https://github.com/Nnvemeka/Indecision-app",
            live: "https://nnv-indecision.netlify.app",
            stack: "ReactJS",
            isPrivate: false
        },
        {
            title: "Weather App",
            description: "Weather forcast application.",
            github: "https://github.com/Nnvemeka/weather-app",
            live: "https://nnv-weather-application.herokuapp.com",
            stack: "NodeJs + Express",
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