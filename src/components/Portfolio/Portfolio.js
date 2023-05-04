import React from 'react';
import '../../styles/Portfolio.css';
import JobImage from './bored-of-my-job-board.jpg';
import BicycleImage from './ride-or-die-app.jpg';
import AviationImage from './women-in-aviation-blog.jpg';
import CommunityImage from './community-network.jpg';
import InventoryImage from './in-and-out-inventory.jpg';
import NoteImage from './not-your-note-taker.jpg';

console.log(JobImage);

function Portfolio() {
    const styles = {
        portfolioStyles: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            backgroundColor: 'goldenrod',
        },
        itemStyles: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '20x',
            width: '30%',
        },
        imageStyles: {
            width: '25%',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '5px',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
        },
        textStyles: {
            textAlign: 'center',
        },
    };
    return (
        <div id="portfolio" style={styles.portfolioStyles} className="portfolio">
            <div style={styles.itemStyles}>
                <a href="https://github.com/dannikaml/interactive-2" target="_blank">
                    <h2 style={styles.titleStyles}>Bored of My Job Board</h2>
                    <img src={JobImage} alt="Job Board Photo" style={styles.imageStyles} />
                </a>
            </div>
            <div style={styles.itemStyles}>
                <a href="https://github.com/chwd31/Ride-or-Die-Cycling-App" target="_blank">
                    <h2 style={styles.titleStyles}>Ride Or Die</h2>
                    <img src={BicycleImage} alt="Ride Or Die App" style={styles.imageStyles} />
                </a>
            </div>
            <div style={styles.itemStyles}>
                <a href="https://github.com/skyeflier/women-in-aviation-blog" target="_blank">
                    <h2 style={styles.titleStyles}>Women In Aviation Blog</h2>
                    <img src={AviationImage} alt="Women In Aviation Blog" style={styles.imageStyles} />
                </a>
            </div>
            <div style={styles.itemStyles}>
                <a href="https://github.com/skyeflier/18-community-network" target="_blank">
                    <h2 style={styles.titleStyles}>Community Network</h2>
                    <img src={CommunityImage} alt="Community Network" style={styles.imageStyles} />
                </a>
            </div>
            <div style={styles.itemStyles}>
                <a href="https://github.com/skyeflier/13-in-and-out-inventory" target="_blank">
                    <h2 style={styles.titleStyles}>In And Out Inventory</h2>
                    <img src={InventoryImage} alt="In And Out Inventory" style={styles.imageStyles} />
                </a>
            </div>
            <div style={styles.itemStyles}>
                <a href="https://github.com/skyeflier/11-not-your-note-taker" target="_blank">
                    <h2 style={styles.titleStyles}>Not Your Note Taker</h2>
                    <img src={NoteImage} alt="Not Your Note Taker" style={styles.imageStyles} />
                </a>
            </div>
        </div>
    );
}

export default Portfolio;
