import Footer from "./Footer";
import Header from "./Header";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
// import Cardwon from "../common/Cardwon";
import { fetchWonders } from "../../reducks/wonders/operations";
import { getWonders } from "../../reducks/wonders/selectors";
import { fetchFromLocalStorage } from "../../reducks/favourites/operations";

import Cardwon from "./Cardwon";
const Wondersplace = (props) => {
  const parsed = queryString.parse(window.location.search);
  const [search, setSearch] = useState(null);
  const [category, setCategory] = useState(null);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const wonders = getWonders(selector);

  

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
      dispatch(fetchWonders(search, category));
    }
  }, [search, category]);
  //const placeid=props.match.params.id
  const wonderid=props.match.params.id
  return (
    <>
      <Header />
      {console.log("sdfghjkhgfdsa", wonders)}
      <section class="section2">
        {/* <div class="gallery">
          <Search />
        </div> */}
        {/* {<div class="heading1">Trips in Ethiopia</div>} */}

          {wonders.map((wonder) => {
            return (
              wonder.id == wonderid &&
            <Cardwon wonder={wonder} />)
        })}
     
      </section>
    
      <Footer />
    </>
  )
  
};

export default Wondersplace;
