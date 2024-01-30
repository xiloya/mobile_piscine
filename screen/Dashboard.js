import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  Image,
} from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    name: "New User",
    email: "user@example.com",
    profilePicture:
      "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [user]);

  const handleLogout = () => {
    setLoading(true);

    setTimeout(() => {
      navigation.navigate("HomePage");

      setLoading(false);
    }, 2000);
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
          <ActivityIndicator size="large" color="white" />
        ) : (
          <>
            <Text style={styles.title}>
              Welcome to the Dashboard, {user.name}!
            </Text>
            <Card style={styles.card}>
              <Card.Title title="User Information" />
              <Card.Content>
                <Image
                  source={{ uri: user.profilePicture }}
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                />
                <Text>Name: {user.name}</Text>
                <Text>Email: {user.email}</Text>
              </Card.Content>
            </Card>
            <TouchableOpacity
              onPress={handleLogout}
              style={styles.logoutButton}
            >
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
    color: "#fff",
  },
  card: {
    marginVertical: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  logoutButton: {
    marginTop: 220,
    marginBottom: -100,
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 5,
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default Dashboard;
