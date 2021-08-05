import { createSelector } from "reselect";

export const shopSelector = (state)=> state.shop;

export const shopCollectionSelector = createSelector([shopSelector],(shop)=>shop.collection);
export const selectCollectionPreview = createSelector([shopCollectionSelector],collection=> Object.keys(collection).map(keys=> collection[keys]));

export const CollectionSelector = (CollectionCategoryUrlParam) => createSelector([shopCollectionSelector],
        collection => collection[CollectionCategoryUrlParam]
    );