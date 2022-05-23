import { createSelector } from "reselect";

const attractionsSelector = (state) => state.attractions;

export const getAttractions = createSelector(
    [attractionsSelector],
    state => state.list
);