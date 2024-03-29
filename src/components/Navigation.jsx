import React, { PureComponent } from "react";
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";
import "../css/Navigation.css";
import Home from "../components/Home";
import About from "../components/About";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Nutriciency from "../components/Nutriciency";
import Construction from "../components/Construction";
import ArtWork from "../components/ArtWork";
import AR from "../components/AR";

export default class App extends PureComponent {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="component-navlink">
            <NavLink to="/Home" className="app-navlink" activeClassName="navlink-active">Home</NavLink>
            |
            <NavLink to="/About" className="app-navlink" activeClassName="navlink-active">About</NavLink>
            |
            <NavLink to="/Contact" className="app-navlink" activeClassName="navlink-active">Contact</NavLink>
          </div>
          <hr class="app-hr" />
          <div className="content">
            <Switch>
              <Route path="/Home" component={Home} />
              <Route exact path="/" component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Nutriciency" component={Nutriciency} />
              <Route path="/Construction" component={Construction} />
              <Route path="/ArtWork" component={ArtWork} />
              <Route path="/AR" component={AR} />
            </Switch>
          </div>
        </div>
      </HashRouter>
        );
      }
}
