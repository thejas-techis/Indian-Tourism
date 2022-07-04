import React, { useEffect, useState } from "react";
import { addFavourite } from "../../reducks/favourites/operations";
import { getFavourites } from "../../reducks/favourites/selectors";
import { useSelector, useDispatch } from "react-redux";
import map from "../../assets/img/MAP123.png";
import mapicon from "../../assets/img/mapicon.svg";

const Cardattr = ({ attraction }) => {
  const dispatch = useDispatch();
  const clickFavourite = (attraction) => {
    dispatch(addFavourite(attraction));
  };
  
  const selector = useSelector((state) => state);
  const favourites = getFavourites(selector);
  const [showLikeButton, setShowLikeButton] = useState(true);
  useEffect(() => {
    let favoriteAttraction = favourites.filter(
      (favourite) => favourite.id == attraction.id
    );
    if (favoriteAttraction.length > 0) {
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
          src={attraction.image}
          alt=""
          id="aboutimage"/>

        <section className="details">
          <h3>{attraction.name}</h3>
          <p>{attraction.description}</p><br />
          <h5>{attraction.time_to_travel}</h5>
        </section>
        <section class="location">
          <div class="map">
            <img src={map} alt="" />
          </div>
          <div class="mapimage">
            <a target="_blank" href={attraction.googel_map_link}>
              <img src={mapicon} alt="" class="src" />
            </a>
          </div>
        </section>
      </section>
    </>
  );
};

export default Cardattr;
