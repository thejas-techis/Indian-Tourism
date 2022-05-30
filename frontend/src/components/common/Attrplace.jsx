import Footer from "./Footer";
import Header from "./Header";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
// import Cardwon from "../common/Cardwon";
import { fetchAttractions } from "../../reducks/attractions/operations";
import { getAttractions } from "../../reducks/attractions/selectors";
import { fetchFromLocalStorage } from "../../reducks/favourites/operations";

import Cardattr from "./Cardattr";
const Attrplace = (props) => {
  const parsed = queryString.parse(window.location.search);
  const [search, setSearch] = useState(null);
  const [category, setCategory] = useState(null);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const attractions = getAttractions(selector);

  useEffect(() => {
    dispatch(fetchFromLocalStorage());

    if (parsed.search !== undefined) {
      setSearch(parsed.search);
    }
    if (parsed.category !== undefined) {
      setCategory(parsed.category);
    }
  }, []);
  useEffect(() => {
    if (search != null || category != null) {
      dispatch(fetchAttractions(search, category));
    }
  }, [search, category]);
  //const placeid=props.match.params.id
  const attractionid=props.match.params.id
  return (
    <>
      <Header />
      <section class="section2">
        {/* <div class="gallery">
          <Search />
        </div> */}
        {/* {<div class="heading1">Trips in Ethiopia</div>} */}

          {attractions.map((attraction) => {
            return (
              attraction.id == attractionid &&
            <Cardattr attraction={attraction} />)
        })}
     
      </section>
    
      <Footer />
    </>
  )
  
};

export default Attrplace;
