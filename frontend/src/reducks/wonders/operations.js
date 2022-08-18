import API from "../../API"
import {fetchWondersAction, addWonderAction, deleteWonderAction} from "./actions";

const api = new API();

export const fetchWonders = (search, category) => {
    return async (dispatch) => {
        return api.getWonders(search, category)
            .then((wonders) => {
                dispatch(fetchWondersAction(wonders))
            }).catch((error) => {
                alert("Failed to connect API: /wonders/")
            })
    }
}

export const deleteWonder = (id) => {
    return async (dispatch, getState) => {
        return api.deleteWonder(id)
            .then((response) => {
                const prevWonders = getState().wonders.list
                const nextWonders = prevWonders.filter(wonder => wonder.id !== id)
                dispatch(deleteWonderAction(nextWonders))
            }).catch((error) => {
                alert("Failed to connect API to delete a wonder")
                console.log(error);
            })
   }
}

export const addWonder = (name, body, image) => {
    return async (dispatch, getState) => {
        // Validation
        if (name === "" || body === "") {
            alert("Please fill out name and body.")
            return false
        }

        return api.addWonder(name, body, image)
            .then((wonder) => {
                const prevWonders = getState().wonders.list
                const nextWonders = [wonder, ...prevWonders]
                dispatch(addWonderAction(nextWonders))
            }).catch((error) => {
                alert("Failed to connect API to add a wonder")
                console.log(error);
            })
   }
}
