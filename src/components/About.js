// CONSIDER RENAMING SECTION TO ABOUT
import React from 'react';
import Bitmoji from './bitmoji-of-manic-woman-coding.png'

function About() {
    const styles = {
        containerStyles: {
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            backgroundColor: 'rosybrown',
            paddingTop: '20px',
            paddingBottom: '20px',
        },
        imageStyles: {
            width: '200px',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '5px',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
            marginRight: '20px',
        },
        textStyles: {
            lineHeight: '1.5em',
            fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
        },
    };

    return (
        <section id="about" style={styles.containerStyles} className="section">
            <img src={Bitmoji} alt="Bitmoji avatar of manic woman with long hair coding" style={styles.imageStyles} />
            <h2 style={styles.textStyles}>Hi, I'm Bailey!</h2>
            <p style={styles.textStyles}>
                I am a creative and results-driven search engine optimization (SEO) strategist with a background in psychology and art history. With a Bachelor of Arts from Lawrence University and experience working with global appliance brands such as Whirlpool, Kitchenaid, Maytag, and JennAir, I have honed my skills in developing effective SEO strategies to attract organic traffic and build the marketing pipeline. My expertise in content marketing, keyword hierarchy, page optimization, meta data, and microcopy have helped me earn over 400 page one keyword rankings on Google, including 100+ head terms. I have also built organic content hubs to enhance user experience with tagging and filtering frameworks. Aside from my professional experience, I am passionate about empowering women and girls through fundraising, outreach, advocacy, and educational efforts as a board member of UN Women Chicago. I am also an instrument-rated pilot, exploring the country and enjoying the challenge of piloting antique single-engine aircraft in rural America. I am a firm believer in collaboration and am always looking for ways to mentor and educate colleagues. Let's connect and see how we can work together to achieve our goals.
            </p>
        </section>
    );
}

export default About;
