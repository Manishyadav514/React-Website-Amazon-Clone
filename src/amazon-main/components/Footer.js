import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="amazon-footer">
        <div className="amazon-row">
          <div className="amazon-col-box">
            <div className="amazon-col">
              <h4>Get to Know Us</h4>
              <p>About Us</p>
              <p>Careers</p>
              <p>Press Releases</p>
              <p>Amazon Cares</p>
              <p>Gift a Smile</p>
              <p>Amazon Science</p>
            </div>
            <div className="amazon-col">
              <h4>Connect with Us</h4>
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Instagram</p>
            </div>
          </div>
          <div className="amazon-col-box">
            <div className="amazon-col">
              <h4>Make Money with Us</h4>
              <p>Sell on Amazon</p>
              <p>Sell under Amazon Accelerator</p>
              <p>Amazon Global Selling</p>
              <p>Become an Affiliate</p>
              <p>Fulfilment by Amazon</p>
              <p>Advertise Your Products</p>
            </div>
            <div className="amazon-col">
              <h4>Let Us Help You</h4>
              <p>COVID-19 and Amazon</p>
              <p>Your Account</p>
              <p>Returns Centre</p>
              <p>100% Purchase Protection</p>
              <p>Amazon App Download</p>
              <p>Help</p>
            </div>
          </div>
        </div>
      </div>
      <div className="amazon-sub-footer">
        <p>Copyright © 2022 Amazon</p>
      </div>
    </>
  );
};

export default Footer;
