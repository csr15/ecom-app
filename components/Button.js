import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Colors from "../constants/Colors";

const Button = (props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        props.style,
        props.secondary ? styles.secondary : styles.primary,
      ]}
      disabled={props.isLoading}
      onPress={props.clickHandler}
    >
      {props.isLoading ? (
        <ActivityIndicator size="small" color="#ffffff" />
      ) : (
        <Text
          style={[
            styles.buttonText,
            props.secondary ? { color: "#000000" } : { color: "#ffffff" },
          ]}
        >
          {props.title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    marginTop: 12,
    borderRadius: 7,
  },
  secondary: {
    backgroundColor: Colors.inputBorder,
    borderWidth: 1,
    borderColor: "#cccccc",
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  buttonText: {
    fontFamily: "Poppins_500Medium",
    color: "#ffffff",
  },
});
