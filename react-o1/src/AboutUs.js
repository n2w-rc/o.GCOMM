import React from 'react';

function AboutUs() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-8">
          <h2>About Us</h2>
          <p>This is the main content for the About Us page. You can add detailed information about your organization here.</p>
          
          <h3 className="mt-5">Our Mission</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <h3 className="mt-5">Our Vision</h3>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <h3 className="mt-5">Our Team</h3>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title"><i>Table of Contents</i></h5>
              <ul className="list-unstyled">
                <li><a href="#">Our Mission</a></li>
                <li><a href="#">Our Vision</a></li>
                <li><a href="#">Our Team</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
