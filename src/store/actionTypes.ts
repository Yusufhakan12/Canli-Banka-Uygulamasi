import { Favorite } from "./models";
export  const ADD_FAVORİTE='ADD_FAVORİTE';
export const REMOVE_FAVORİTE='REMOVE_FAVORİTE';

interface AddFavoriteAction{
    type:typeof ADD_FAVORİTE;
    payload:Favorite;
}



export type FavoriteActionsTypes=AddFavoriteAction;