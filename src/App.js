import React from "react";
// import HomePage from './HomePage';
import Header from './components/Header/Header';
import Navbar from './components/Header/Navbar'; //?? DO I IMPORT THIS?

import About from './components/About';
import Contact from './components/Contact/index';
import Resume from './components/Resume';
// import Portfolio from './components/Portfolio/Portfolio';
// import Project from './components/Portfolio/Project';
import Footer from './components/Footer'; // ?? DON'T THINK I IMPORT THIS

// import Route from './components/Route';

function App() {
    return (
        <div>
            <Navbar />
            <Header />
            <About />
            <Contact />
            <Resume />
            {/* <Portfolio />
            <Project /> */}
            <Footer />
        </div>
    )
}

export default App;