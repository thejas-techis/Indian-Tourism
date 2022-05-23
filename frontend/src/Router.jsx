import React from "react";
import { Route, Switch } from "react-router";
import Map from "./components/common/Map";
import Details from "./containers/Details";
import Favourites from "./containers/Favourites";
import Home from "./containers/Home";
import Places from "./containers/Places";
import Preview from "./containers/Preview";
import Wonders from "./containers/Wonders";
import Attractions from "./containers/Attractions";
 


const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/favourites"} component={Favourites} />
        <Route exact path={"/places/:id"} component={Places} />
        <Route exact path={"/preview/:id"} component={Preview} />
        <Route exact path={"/details"} component={Details} />
        <Route exact path={"/wonders"} component={Wonders} />
        <Route exact path={"/attractions"} component={Attractions} />
        
      </Switch>
    </>
  );
};
export default Router;
