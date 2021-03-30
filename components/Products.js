import React from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  StyleSheet,
} from "react-native";
import firebase from "../firebase/base";

import ProductGrid from "./ProductGrid";
import Colors from "../constants/Colors";
import Product from "../model/product";

const Products = (props) => {
  const [products, setProducts] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetchProducts();
  }, []);

  const category = props.navigation.getParam("category");

  const fetchProducts = () => {
    firebase
      .database()
      .ref(`/products/${category}`)
      .on("value", (snapshot) => {
        const dummyProducts = [];
        for (const key in snapshot.val()) {
          dummyProducts.push(
            new Product(
              key,
              snapshot.val()[key].name,
              snapshot.val()[key].price,
              snapshot.val()[key].imageUrl,
              snapshot.val()[key].description
            )
          );
        }
        setProducts(dummyProducts);
        setIsLoading(false);
      });
  };
  return (
    <View style={styles.container}>
      {products ? (
        products.length > 0 ? (
          <FlatList
            data={products}
            numColumns={2}
            onRefresh={fetchProducts}
            refreshing={isLoading}
            renderItem={(itemData) => {
              return (
                <ProductGrid
                  name={itemData.item.name}
                  price={itemData.item.price}
                  imageUrl={itemData.item.imageUrl}
                  description={itemData.item.description}
                  onclick={() =>
                    props.navigation.navigate("ProductDetails", {
                      details: {
                        name: itemData.item.name,
                        price: itemData.item.price,
                        imageUrl: itemData.item.imageUrl,
                        description: itemData.item.description,
                      },
                    })
                  }
                />
              );
            }}
          />
        ) : (
          <View style={styles.center}>
            <Text style={styles.message}>No items under {category} category</Text>
          </View>
        )
      ) : (
        <View style={styles.center}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  message: {
    fontFamily: "Inter_500Medium",
    color: "#000000"
  }
});

Products.navigationOptions = (navProps) => {
  const categoryTitle = navProps.navigation.getParam("category");
  return {
    headerTitle: categoryTitle,
  };
};

export default Products;
