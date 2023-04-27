import { Favorite } from "./models";
import { FavoriteActionsTypes,ADD_FAVORİTE } from "./actionTypes";

 export function addFavorite(newFavorite:Favorite):
 FavoriteActionsTypes{
    return{
        type:ADD_FAVORİTE,
        payload:newFavorite
    };
 };