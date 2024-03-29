import React from "react";
import Home from './components/Home';
import Header from './components/Header/Header';
// import Navbar from './components/Header/Navbar';

import About from './components/About';
import Contact from './components/Contact/index';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio/Portfolio';
// import Project from './components/Portfolio/Project';
import Footer from './components/Footer';

// import Route from './components/Route';

function App() {
    return (
        <div>
            <Home />
            <Header />
            <About />
            <Contact />
            <Resume />
            <Portfolio />
            <Footer />
        </div >
    )
}

export default App;