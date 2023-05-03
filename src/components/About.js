// CONSIDER RENAMING SECTION TO ABOUT
import React from 'react';
import '../styles/Section.css';

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

function About() {
    return (
        <section style={styles.sectionStyles} className="section">
            <h2>Hi! I'm Bailey</h2>
            <p>
                I am a creative and results-driven search engine optimization (SEO) strategist with a background in psychology and art history. With a Bachelor of Arts from Lawrence University and experience working with global appliance brands such as Whirlpool, Kitchenaid, Maytag, and JennAir, I have honed my skills in developing effective SEO strategies to attract organic traffic and build the marketing pipeline.

                My expertise in content marketing, keyword hierarchy, page optimization, meta data, and microcopy have helped me earn over 400 page one keyword rankings on Google, including 100+ head terms. I have also built organic content hubs to enhance user experience with tagging and filtering frameworks.

                Aside from my professional experience, I am passionate about empowering women and girls through fundraising, outreach, advocacy, and educational efforts as a board member of UN Women Chicago. I am also an instrument-rated pilot, exploring the country and enjoying the challenge of piloting antique single-engine aircraft in rural America.

                I am a firm believer in collaboration and am always looking for ways to mentor and educate colleagues. Let's connect and see how we can work together to achieve our goals.
            </p>
        </section>
    );
}

export default About;
