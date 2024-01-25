import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

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

const ListPage = ({ onGoBack }) => {
  return (
    <ImageBackground
      source={{
        uri: "https://e0.pxfuel.com/wallpapers/193/765/desktop-wallpaper-iphonexpapers-simple-lines-white-curves-abstract-art.jpg",
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {listePrenoms.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.prenom}</Text>
          </View>
        ))}
        <TouchableOpacity onPress={onGoBack} style={styles.goBackButton}>
          <Text style={styles.goBackText}>Go Back Home</Text>
        </TouchableOpacity>
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
