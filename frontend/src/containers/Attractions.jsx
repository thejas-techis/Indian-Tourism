import React from "react";
import Attrhead from "../components/common/Attrhead";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAttractions } from "../reducks/attractions/selectors";
import { useEffect } from "react";
import { fetchFromLocalStorage } from "../reducks/favourites/operations";
import { getCategories } from "../reducks/categories/selectors";
import { fetchCategories } from "../reducks/categories/operations";
import Search from "../components/common/Search";
import way from '../assets/img/wavyblue.svg';
import ImgSearchicon from "../assets/img/searchicon.png";
import Imgbackground from "../assets/img/attraction.jpg";
import Footer1 from "../components/common/Attrfooter";
import WonCard from "../components/common/Wonthumb";
import Wonthumb from "../components/common/Wonthumb";
import queryString from "query-string";
import {fetchAttractions } from "../reducks/attractions/operations";
import Attrthumb from "../components/common/Attrthumb";

const Attractions = (props) => {

    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const attractions = getAttractions(selector);
    
    useEffect(() => {
      dispatch(fetchAttractions());
      // dispatch(fetchFromLocalStorage());
    }, []);
    

return (
    <>
    <Attrhead/>
    <section className="firstpage">
        <h1>Tourist Attraction</h1>
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
          <p>Tourist Attractions Of India</p>
          <img src={way} alt="" />
        </div>

        <section class="grid">
        {attractions.map((attraction) => (
              <Attrthumb attraction={attraction} />
              
            ))}
      </section>
        <Footer1 />
    </>
);
};

export default Attractions