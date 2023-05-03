import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import HomePage from './HomePage';
import Header from './Header/Header';
// import Header from './Header/Navbar'; //?? DO I IMPORT THIS?

import AboutPage from './About';
import ContactPage from './Contact';
import ResumePage from './Resume';
import PortfolioPage from './Portfolio/Portfolio';
// import PortfolioPage from './Portfolio/Project'; // ?? DON'T THINK I IMPORT THIS

import FooterPage from './Footer';


function App() {
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route exact path="/" component={HomePage} /> */}
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/resume" component={ResumePage} />
                <Route path="/portfolio" component={PortfolioPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;