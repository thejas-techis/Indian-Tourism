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
import Wondersplace from "./components/common/Wondersplace"; 
import Attrplace from "./components/common/Attrplace";
import Detailswonders from "./containers/Detailswonders";
import Detailsattr from "./containers/Detailsattr";

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
        <Route exact path={"/wondersplace/:id"} component={Wondersplace} />
        <Route exact path={"/attrplace/:id"} component={Attrplace} />
        <Route exact path={"/detailswonders"} component={Detailswonders} />
        <Route exact path={"/detailsattr"} component={Detailsattr} />
      </Switch>
    </>
  );
};
export default Router;
