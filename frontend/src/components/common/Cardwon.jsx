import React, { useEffect, useState } from "react";
import { addFavourite } from "../../reducks/favourites/operations";
import { getFavourites } from "../../reducks/favourites/selectors";
import { useSelector, useDispatch } from "react-redux";
import map from "../../assets/img/MAP123.png";
import mapicon from "../../assets/img/mapicon.svg";

const Cardwon = ({ wonder }) => {
  const dispatch = useDispatch();
  const clickFavourite = (wonder) => {
    dispatch(addFavourite(wonder));
  };
  
  const selector = useSelector((state) => state);
  const favourites = getFavourites(selector);
  const [showLikeButton, setShowLikeButton] = useState(true);
  useEffect(() => {
    let favoriteWonder = favourites.filter(
      (favourite) => favourite.id == wonder.id
    );
    if (favoriteWonder.length > 0) {
      setShowLikeButton(false);
    }
  }, [favourites]);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      <section class="firstpage">
        <img
          src={wonder.image}
          alt=""
          id="aboutimage"/>

        <section className="details">
          <h3>{wonder.name}</h3>
          <p>{wonder.description}</p><br />
          <h5>By Air:   {wonder.time_to_travel1}</h5>
          <h5>By Rail:   {wonder.time_to_travel2}</h5>
          <h5>By Road:   {wonder.time_to_travel3}</h5>
        </section>
        <section class="location">
          <div class="map">
            <img src={map} alt="" />
          </div>
          <div class="mapimage">
            <a target="_blank" href={wonder.googel_map_link}>
              <img src={mapicon} alt="" class="src" />
            </a>
          </div>
        </section>
      </section>
    </>
  );
};

export default Cardwon;
