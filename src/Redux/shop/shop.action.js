import ShopActionType from "./shop.type";
export const Shop_Action = (collection)=>({
    type:ShopActionType.UPDATE_COLLECTIONS,
    payload:collection
})