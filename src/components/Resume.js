// CONSIDER RENAMING SECTION TO ABOUT
import React from 'react';
import '../styles/Section.css';
import Reiners_Resume from '../Reiners_Resume.pdf';

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
    sectionStyles: {
        background: 'orange',
    },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Resume() {
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
            <h2>Download Bailey's Resume</h2>
            <button onClick={DownloadResume}>
                download
            </button>
            <p>
                Front-End web developer leveraging a background in SEO, content marketing, psychology and art history to provide unique perspectives on how end-users find and interact with websites. Earned a certificate in Full Stack Web Development from Vanderbilt University. Innovative problem-solver who is keen on developing apps optimized for SEO with responsive, mobile-first design and development. Strengths in creativity, teamwork, and building projects from ideation to execution.

                TECHNICAL SKILLS
                HTML, CSS, HTML5, CSS3, Vanilla JS, ES5, ES6, Node.js, Express.js, Bootstrap, APIs, Git, SQL, NoSQL, regex. PostgreSQL, MongoDB, React

                EXPERIENCE
                Vanderbilt University, Remote	November 2022 — May 2023
                Student
                Collaborated with teammates to build a bike and weather app, learning to use APIs, Bulma and Git branching.
                Built a back-end application using Express.js, JSON and Heroku to deploy a simple daily note taking app.
                Created a ReadMe generator using Node JS to streamline the ReadMe creation process.
                Utilized Node.js to create an application that generates an HTML webpage that displays engineer team information.
            </p>
        </section>
    );
}

export default Resume;
