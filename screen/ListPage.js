import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const listePrenoms = [
  { prenom: "Devin" },
  { prenom: "Dan" },
  { prenom: "Dominic" },
  { prenom: "Jackson" },
  { prenom: "James" },
  { prenom: "Joel" },
  { prenom: "John" },
  { prenom: "Jillian" },
  { prenom: "Jimmy" },
  { prenom: "Julie" },
];
const ListPage = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  const navigateToHomePage = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={{
        uri: "https://e0.pxfuel.com/wallpapers/193/765/desktop-wallpaper-iphonexpapers-simple-lines-white-curves-abstract-art.jpg",
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            {listePrenoms.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.itemContainer}
                onPress={navigateToHomePage}
              >
                <Text style={styles.itemText}>{item.prenom}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              onPress={navigateToHomePage}
              style={styles.goBackButton}
            >
              <Text style={styles.goBackText}>Go Back Home</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    padding: 20,
    backgroundColor: "transparent",
  },
  itemContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
  goBackButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 5,
    alignItems: "center",
  },
  goBackText: {
    color: "#fff",
    fontSize: 16,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default ListPage;
