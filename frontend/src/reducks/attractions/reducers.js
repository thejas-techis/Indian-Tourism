import * as Actions from './actions'
import  initialState from '../store/initialState'

export const AttractionsReducer = (state = initialState.attractions, action) => {
    switch(action.type) {
        case Actions.ADD_ATTRACTION:
            return {
                ...state,
                list: action.payload
            }
        case Actions.FETCH_ATTRACTION:
            return {
                ...state,
                list: action.payload
            }
        case Actions.DELETE_ATTRACTION:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}