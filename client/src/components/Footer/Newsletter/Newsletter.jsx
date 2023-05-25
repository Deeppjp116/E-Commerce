import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">NewsLetter</span>
        <span className="big-text"> Sing Up for letest Updata offers</span>
        <div className="form">
          <input type="text" placeholder="Email Addrese" />
          <button>🤠$ubscribe🤠</button>
        </div>
        <div className="text">
          will be used in according with our Privacy Policy
        </div>
        <div className="social-icons">
          <div className="icon">
            <FaFacebookF size={14} />
          </div>
          <div className="icon">
            <FaTwitter size={14} />
          </div>
          <div className="icon">
            <FaInstagram size={14} />
          </div>
          <div className="icon">
            <FaLinkedin size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
