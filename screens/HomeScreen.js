import React from "react";
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

const HomeScreen = (props) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.app}>
        <Text style={styles.appTitle}>ecom</Text>
        <Ionicons name="cart-outline" size={25} color={"#51565c"} />
      </View>
      <View style={styles.banner}>
        <Image
          source={require("../assets/categories/banner.jpg")}
          style={styles.bannerImage}
        />
      </View>
      <View style={styles.categories}>
        <Text style={styles.categoryTitle}>All categories</Text>
        <View style={styles.categoriesWrapper}>
          <TouchableOpacity
            style={styles.category}
            onPress={() =>
              props.navigation.navigate("Products", { category: "mens" })
            }
          >
            <Image
              source={require("../assets/categories/men.jpg")}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryName}>Mens</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.category}
            onPress={() =>
              props.navigation.navigate("Products", { category: "womens" })
            }
          >
            <Image
              source={require("../assets/categories/women.jpg")}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryName}>Womens</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.category}
            onPress={() =>
              props.navigation.navigate("Products", { category: "kids" })
            }
          >
            <Image
              source={require("../assets/categories/kids.jpg")}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryName}>Kids</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.brands}>
        <Text style={styles.brandTitle}>Top Brands for you</Text>
        <ScrollView style={styles.brandsWrapper} horizontal>
          <TouchableOpacity style={styles.brand}>
            <Image
              source={require("../assets/brands/US-polo.webp")}
              style={styles.brandImage}
            />
            <Text style={styles.brandName}>US-Polo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.brand}>
            <Image
              source={require("../assets/brands/W.webp")}
              style={styles.brandImage}
            />
            <Text style={styles.brandName}>W</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.brand}>
            <Image
              source={require("../assets/brands/puma.webp")}
              style={styles.brandImage}
            />
            <Text style={styles.brandName}>Puma</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.brand}>
            <Image
              source={require("../assets/brands/HM.webp")}
              style={styles.brandImage}
            />

            <Text style={styles.brandName}>H&M</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  app: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  appTitle: {
    fontFamily: "Pacifico_400Regular",
    fontSize: 25,
    marginBottom: 12,
    color: "#51565c",
  },
  banner: {
    width: "100%",
    height: 200,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  categories: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 25,
  },
  categoriesWrapper: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  categoryTitle: {
    fontFamily: "Inter_600SemiBold",
    textTransform: "uppercase",
    marginVertical: 10,
  },
  category: {
    width: 100,
    height: 100,
    alignItems: "center",
  },
  categoryImageWrapper: { width: "100%", height: "100%" },
  categoryImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 1000,
    borderWidth: 1.5,
    borderColor: Colors.accent,
  },
  categoryName: {
    fontFamily: "Inter_300Light",
    color: "#51565c",
    marginVertical: 7,
    fontSize: 12,
  },
  brands: {
    width: "100%",
    flex: 1,
    alignItems: "center",
  },
  brandTitle: {
    fontFamily: "Inter_600SemiBold",
    textTransform: "uppercase",
    marginVertical: 10,
  },
  brandsWrapper: {
    marginVertical: 10,
  },
  brand: {
    width: 110,
    height: 200,
    marginHorizontal: 10,
    alignItems: "center",
  },
  brandImage: {
    height: "85%",
    width: "100%",
    resizeMode: "contain",
  },
  brandName: {
    fontFamily: "Inter_300Light",
    marginTop: 5,
  },
});

HomeScreen.navigationOptions = (navProps) => {
  return {
    headerShown: null,
  };
};

export default HomeScreen;
