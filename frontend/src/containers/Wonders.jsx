import React from "react";
import Wonhead from "../components/common/Wonhead";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getWonders } from "../reducks/wonders/selectors";
import { useEffect } from "react";
import { fetchFromLocalStorage } from "../reducks/favourites/operations";
import { getCategories } from "../reducks/categories/selectors";
import { fetchCategories } from "../reducks/categories/operations";
import Search from "../components/common/Search";
import way from '../assets/img/wavyblue.svg';
import ImgSearchicon from "../assets/img/searchicon.png";
import Imgbackground from "../assets/img/wonders.png";
import Footer from "../components/common/Footer";
import WonCard from "../components/common/Wonthumb";
import Wonthumb from "../components/common/Wonthumb";
import queryString from "query-string";
import {fetchWonders } from "../reducks/wonders/operations"

const Wonders = (props) => {

    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const wonders = getWonders(selector);
    
    useEffect(() => {
      dispatch(fetchWonders());
      //dispatch(fetchFromLocalStorage());

    }, []);
    

return (
    <>
    <Wonhead/>
    <section className="firstpage">
        <h1>Wonders</h1>
      </section> 
      <section class="firstpage">
         <div className="background">
          <img src={Imgbackground} alt="" />
        </div> 

        <div className="shade"></div>
        <div className="input">
          <p id="maincap">Happiest place on Earth!</p>
          <Search img={ImgSearchicon} />
        </div>
        </section> 
      
        <div class="heading123">
          <p>Seven Wonders Of India</p>
          <img src={way} alt="" />
        </div>

        <section class="grid">
        {wonders.map((wonder) => (
              <Wonthumb wonder={wonder} />
              
            ))}
      
      </section>
        <Footer />
    </>
);
};

export default Wonders