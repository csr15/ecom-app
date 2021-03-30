import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import NewProductScreen from "../screens/NewProductScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import Colors from "../constants/Colors";
import ViewImageScreen from "../screens/ViewImageScreen";
import Products from "../components/Products";
import AuthScreen from "../screens/AuthScreen";

const defaultNavProps = {
  cardStyle: {
    backgroundColor: "#ffffff",
  },
};

const HomeScreenNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Products: {
      screen: Products,
    },
    ProductDetails: {
      screen: ProductDetailScreen,
    },
    ViewImage: {
      screen: ViewImageScreen,
    },
  },
  {
    defaultNavigationOptions: defaultNavProps,
  }
);

const NewProductScreenNavigator = createStackNavigator(
  {
    NewProduct: {
      screen: NewProductScreen,
    },
  },
  {
    defaultNavigationOptions: defaultNavProps,
  }
);

const MainNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreenNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="home-outline" size={23} color={tabInfo.tintColor} />
          );
        },
      },
    },
    NewProduct: {
      screen: NewProductScreenNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="add-outline" size={23} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primary,
      showLabel: false,
    },
  }
);

const AppNavigator = createSwitchNavigator({
  Auth: AuthScreen,
  Main: MainNavigator,
});

export default createAppContainer(AppNavigator);
