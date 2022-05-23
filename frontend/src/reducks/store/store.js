import { 
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import {connectRouter, routerMiddleware} from "connected-react-router";
import thunk from 'redux-thunk';

import {PostsReducer} from '../posts/reducers';
import { PlacesReducer } from '../places/reducers';
import { CategoriesReducer } from '../categories/reducers';
import { FavourotesReducer } from '../favourites/reducers';
import { WondersReducer } from '../wonders/reducers';
import {AttractionsReducer } from '../attractions/reducers'
export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            places:PlacesReducer,
            categories:CategoriesReducer,
            favourites: FavourotesReducer,
            wonders: WondersReducer,
            attractions: AttractionsReducer,
       }),
       compose(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        ),
        // DEBUG MODE
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
       )
    )
}