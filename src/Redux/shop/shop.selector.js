import { createSelector } from "reselect";

export const shopSelector = (state)=> state.shop;

export const shopCollectionSelector = createSelector([shopSelector],(shop)=>shop.collection);