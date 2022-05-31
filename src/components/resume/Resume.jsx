import React from "react";
import ResumeCard from "../../shared/resumeCard/ResumeCard";
import { Link } from 'react-router-dom'
import Button from "../../shared/button/Button";
import './Resume.css'
import pdf from '../../static/Egbogu Arinze Kevin.pdf'

const Resume = () => {
    const experiences = [
        {
            company: "Freelance",
            position: "Software Developer",
            started: "Aug 2021",
            ended: null,
            description:
                " I am currently learning web3 technologies.",
            achievements: [
                "Created highly responsive web applications with great user experience for clients.",
                "Worked with a team of developers to build and manage a company's website.",
                "Worked with a team of developers to build a fintech startup.",
                "Code testing and debugging",
                "Developed and designed web applications from foundation to full production."
            ],
        }
    ]

    return (
        <div className="resume">
            <div className="resume_container">
                <div className="top_row">
                    <h1>Arinze Kevin</h1>
                    <div className="buttons">
                        <a
                            href="https://www.linkedin.com/in/arinzekevin"
                        >
                            <small>
                                <i className="fab fa-linkedin"></i> <span>Linked In</span>
                            </small>
                        </a>
                        <a
                            href={pdf}
                        >
                            <small>
                                <i className="fas fa-download"></i> <span>Download </span>
                            </small>
                        </a>
                    </div>
                </div>
                <p>Software Developer</p>
                <div className="summary">
                    <p>
                    I'm a self motivated, resourceful, ambitious and hardworking software developer,
                    passionate about solving problems with code and bringing ideas to life. I'm well experienced 
                    with building scalable and functional web applications with user experience as a top 
                    priority using various development tools and frameworks.
                    </p>
                </div>
                <div className="divider">
                    <p>Stacks</p>
                    <span></span>
                </div>
                <div className="skills">
                    <p>
                        HTML, CSS, Javascript [ES6+], ReactJS,
                         Firebase.
                    </p>
                </div>
                <div className="divider">
                    <p>Experiences</p>
                    <span></span>
                </div>
                <div>
                    {
                        experiences.map((experience, index) => (
                            <ResumeCard {...experience} key={index} id={index} />))
                    }
                </div>
                <div className="divider">
                    <p>Projects</p>
                    <span></span>
                </div>
                <div className="exp_container">
                    <section className="experience">
                        <article className="description">
                            <p className="nospan">
                                Links to my works can be found on {" "}
                                <Link to="/project"> Projects</Link>
                            </p>
                        </article>
                    </section>
                </div>
            </div>
            <Button
                previous={{ url: '/article', text: 'Article' }}
                next={{ url: '/', text: 'Home' }}
            />
        </div>
    )
}

export default Resume