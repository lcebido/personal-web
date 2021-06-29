import React from "react";
import SlideBar from "./SlideBar"
import { Download } from "react-bootstrap-icons";

function PersonalProfile() {
  return (
    <div className="container inner-content">
      <div className="profile row my-lg-3">
        <div className="profile-container profile-inner col-lg-6">
          <h1 className="font-pattaya">about.</h1>
          <h2 className="charcoal mb-3">
            I'm a Software Engineer based in Rizal, Philippines.
          </h2>
          <p>
            I enjoy turning complex code into simple, cleaner, reusable and more
            readable. I might look intimidating, but I'm more approachable than
            you think.
          </p>
          <div className="button-container">
            <button>
            <a href="/pdf/Louie_Cebido-CV.pdf" target="_blank" rel="noopener noreferrer"><Download />&nbsp;&nbsp; .pdf version</a>
            </button>
          </div>
        </div>
        <div className="image-container profile-inner text-center col-lg-6 mb-sm-5">
          <img
            className="inline-photo img-fluid"
            src="/images/image-1.png"
            alt="Logo"
          />
        </div>
      </div>
        <SlideBar />
        <div className='clearfix my-4'></div>
    </div>
  );
}

export default PersonalProfile;
