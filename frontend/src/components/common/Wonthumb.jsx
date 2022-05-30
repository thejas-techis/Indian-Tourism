import React, { useState, useEffect } from "react";
import Imglike from "../../assets/img/heart.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavourite,
  deleteFavourite,
} from "../../reducks/favourites/operations";
import { getFavourites } from "../../reducks/favourites/selectors";
// import wondersplace from "../common/Wondersplace";
import { push } from "connected-react-router";

const Wonthumb = ({ wonder }) => {
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

  return (
    <>
      <div class="row">
        <div class="image-container">
          <img
            src={wonder.image}
            alt=""
            onClick={() => dispatch(push( "/wondersplace/" + wonder.id))}
          />
        </div>
        <div className="subrow">
          <h4>{wonder.name}</h4>
          <p>{wonder.description}</p>
          {
            <img
              id="like"
              src={Imglike}
              onClick={() => {
                setShowLikeButton(!showLikeButton);
                if (showLikeButton) {
                  clickFavourite(wonder);
                } else {
                  dispatch(deleteFavourite(wonder.id));
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

export default Wonthumb;
