export const ADD_WONDER = "ADD_WONDER";
export const addWonderAction = (wonders) => {
    return {
        type: "ADD_WONDER",
        payload: wonders
    }
}
export const FETCH_WONDER = "FETCH_WONDER";
export const fetchWondersAction = (wonders) => {
    return {
        type: "FETCH_WONDER",
        payload: wonders
    }
}
export const DELETE_WONDER = "DELETE_WONDER";
export const deleteWonderAction = (wonders) => {
    return {
        type: "DELETE_WONDER",
        payload: wonders
    }
}
