import React from "react";
import { Link } from "react-router-dom";
import "../styles/UserManagement.css";

const UserManagement = () => {
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
            <div className="saldo-container">
              <p>Cash left from heists: $2,912,050.00</p>
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
          <div className="content-line">
            <div className="nav-container">
              <nav className="navbar navbar-default">
                <p className="user">Michael De Santa</p>
                <p>Choose a service.</p>
              </nav>
            </div>
          </div>
          <div className="content-button">
            <Link to="add-user" className="btn btn-lg btn-MazeBank">
              Add User
            </Link>
            <Link to="user-stats" className="btn btn-lg btn-MazeBank">
              User Stats
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
