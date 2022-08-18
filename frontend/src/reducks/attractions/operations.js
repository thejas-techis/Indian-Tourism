import API from "../../API"
import {fetchAttractionsAction, addAttractionAction, deleteAttractionAction} from "./actions";

const api = new API();

export const fetchAttractions = (search, category) => {
    return async (dispatch) => {
        return api.getAttractions(search, category)
            .then((attractions) => {
                dispatch(fetchAttractionsAction(attractions))
            }).catch((error) => {
                alert("Failed to connect API: /attractions/")
            })
    }
}

export const deleteAttraction = (id) => {
    return async (dispatch, getState) => {
        return api.deleteAttraction(id)
            .then((response) => {
                const prevAttractions = getState().attractions.list
                const nextAttractions = prevAttractions.filter(attraction => attraction.id !== id)
                dispatch(deleteAttractionAction(nextAttractions))
            }).catch((error) => {
                alert("Failed to connect API to delete a attraction")
                console.log(error);
            })
   }
}

export const addAttraction = (name, body, image) => {
    return async (dispatch, getState) => {
        // Validation
        if (name === "" || body === "") {
            alert("Please fill out name and body.")
            return false
        }

        return api.addAttraction(name, body, image)
            .then((attraction) => {
                const prevAttractions = getState().attractions.list
                const nextAttractions = [attraction, ...prevAttractions]
                dispatch(addAttractionAction(nextAttractions))
            }).catch((error) => {
                alert("Failed to connect API to add a attraction")
                console.log(error);
            })
   }
}
