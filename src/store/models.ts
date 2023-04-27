import React from "react";
import { Text,View } from "react-native/types";

export interface Favorite{

    Isim:string,
    Satis:string,
    Alis:string
    
}

export interface FavoriteState{
    favorites:Favorite[];
}