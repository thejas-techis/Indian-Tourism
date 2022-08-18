import API from "../../API";
import { fetchPlacesAction} from "./actions";
import { fetchAttractionsAction } from "../attractions/actions";
import { fetchWondersAction } from "../wonders/actions";


const api = new API();

export const fetchPlaces = (search, category) => {
  return async (dispatch) => {
    const api_places =  api
      .getPlaces(search, category)
      .then((places) => {
        dispatch(fetchPlacesAction(places));
      })
      .catch((error) => {
        alert("Failed to connect API: /places/");
      });
      const api_wonders =  api
      .getWonders(search, category)
      .then((places) => {
        dispatch(fetchWondersAction(places));
      })
      .catch((error) => {
        alert("Failed to connect API: /places/");
      });
      const api_attrs =  api
      .getAttractions(search, category)
      .then((places) => {
        dispatch(fetchAttractionsAction(places));
      })
      .catch((error) => {
        alert("Failed to connect API: /places/");
      });
    
    return {...api_attrs,...api_places,...api_wonders};
  };
};