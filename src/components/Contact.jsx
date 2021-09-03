import React from "react";
import { Facebook, Linkedin, EnvelopeOpenFill } from "react-bootstrap-icons";
import "../sass/components/Contact.scss";



function Contact() {
   return (
    <div id="contact">
      <div className="theme-darker">
        <div className="container inner-content">
          <div className="experience row pt-lg-4">
            <h1 className="font-header">contact.</h1>
            <h3 className="text-center charcoal px-5">
              “Invisible threads are the strongest ties.”
              <br />- Friedrich Nietzsche
            </h3>
            <hr className="my-4" />
            <div className="d-flex justify-content-center social row my-5">
              <div className="col-lg-9 col-md-12 col-sm-6 col-xs-9 mx-auto">
                <div className="row">
                  <div className="text-nowrap col-lg-4 col-md-4 col-sm-12 py-2">
                    <a href="mailto:lcebido@gmail.com?subject = FeedbackWebsite&body = Message">
                      <EnvelopeOpenFill color="#FFF" size={40} />{" "}
                      <span>lcebido@gmail.com</span>
                    </a>
                  </div>

                  <div className="text-nowrap col-lg-4 col-md-4 col-sm-12 py-2">
                    <a
                      href="https://www.linkedin.com/in/lcebido"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin color="#FFF" size={40} />
                      <span>www.linkedin.com/in/lcebido/</span>
                    </a>
                  </div>
                  <div className="text-nowrap col-lg-4 col-md-4 col-sm-12 py-2">
                    <a
                      href="https://www.facebook.com/lcebido"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook color="#FFF" size={40} />
                      <span>www.facebook.com/lcebido</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-4" />
          </div>
        </div>
        <div className="copyright text-center py-4 charcoal">
          LOUIE CEBIDO &#169; 2021
        </div>
      </div>
    </div>
  );
}

export default Contact;
