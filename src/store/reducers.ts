import { FavoriteState } from "./models";
import { FavoriteActionsTypes,ADD_FAVORİTE } from "./actionTypes";
const initialState:FavoriteState={
    favorites:[],
};

export function favoriteReducer(
   state=initialState,
    action:FavoriteActionsTypes,
):FavoriteState {
    switch (action.type) {
        case ADD_FAVORİTE:
            return {
                favorites:[...state.favorites,action.payload]
            };
            
    
        default:
            return state;
    }
}

