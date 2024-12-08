import React from "react";

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <a
          href="index.html"
          className="logo d-flex align-items-center me-auto me-xl-0"
        >
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="assets/img/logo.png" alt=""> */}
          <h1 className="sitename">Yummy</h1>
          <span>.</span>
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="#hero" className="active">
                Home
                <br />
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Blogs</a>
            </li>
            <li>
              <a href="#events">Services</a>
            </li>
            <li>
              <a href="#chefs">Contact</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>
        <div>
          <a className="btn-getstarted" href="index.html#book-a-table">
            Register
          </a>
          <a className="btn-getstarted mx-3" href="index.html#book-a-table">
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
