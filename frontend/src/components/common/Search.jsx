import React, { useState } from "react";
import Imgsearch from "../../assets/img/searchicon.png";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState();

  const inputSearch = (event) => {
    setSearch(event.target.value);
  };

  const submitAction = () => {
    let add = window.location.pathname;
    if (add === "/") {
      add = "details";
    }
    if (add === "/wonders") {
      add = "detailswonders";
    }
    if (add === "/attractions") {
      add = "detailsattr";
    }
    dispatch(push("/" + add + "?search=" + search));
  };

  return (
    <form onSubmit={submitAction}>
      <input
        name="search"
        type="inputbox"
        onChange={inputSearch}
        placeholder="Search for destination"
      />
      <a onclick={() => console.log("test")}>
        <img
          className="search"
          onClick={() => {
            alert("test");
          }}
          src={Imgsearch}
          alt=""
        />
      </a>
    </form>
  );
};

export default Search;
