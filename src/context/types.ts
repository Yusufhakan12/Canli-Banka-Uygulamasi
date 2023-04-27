import { Crypto } from "../../models/crypto";

export type FavContextState = {
    fav:Crypto [];
    addFav: (name: string) => void;
  };