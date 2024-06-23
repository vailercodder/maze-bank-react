import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

// very basic, wanted to add  a gta loading screen animation, but this ok i guess
const Home = () => {
  return (
    <div id="root">
      <div id="container">
        {/* Header */}
        <hr className="header-line" />
        <header className="container">
          <div className="content-logo">
            <div className="logo-container">
              <img
                src="images/Logo.png"
                className="logo"
                alt="Maze Bank"
                title="Maze Bank"
              />
            </div>
          </div>
          <div className="content-line">
            <div className="line-bottom-container">
              <hr />
            </div>
          </div>
        </header>
        {/* Body */}
        <div className="container container-content">
          <div className="content-welcome">
            <p>
              welcome מר אדמין <br /> מיכאל דה סנטה
            </p>
          </div>
          <div className="content-button">
            <Link to="/user-management" className="btn btn-lg btn-MazeBank">
              to User Management
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
