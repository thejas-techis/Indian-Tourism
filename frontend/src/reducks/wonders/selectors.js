import { createSelector } from "reselect";

const wondersSelector = (state) => state.wonders;

export const getWonders = createSelector(
    [wondersSelector],
    state => state.list
);
