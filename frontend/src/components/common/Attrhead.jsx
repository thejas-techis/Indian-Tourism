import React, { useState } from "react";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import ImgLogo from "../../assets/img/logo.svg";
import listicon from "../../assets/img/listicon.svg";
import imgindia from "../../assets/img/imgindia.png"

const Wonhead = () => {
  const dispatch = useDispatch();
  const [color,setColor]=useState('black')
  
  return (
    <>
      <header>
        <nav>
          <div class="logo">
            <img src={imgindia} alt="" />
          </div>
          <div class="navbar">
            <p>
              <a href="/" id="nick">
                HOME
              </a>
            </p>
            <p onClick={() => dispatch(push("/wonders"))}>
              <a >WONDERS IN INDIA</a>
            </p>
            <p onClick={() => dispatch(push("/attractions"))}>
              <a id='attr'>TOURIST ATTRACTION</a>
            </p>
            <p onClick={() => dispatch(push("/favourites"))}>
              <a >FAVOURITE</a>
            </p>
          </div>
          <div class="list">
            <img src={listicon} alt="" id="listicon" />
          </div>
        </nav>
      </header>
      <script
        src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
        crossorigin="anonymous"
      ></script>
   
    </>
  );
};

export default Wonhead;