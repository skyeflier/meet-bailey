import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import HomePage from './HomePage';
// import Header from './Header/Header';
// import Header from './Header/Navbar'; //?? DO I IMPORT THIS?

import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio/Portfolio';
// import PortfolioPage from './Portfolio/Project'; // ?? DON'T THINK I IMPORT THIS

// import Footer from './Footer'; // ?? DON'T THINK I IMPORT THIS


function App() {
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route exact path="/" component={HomePage} /> */}
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/resume" component={Resume} />
                <Route path="/portfolio" component={Portfolio} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;