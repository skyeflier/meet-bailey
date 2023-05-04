import React from 'react';

function Navbar() {
    const styles = {
        navbarStyle: {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'baseline',
            justifyContent: 'space-evenly',
            backgroundColor: 'teal',
            addingTop: '20px',
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
        <nav style={styles.navbarStyle} className="navbar">
            <a href="#about" style={styles.textStyle}>About</a>
            <a href="#resume" style={styles.textStyle}>Resume</a>
            <a href="#portfolio" style={styles.textStyle}>Portfolio</a>
            <a href="#contact" style={styles.textStyle}>Contact</a>
        </nav>
    );
}

export default Navbar;