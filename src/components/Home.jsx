import React, { PureComponent } from "react";
import portfolio from "../images/portfolio.png";
import bridal from "../images/Bridal_Art.png";
import nutriciency from "../images/nutriciency_db_home.png"
import brunch_menu from "../images/Brunch_Menu.png"
import icons from "../images/Icons.png"
import sketch from "../images/Sketch_Project.png"
import filter from "../images/mushroomfilter.png"
import ar from "../images/faceAREarth.png"
import digitalArtFig from "../images/watercolorFig.png"
import Button from 'react-bootstrap/Button'
import "../css/Home.css";

export default class App extends PureComponent {
  render() {
    return (
      <div class="container">
        <div class="row top-row-buffer">
          <div class="col-sm-4">
            <div class="hover-effect">
              <img src={nutriciency} alt="nutriciency" class="img-reponsive" className="portfolio-img" />
              <div class="hover-overlay">
                <a class="hover-info" href="#/Nutriciency">Nutriciency Web App Project</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="hover-effect">
              <img src={ar} alt="icon img" class="img-reponsive" className="portfolio-img" />
              <div class="hover-overlay">
                <a class="hover-info" href="#/AR">Augmented Reality</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="hover-effect">
              <img src={digitalArtFig} alt="icon img" class="img-reponsive" className="portfolio-img" />
              <div class="hover-overlay">
                <a class="hover-info" href="#/ArtWork">Digital Art</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="hover-effect">
              <img src={sketch} alt="sketch img" class="img-reponsive" className="portfolio-img" />
              <div class="hover-overlay">
                <a class="hover-info" href="#/Construction">Sketch Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
