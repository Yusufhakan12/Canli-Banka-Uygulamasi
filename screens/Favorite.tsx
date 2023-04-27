import React from "react";
import {Text, View, Pressable, StyleSheet, useAnimatedValue, AppState} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {Crypto} from "../models/crypto";
import {FlatList} from "react-native/Libraries/Lists/FlatList";
import {  useSelector } from "react-redux/es/exports";
import { RootState } from "../src/store";
import { Dispatch, bindActionCreators } from "redux";
import { addFavorite } from "../src/store/actions";
import store from "../src/store";
const Favorites =()=> {
  

  
  return (
   
      <View>
    
      </View>
    
    
  );
}
export default Favorites;
