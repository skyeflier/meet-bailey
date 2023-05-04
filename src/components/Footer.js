import React from 'react';

function Footer() {
    const styles = {
        footerStyle: {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'baseline',
            justifyContent: 'space-evenly',
            backgroundColor: 'teal',
            paddingTop: '20px',
            paddingBottom: '20px',
        },
        textStyle: {
            fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
            fontSize: '24px',
            color: 'white',
            textDecoration: 'none',
        }
    }
    return (
        <footer style={styles.footerStyle} className="footer">
            <a href="#https://github.com/skyeflier" style={styles.textStyle}>GitHub</a>
            <a href="#https://www.linkedin.com/in/baileyreiners/" style={styles.textStyle}>LinkedIn</a>
            <a href="#mailto:baileyreiners26@gmail.com" style={styles.textStyle}>Email</a>
        </footer>
    )
};

export default Footer;