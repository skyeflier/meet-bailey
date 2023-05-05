import React from 'react';
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
            justifyContent: 'space-evenly',
            backgroundColor: 'goldenrod',
            addingTop: '20px',
            paddingBottom: '20px',
        },
        itemStyles: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '20x',
            width: '30%',
            textAlign: 'center',
        },
        imageStyles: {
            width: '25%',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '5px',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
        },
        titleStyles: {
            fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
            color: 'white',
            textDecoration: 'none',
            textAlign: 'center',
        }
    };
    return (
        <div id="portfolio" style={styles.portfolioStyles} className="portfolio">
            <div style={styles.itemStyles}>
                <section>
                    <h2 style={styles.titleStyles}><a href="https://bored-of-my-job-board.herokuapp.com/" target="_blank">Bored of My Job Board</a></h2>
                    <h3 style={styles.titleStyles}><a href="https://github.com/dannikaml/interactive-2" target="_blank">GitHub Repository</a></h3>
                    <img src={JobImage} alt="Job Board" style={styles.imageStyles} />
                </section>
            </div>
            <div style={styles.itemStyles}>
                <section>
                    <h2 style={styles.titleStyles}><a href="https://chwd31.github.io/Ride-or-Die-Cycling-App/" target="_blank">Ride or Die</a></h2>
                    <h3 style={styles.titleStyles}><a href="https://github.com/chwd31/Ride-or-Die-Cycling-App" target="_blank">GitHub Repository</a></h3>
                    <img src={BicycleImage} alt="Ride Or Die App" style={styles.imageStyles} />
                </section>
            </div>
            <div style={styles.itemStyles}>
                <section>
                    <h2 style={styles.titleStyles}>Women In Aviation Blog</h2>
                    <h3 style={styles.titleStyles}><a href="https://github.com/skyeflier/women-in-aviation-blog" target="_blank">GitHub Repository</a></h3>
                    <img src={AviationImage} alt="Women In Aviation Blog" style={styles.imageStyles} />
                </section>
            </div>
            <div style={styles.itemStyles}>
                <section>
                    <h2 style={styles.titleStyles}>Community Network</h2>
                    <h3 style={styles.titleStyles}><a href="https://github.com/skyeflier/18-community-network" target="_blank">GitHub Repository</a></h3>
                    <img src={CommunityImage} alt="Community Network" style={styles.imageStyles} />
                </section>
            </div>
            <div style={styles.itemStyles}>
                <section >
                    <h2 style={styles.titleStyles}>In And Out Inventory</h2>
                    <h3 style={styles.titleStyles}><a href="https://github.com/skyeflier/13-in-and-out-inventory" target="_blank">GitHub Repository</a></h3>
                    <img src={InventoryImage} alt="In And Out Inventory" style={styles.imageStyles} />
                </section>
            </div>
            <div style={styles.itemStyles}>
                <section>
                    <h2 style={styles.titleStyles}><a href="https://quiet-cliffs-37137.herokuapp.com/" target="_blank">Not Your Note Taker</a></h2>
                    <h3 style={styles.titleStyles}><a href="https://github.com/skyeflier/11-not-your-note-taker" target="_blank">GitHub Repository</a></h3>
                    <img src={NoteImage} alt="Not Your Note Taker" style={styles.imageStyles} />
                </section>
            </div>
        </div >
    );
}

export default Portfolio;
