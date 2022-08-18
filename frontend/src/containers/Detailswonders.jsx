// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import Categorycard from '../components/common/Categorycard';
// import Wonthumb from '../components/common/Wonthumb';
// import Footer from '../components/common/Footer';
// import Header from '../components/common/Header';
// import Map from '../components/common/Map';
// import Search from '../components/common/Search';
// import { fetchPlaces } from '../reducks/places/operations';
// import { getWonders } from '../reducks/wonders/selectors';
// import queryString from "query-string";
// import { fetchFromLocalStorage } from '../reducks/favourites/operations';




// function Detailswonders() {
//  const parsed = queryString.parse(window.location.search);
//  const [search, setSearch] = useState(null);
//  const [category, setCategory] = useState(null);
//  const dispatch = useDispatch();
//  const selector = useSelector((state) => state);
//  const wonders = getWonders(selector);
//  console.log(wonders);
//  useEffect(() => {
//    dispatch(fetchFromLocalStorage());

//    if (parsed.search !== undefined) {
//      setSearch(parsed.search);
//    }
//    if (parsed.category !== undefined) {
//      setCategory(parsed.category);
//    }
//  }, []);
//  useEffect(() => {
//    if (search != null || category != null) {
//      dispatch(fetchPlaces(search, category));
//    }
//  }, [search, category]);
//   return (
//     <>
//       <Header />
//       <section class="section2">
//         <div class="gallery">
//           <Search />
//         </div>
//         <div class="heading1">Trips in India</div>
//         <div class="grid">
          
//             {wonders.map((wonder) => (
//               <Wonthumb wonder={wonder} />
//             ))}
//         </div>
//       </section>
      

//       <Footer />
//     </>
//   );
// }

// export default Detailswonders


import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Categorycard from '../components/common/Categorycard';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Map from '../components/common/Map';
import Search from '../components/common/Search';
import { fetchPlaces } from '../reducks/places/operations';
import queryString from "query-string";
import { fetchFromLocalStorage } from '../reducks/favourites/operations';
import { getWonders } from '../reducks/wonders/selectors';
import { fetchWonders } from '../reducks/wonders/operations';




function Detailswonders() {
 const parsed = queryString.parse(window.location.search);
 const [search, setSearch] = useState(null);
 const [category, setCategory] = useState(null);
 const dispatch = useDispatch();
 const selector = useSelector((state) => state);
 const wonders = getWonders(selector);
 console.log("wonders", wonders);
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
  return (
    <>
      <Header />
      <section class="section2">
        <div class="gallery">
          <Search />
        </div>
        <div class="heading1">Wonders in india</div>
        <div class="grid">
          {wonders.map((wonder) => (
            
            <Categorycard place={wonder} />
          ))}
        </div>
      </section>
      

      <Footer />
    </>
  );
}

export default Detailswonders