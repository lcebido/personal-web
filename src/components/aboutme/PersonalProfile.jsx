import React from "react";

function PersonalProfile() {
  return (
    <div className="container-subsection">
      <div className="container content">
        <div className="row">
          <div className="col">
            <h1 className="font-pattaya">about.</h1>
            <h2>I'm a Software Engineer based in Rizal, Philippines.</h2>
            <p>
              I enjoy turning complex code into simple, cleaner, reusable and
              more readable.
            </p>
          </div>
          <div className="col">
            <img
              className="inline-photo"
              src="https://picsum.photos/590/440"
              alt="Logo"
            />
          </div>
          <div className="col-lg-12">
            Got inspired? Copied the theme? Or do you just like the website? No
            problem, just buy me a beer and make me happy!
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalProfile;
