import SHOP_DATA from "../../Pages/Shop/shop_data"
import ShopActionType from "./shop.type";
const INITIAL_STATE = {
    collection : SHOP_DATA
}

const ShopReducer = (state = INITIAL_STATE,action) => {
    
    switch(action.type){
        case ShopActionType.UPDATE_COLLECTIONS:
            return{
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
}
export default ShopReducer;