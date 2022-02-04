// Libraries
import React from "react";

// Style

export default function Footer(props) {
  return (
    <React.Fragment>
      <footer className="footer">
        <ul className="footer-items">
          <li className="footer-item">
            <a className="contact-us" href="#/">
              Project Repository
            </a>
          </li>
          <li className="footer-item">
            <lu className="developers">
              <li className="developer">
                <a href="https://github.com/">Jose</a>
              </li>
              <li className="developer">
                <a href="https://github.com/">Nicolas</a>
              </li>
            </lu>
          </li>
          <li className="footer-item"></li>
        </ul>
      </footer>
    </React.Fragment>
  );
}
