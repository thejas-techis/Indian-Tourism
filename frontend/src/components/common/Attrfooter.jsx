import React from "react";

const Footer1 = ({ img }) => {
  return (
    
    <>
      <footer1 class="footer1">
        <div class="pairs">
          <div class="links">
            <p id="quicklink">Quick Links</p>
            <p>
              <a href="/">Home</a>
            </p>
            <p>
              <a href="/">Things to do</a>
            </p>
            <p>
              <a href="/preview">Tourist Attraction</a>
            </p>
            <p>
              <a href="/favorite">Favorite</a>
            </p>
          </div>
          <div class="address">
            <p id="addr">Address</p>
            <p>Head Office, Ministry of Tourism</p>
            <p>Transport Bhavan, Parliament Street</p>
            <p>New Delhi - 110001</p>
            <p>+91-011 23311237</p>
            <p>info.mot@gov.in</p>
          </div>
        </div>
        <div class="subscribe">
          <p>Subscribe to our newletter</p>
          <div class="submit">
            <input
              type="email"
              placeholder="your email"
              name="email"
              id="email"
            />
            <button>v</button>
          </div>
        </div>
      </footer1>
      <hr />
      <div class="copyright1">
        <p>Techis.io©All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer1;
