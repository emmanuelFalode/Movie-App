import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0d23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 56,
          paddingTop: 3,
          paddingBottom: 15,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <Image
                source={require("../../assets/images/home.png")}
                style={{ width: 25, height: 25 }}
                tintColor="white"
              />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <Image
                source={require("../../assets/images/save.png")}
                style={{ width: 25, height: 25 }}
                tintColor="white"
              />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <Image
                source={require("../../assets/images/search.png")}
                style={{ width: 25, height: 25 }}
                tintColor="white"
              />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <Image
                source={require("../../assets/images/user.png")}
                style={{ width: 25, height: 25 }}
                
              />
            </>
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
