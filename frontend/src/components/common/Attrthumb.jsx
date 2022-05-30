import React, { useState, useEffect } from "react";
import Imglike from "../../assets/img/heart.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavourite,
  deleteFavourite,
} from "../../reducks/favourites/operations";
import { getFavourites } from "../../reducks/favourites/selectors";

import { push } from "connected-react-router";

const Attrthumb = ({ attraction }) => {
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

  return (
    <>
      <div class="row">
        <div class="image-container">
          <img
            src={attraction.image}
            alt=""
            onClick={() => dispatch(push( "/attrplace/" + attraction.id))}
          />
        </div>
        <div className="subrow">
          <h4>{attraction.name}</h4>
          <p>{attraction.description}</p>
          {
            <img
              id="like"
              src={Imglike}
              onClick={() => {
                setShowLikeButton(!showLikeButton);
                if (showLikeButton) {
                  clickFavourite(attraction);
                } else {
                  dispatch(deleteFavourite(attraction.id));
                }
              }}
              style={{ backgroundColor: showLikeButton ? "white" : "red" }}
              alt=""
            />
          }
          
        </div>
      </div>
    </>
  );
};

export default Attrthumb;
