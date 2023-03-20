import React from 'react';
import { Link } from 'react-router-dom';
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram} from 'react-icons/bs';
const Footer = () => {
  return (
    // The first child element
     <>
    <footer className="py-4">
    <div className="container-xxl">
      <div className="row align-items-center">
        <div className="col-5">
          <div className="footer-top-data d-flex gap-30 align-items-center">
            <div>
              <img src='/images/newsletter.png' alt='newsletter' style={{marginRight: '10px'}}/>
            </div>
            <div>
              <h2 className="mb-0 text-white">Sign Up for Newsletter.</h2>
            </div>
          </div>
        </div>
        <div className="col-7 d-flex justify-content-center">
          <div className="input-group" style={{width: '500px', margin: '0 auto'}}>
              <input
                type="text"
                className="form-control py-1"
                placeholder="Email Address"
                aria-label="Email Address"
                aria-describedby="basic-addon2"
                />
              <span className="input-group-text p-2" id="basic-addon2">
                Subscribe
              </span>
          </div>
        </div>
      </div>
    </div>
    </footer>
    <footer className="py-4">
      <div className="container-xxl">
           <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Nairobi, Links Road, Yaya Center<br/>E-mali Mall<br/>
                  Postal Code: 7771189-80100
                </address>
                <a href="tel:+254728888777"
                  className="mt-3 d-block mb-1 text-white">
                  +254728888777
                </a>
                <a href="mail to:e-malicare@gmail.com"
                  className="mt-2 d-block mb-0 text-white">
                  e-malicare@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="#">
                    <BsLinkedin className="fs-4"/>
                  </a>
                  <a className="text-white" href="#">
                    <BsInstagram className="fs-4"/>
                  </a>
                  <a className="text-white" href="#">
                    <BsGithub className="fs-4"/>
                  </a>
                  <a className="text-white" href="#">
                    <BsYoutube className="fs-4"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
                {/*Align the div in column---footer-link  */}
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/terms-conditions" className="text-white py-2 mb-1">
                  Terms & Conditions
                </Link>
                <Link to="/blog"className="text-white py-2 mb-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
                {/*Align the div in column---footer-link  */}
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
                <Link className="text-white py-2 mb-1">e-mali Care</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
                {/*Align the div in column---footer-link  */}
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Acne Treatments</Link>
                <Link className="text-white py-2 mb-1">Cleansers</Link>
                <Link className="text-white py-2 mb-1">Shampoos</Link>
                <Link className="text-white py-2 mb-1">Hair Treatment</Link>
              </div>
            </div>
           </div>
      </div>
    </footer>
    <footer className="py-4">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <p className="text-center mb-0 text-white">
            &copy;{new Date().getFullYear()} Powered by e-Mali{""}
          </p>
        </div>
      </div>
    </div>
    </footer>
    </>
  );
};

export default Footer;
