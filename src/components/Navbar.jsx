import React from "react";

const Navbar = ({ setCategory, setCountry, country }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">Decode</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory("technology")}
              >
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("business")}>
                Business
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("health")}>
                Health
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("science")}>
                Science
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("sports")}>
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select Your Country
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" onClick={() => setCountry("us")}>
              USA
            </a>
          </li>
          <li>
            <a className="dropdown-item" onClick={() => setCountry("gb")}>
              UK
            </a>
          </li>
          <li>
            <a className="dropdown-item" onClick={() => setCountry("ca")}>
              Canada
            </a>
          </li>
          <li>
            <a className="dropdown-item" onClick={() => setCountry("in")}>
              India
            </a>
          </li>
        </ul>
      </div>

      <h6>
        Country: <span class="badge text-bg-secondary">{country}</span>
      </h6>
    </nav>
  );
};

export default Navbar;
