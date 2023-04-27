import React, { useState, useEffect } from "react"
import { Text, View, Pressable, StyleSheet } from "react-native"
import { FlatList } from "react-native"
import { socket } from "../App"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { addFavorite } from "../src/store/actions"
import { useContext } from "react"
import favoriteContext from "../src/context/favoriteContext"
import { Crypto } from "../models/crypto"

//navigation uyarısını silmek için any yazdık
const Home = ({ navigation }:{navigation:any}) => {
  const [cryptoList, setCrypto] = useState()
  //const [favoriteList, setFavoriteList] = useState<any[]>([]);
  const [ fav, setFav ] = useState<any[]>([]);

  useEffect(() => {
    socket.on("borsa", data => {
      setCrypto(data)
    })
  }, [])

 const navigate = (id: string) => {
    navigation.navigate("Detail", {id: id});
  };

  const onFavorite = (borsa:Crypto) => {
    setFav([...fav, borsa])
  }

  const onRemoveFavorite = (borsa:Crypto) => {
    const filteredList = fav.filter(item => item.Isim !== borsa.Isim)
    setFav(filteredList)
  }
  const ifExists = (borsa:Crypto) => {
    if (fav.filter(item => item.Isim === borsa.Isim).length > 0) {
      return true
    }
    return false
  }

  const renderItem = ({ item }:{item:Crypto}) => {
    return (
      <View>
        <Pressable
          onPress={() => navigate(item.Isim)}
          style={styles.buttonStyle}
        >
          <Text style={styles.textStyle}>{item.Isim}</Text>
          <Text style={styles.rightText}>{item.Satis}</Text>

          <Pressable onPress={() => addFavorite(item)}>
            <MaterialIcons
              name={ifExists(item) ? "favorite" : "favorite-outline"}
              size={25}
              style={styles.icon}
              color="white"
            />
          </Pressable>
        </Pressable>
      </View>
    )
  }

  return (
    <FlatList
      data={cryptoList}
      keyExtractor={item => item.Isim}
      renderItem={renderItem}
    />
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "black",
    margin: 2,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 7
  },
  textStyle: {
    fontSize: 14,
    marginBottom: 5,
    fontFamily: "TiltWarp-Regular",
    color: "white"
  },

  rightText: {
    right: 35,
    top: 8.33,
    color: "white",
    position: "absolute",
    fontSize: 16
  },
  icon: {
    position: "absolute",
    right: 1
  }
})

export default Home
