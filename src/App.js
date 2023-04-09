import React, { Component } from "react";
import "./App.css";
import Login from "./component/Login";
import Search from "./component/Search";
import Intro from "./component/Intro";
import Navigation from "./component/Navigation";
import Auction from "./component/Auction"
import { Link, BrowserRouter, Switch, Router, Routes, Route } from "react-router-dom";
import { Nav, Navbar, Button, Stack, Badge, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
      <BrowserRouter>
        <Navigation />
        {/* <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Intro">Intro</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Search">Search</Link></li>
          </ul>
        </nav>
        </div> */}
        <Switch>
        <Route exact path="/"> <Intro/> </Route>
        <Route path="/Intro"> <Intro/>  </Route>
        <Route path="/Login"> <Login /> </Route>
        <Route path="/Search"> <Search /> </Route>
        <Route path="/Auction"> <Auction /> </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
