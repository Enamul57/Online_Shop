import SHOP_DATA from "../../Pages/Shop/shop_data"
const INITIAL_STATE = {
    collection : SHOP_DATA
}

const ShopReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        default:
            return state;
    }
}
export default ShopReducer;