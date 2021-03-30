import React from "react";
import { Image } from "react-native";

const ViewImageScreen = ({ navigation }) => {
  const image = navigation.getParam("imageUrl");
  return (
    <Image
      source={{ uri: image }}
      style={{ width: "100%", height: "100%", resizeMode: "contain" }}
    />
  );
};

ViewImageScreen.navigationOptions = {
  headerShown: null,
};

export default ViewImageScreen;
