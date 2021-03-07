import React from "react";
import './App.css';
import HomePage from './Homepage';
import About from './About';
import Contact from './Contact'
import Blog from './Blog'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap'

function App() {
  return (
    <Router>
      <div>
        <Navbar>
          <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
            <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
            <Nav.Link><Link to="/blog">Blog</Link></Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
