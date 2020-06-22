import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
//import { Link } from "react-router-dom";

const Header = (props) => {
  const { branding } = props;
  return (
    // <div>
    //   {/* {<h1 style={headingStyle}>{props.branding}</h1>} */}
    //   <h1>{branding}</h1>
    // </div>

    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="icon-home"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="icon-plus"></i>
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="icon-question"></i>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// const headingStyle = {
//   color: "green",
//   fontSize: "50px",
// };

// Default properties
Header.defaultProps = {
  branding: "My App",
};
// Header.propTypes = {
//   branding: <propTypes className="string isrequired"></propTypes>,
// };

export default Header;
