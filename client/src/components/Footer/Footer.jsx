import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaEnvelope, FaMobileAlt } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="col">
            <div className="title">Aboute</div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              animi saepe reprehenderit, deleniti dicta non doloribus nobis quam
              nemo perspiciatis autem sequi ducimus cupiditate minima odio amet
              quod aliquid impedit.
            </div>
          </div>
          <div className="col">
            <div className="title">address</div>
            <div className="c-item">
              <FaLocationArrow />
              <div className="text">
                Gokol Park Socity,TB Road, Vijapur ,Mahesana,Gujrat ,India
              </div>
            </div>
            <div className="title">Contect</div>
            <div className="c-item">
              <FaMobileAlt />
              <div className="text">Phone:0000 000 000</div>
            </div>
            <div className="title">Mail</div>
            <div className="c-item">
              <FaEnvelope />
              <div className="text">Email:deeppjp1656@gmail.com</div>
            </div>
          </div>
          <div className="col">
            <div className="title">Categories</div>
            <span className="text">HeadPhones</span>
            <span className="text">Smart Watches</span>
            <span className="text">Bluetooth Speakers</span>
            <span className="text">Wireless Earburds</span>
            <span className="text">Home Theatre</span>
            <span className="text">PRojectors </span>
          </div>
          <div className="col">
            <div className="title">Pages</div>
            <span className="text">Home</span>
            <span className="text">Aboute</span>
            <span className="text">Privacy Policy</span>
            <span className="text">Returns</span>
            <span className="text">Term & Conditions</span>
            <span className="text">Contact Us</span>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="bottom-bar-content">
            <div className="text">
              This Web Site create By Deep. This Web site is my first web Site
            </div>
            <img src={Payment} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
