import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={["/","/about"]}>
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
        <Footer />
        </div>
    </Router>
  );
}

export default App;
