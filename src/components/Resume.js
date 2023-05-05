import React from 'react';
import '../styles/Section.css';
import Reiners_Resume from '../Reiners_Resume.pdf';


function Resume() {
    const styles = {
        sectionStyles: {
            fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
            fontSize: '14px',
            backgroundColor: 'rosybrown',
            paddingTop: '20px',
            paddingBottom: '20px',
        },
    }
    function DownloadResume() {
        const ResumeInfo = Reiners_Resume
        const blob = new Blob([ResumeInfo], { type: "application/pdf" })
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = "Reiners_Resume.pdf"
        a.click()
        // URL.revokeObjectURL(url)
    }
    return (
        <section id="resume" style={styles.sectionStyles} className="section">
            <h1>Bailey's Resume</h1>

            <div className="resume-body">
                <div className="resume-section">
                    <h3>Summary</h3>
                    <p>
                        Front-End web developer leveraging a background in SEO, content marketing, psychology and art history to provide unique perspectives on how end-users find and interact with websites. Earned a certificate in Full Stack Web Development from Vanderbilt University. Innovative problem-solver who is keen on developing apps optimized for SEO with responsive, mobile-first design and development. Strengths in creativity, teamwork, and building projects from ideation to execution.
                    </p>
                </div>

                <div className="resume-section">
                    <h3>Technical Skills</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Vanilla JS</li>
                        <li>ES5</li>
                        <li>ES6</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Bootstrap</li>
                        <li>APIs</li>
                        <li>Git</li>
                        <li>SQL</li>
                        <li>NoSQL</li>
                        <li>regex</li>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                        <li>React</li>
                    </ul>
                </div>

                <div className="resume-section">
                    <h3>Experience</h3>
                    <p>
                        Vanderbilt University, Remote, November 2022 — May 2023
                    </p>
                    <ul>
                        <li>Collaborated with teammates to build a bike and weather app, learning to use APIs, Bulma and Git branching.</li>
                        <li>Built a back-end application using Express.js, JSON and Heroku to deploy a simple daily note taking app.</li>
                        <li>Created a ReadMe generator using Node JS to streamline the ReadMe creation process.</li>
                        <li>Utilized Node.js to create an application that generates an HTML webpage that displays engineer team information.</li>
                    </ul>
                </div>
            </div>
            <button onClick={DownloadResume}>
                <p>Download Bailey's Resume</p>
            </button>
        </section>
    );
}

export default Resume;
