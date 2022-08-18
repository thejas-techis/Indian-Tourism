import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Categorycard from '../components/common/Categorycard';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Map from '../components/common/Map';
import Search from '../components/common/Search';
import { fetchPlaces } from '../reducks/places/operations';
import { getPlaces } from '../reducks/places/selectors';
import queryString from "query-string";
import { fetchFromLocalStorage } from '../reducks/favourites/operations';
import { getAttractions } from '../reducks/attractions/selectors';
import { getWonders } from '../reducks/wonders/selectors';
import { fetchAttractions } from '../reducks/attractions/operations';
import { fetchWonders } from '../reducks/wonders/operations';




function Details() {
 const parsed = queryString.parse(window.location.search);
 const [search, setSearch] = useState(null);
 const [category, setCategory] = useState(null);
 const dispatch = useDispatch();
 const selector = useSelector((state) => state);
 const places = getPlaces(selector);
 const attrs = getAttractions(selector);
 const wonders = getWonders(selector);
 console.log(places);
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
     dispatch(fetchPlaces(search, category));
     dispatch(fetchAttractions(search, category));
     dispatch(fetchWonders(search, category));
   }
 }, [search, category]);
  return (
    <>
      <Header />
      <section class="section2">
        <div class="gallery">
          <Search />
        </div>
        <div class="heading1">Trips in India</div>
        <div class="grid">
          {places.map((place) => (
            <Categorycard place={place} />
          ))}
        </div>
      </section>
      

      <Footer />
    </>
  );
}

export default Details