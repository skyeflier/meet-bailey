import React from 'react';
import Navbar from './Navbar.js';

function Header() {
    const styles = {
        headerStyle: {
            textAlign: 'center',
            backgroundColor: 'teal',
            paddingTop: '20px',
            paddingBottom: '20px',
        },
        textStyle: {
            fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
            fontSize: '44px',
            color: 'white',
        }
    }
    return (
        <header style={styles.headerStyle} className="header">
            <h1 style={styles.textStyle}>Bailey Reiners</h1>
            <Navbar />
        </header>
    );
}

export default Header;