import { createContext,useState } from "react";
import { FavContextState } from "./types";
import { Crypto } from "../../models/crypto";



const favoriteContextDefaultValues:FavContextState={
    fav:[],
    addFav:()=>{}
};
export const favoriteContext=createContext<FavContextState>(
    favoriteContextDefaultValues
);

const favoriteProvider=({children}:{children:any})=>{
    const [fav,setFav]=useState<any[]>(favoriteContextDefaultValues.fav);
    const addFav=(newFav:String)=>setFav((fav)=>[...fav,newFav]);
    
    return(
        <favoriteContext.Provider value={{fav,addFav}}>{children}</favoriteContext.Provider>
    );
    
}
export default favoriteProvider;

