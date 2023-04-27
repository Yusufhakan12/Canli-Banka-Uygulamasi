import React, { useState } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Text, View } from "react-native"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Home from "../screens/Home"
import Detail from "../screens/Detail"
import Favorite from "../screens/Favorite"
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const Homestack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: { fontFamily: "TiltWarp-Regular", fontSize: 25 }
      }}
    >
      <Stack.Screen name="Borsa" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}

const Tabs = () => {
  const [favorites, setFavorites] = useState()
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 60
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Homestack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <MaterialIcons
                name="home"
                size={30}
                color={focused ? "#e32f45" : "#748c94"}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                Home
              </Text>
            </View>
          )
        }}
      />

      <Tab.Screen
        name="favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <MaterialIcons
                name={focused ? "favorite" : "favorite-outline"}
                size={30}
                color={focused ? "#e32f45" : "#748c94"}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                Favorite
              </Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs
