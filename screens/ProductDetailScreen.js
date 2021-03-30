import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, Modal } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Colors";

const ProductDetailScreen = (props) => {
  const { name, price, imageUrl, description } = props.navigation.getParam(
    "details"
  );
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={styles.imageContainer}
          activeOpacity={0.8}
          onPress={() => {
            props.navigation.navigate("ViewImage", { imageUrl: imageUrl });
          }}
        >
          <Image style={styles.image} source={{ uri: imageUrl }} />
        </TouchableOpacity>
        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.price}>₹{price}</Text>
          <Text style={styles.tax}>&nbsp;Inclusive of all taxes</Text>
          <TouchableOpacity activeOpacity={0.4} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.exchangeContainer}>
          <Text style={styles.exchangeTitle}>
            Easy 30 days returns and exchanges
          </Text>
          <Text style={styles.exchangeText}>
            Choose to return or exchange for a different size(if available)
            within 30 days
          </Text>
        </View>
        <View style={styles.sizeContainer}>
          <Text style={styles.sizeTitle}>Available Sizes</Text>
          <View style={styles.sizeItems}>
            <TouchableOpacity
              activeOpacity={0.4}
              style={[{ ...styles.sizeList }, { marginLeft: 0 }]}
            >
              <Text style={styles.size}>L</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.4} style={styles.sizeList}>
              <Text style={styles.size}>XL</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.4} style={styles.sizeList}>
              <Text style={styles.size}>XXL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: Dimensions.get("window").height / 1.5,
    width: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  details: {
    padding: 10,
    backgroundColor: "#ffffff",
  },
  price: {
    fontFamily: "Inter_700Bold",
    fontSize: 15,
    color: "#3b3b3b",
    marginTop: 3,
  },
  tax: {
    fontSize: 12,
    color: "#00b07b",
    fontFamily: "Inter_700Bold",
    margin: 0,
    marginBottom: 3,
  },
  name: {
    fontFamily: "Inter_600SemiBold",
    color: "#000000",
    fontSize: 20,
    marginBottom: 3,
  },
  description: {
    marginVertical: 1,
    color: "#6e6e6e",
    fontFamily: "Inter_400Regular",
    marginVertical: 3,
    lineHeight: 19,
    fontSize: 14,
  },
  buttonContainer: {
    marginTop: 10,
    width: "100%",
    backgroundColor: Colors.primary,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "Inter_600SemiBold",
  },
  exchangeContainer: {
    marginVertical: 10,
    backgroundColor: "#ffffff",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  exchangeTitle: {
    fontFamily: "Inter_600SemiBold",
    color: "#3b3b3b",
    fontSize: 14,
  },
  exchangeText: {
    fontFamily: "Inter_400Regular",
    color: "#6e6e6e",
    marginTop: 5,
    fontSize: 13,
  },
  sizeContainer: {
    marginBottom: 10,
    backgroundColor: "#ffffff",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  sizeTitle: {
    fontFamily: "Inter_600SemiBold",
    color: "#3b3b3b",
    fontSize: 14,
    marginBottom: 10,
  },
  sizeItems: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  sizeList: {
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    width: 35,
    marginLeft: 10,
    borderColor: "#6e6e6e",
  },
  size: {
    color: "#6e6e6e",
    fontFamily: "Inter_500Medium",
    fontSize: 12,
  },
});

ProductDetailScreen.navigationOptions = ({ navigation }) => {
  const { name } = navigation.getParam("details");

  return {
    headerTitle: (
      <Text
        style={{ fontFamily: "Inter_700Bold", fontSize: 18, marginLeft: 0 }}
        numberOfLines={1}
      >
        {name}
      </Text>
    ),
    cardStyle: {
      backgroundColor: "#eee",
    },
  };
};

export default ProductDetailScreen;
