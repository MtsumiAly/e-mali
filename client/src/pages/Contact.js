import React from 'react';
import{AiOutlineHome,AiOutlineMail} from "react-icons/ai";
import{BiPhoneCall} from "react-icons/bi";
import{BsInfoCircle} from "react-icons/bs";
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import Meta from '../components/Meta';
const Contact = () => {
  return (
    <>
    <Meta title={"Contact Us"}/>
    <BreadCrumb title ="Contacts"/>
    <Container class1="contact-wraper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
          <iframe
            title="google_map" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50719.33621822984!2d39.68441741928084!3d-4.032626486131963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012f227d1296f%3A0xd7c3bf3a7679513f!2sRatna%20Square%20Shopping%20Centre!5e0!3m2!1sen!2ske!4v1678875339581!5m2!1sen!2ske" 
            width="600" 
            height="450" 
            className="border-0 w-100"
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input 
                      type="text" 
                      className="form-control"
                      placeholder="Name">
                     </input>
                  </div>
                  <div>
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Email">         
                    </input>
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      className="form-control"
                      placeholder="Mobile Number">    
                    </input>
                  </div>
                  <div>
                    <textarea 
                      name="" 
                      id="" 
                      className="w-100 form-control" 
                      col="30" 
                      rows="4"
                      placeholder="Comments">                      
                    </textarea>
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get intouch with Us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3">
                      <AiOutlineHome className="fs-5 d-flex align-items-center gap-15"/>
                      <address className="mb-0">
                        Ratna Square Shopping Center
                        <br/>
                        Fidel Odinga Nyali Road,Mombasa.
                      </address>
                    </li>
                    <li className="mb-3">
                      <BiPhoneCall className="fs-5 d-flex align-items-center gap-15"/>
                      <a href="tel:+254728888777">+254728888777</a>
                    </li>
                    <li className="mb-3">
                      <AiOutlineMail className="fs-5 d-flex align-items-center gap-15"/>
                      <a href="maito:emalicare@gmail.com">
                        emalicare@gmail.com
                      </a>
                    </li>
                    <li className="mb-3">
                      <BsInfoCircle className="fs-5 d-flex align-items-center gap-15"/>
                      <p className="mb-0">Monday - Friday 10AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Container>
    </>
  );
};

export default Contact;