import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Categorycard from '../components/common/Categorycard';
import { getAttractions } from '../reducks/attractions/selectors';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Map from '../components/common/Map';
import Search from '../components/common/Search';
import { fetchPlaces } from '../reducks/places/operations';
import { getPlaces } from '../reducks/places/selectors';
import { fetchAttractions } from '../reducks/attractions/operations';
import queryString from "query-string";
import { fetchFromLocalStorage } from '../reducks/favourites/operations';





function Detailsattr() {
 const parsed = queryString.parse(window.location.search);
 const [search, setSearch] = useState(null);
 const [category, setCategory] = useState(null);
 const dispatch = useDispatch();
 const selector = useSelector((state) => state);
 const attractions = getAttractions(selector);
 console.log(attractions);
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
  return (
    <>
      <Header />
      <section class="section2">
        <div class="gallery">
          <Search />
        </div>
        <div class="heading1">Trips in India</div>
        <div class="grid">
        {attractions.map((attraction) => (
              <Categorycard place={attraction} />
              
            ))}
        </div>
      </section>
      

      <Footer />
    </>
  );
}

export default Detailsattr