import { userActionType } from "./user.type";
const Initial_State = {
    currentUser : null
}

const userReducer = (state = Initial_State,action) =>{
    switch(action.type){
        case userActionType.SET_CURRENT_USER :
            return {
                ...state,
                currentUser : action.payload
            };
        
        default:
            return state;
    }

}
export default userReducer;