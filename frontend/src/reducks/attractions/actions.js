export const ADD_ATTRACTION = "ADD_ATTRACTION";
export const addAttractionAction = (attractions) => {
    return {
        type: "ADD_ATTRACTION",
        payload: attractions
    }
}
export const FETCH_ATTRACTION = "FETCH_ATTRACTION";
export const fetchAttractionsAction = (attractions) => {
    return {
        type: "FETCH_ATTRACTION",
        payload: attractions
    }
}
export const DELETE_ATTRACTION = "DELETE_ATTRACTION";
export const deleteAttractionAction = (attractions) => {
    return {
        type: "DELETE_ATTRACTION",
        payload: attractions
    }
}
