import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Signin from "../components/Signin";
import Signup from "../components/Signup";

const AuthScreen = (props) => {
  const [isSignIn, setIsSignIn] = useState(false);
  return (
    <View>
      {isSignIn ? (
        <Signin toggleToSignin={() => setIsSignIn(false)} navigation={props.navigation} />
      ) : (
        <Signup toggleToSignin={() => setIsSignIn(true)} />
      )}
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
