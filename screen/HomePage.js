import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import CustomButton from "../components/CustomButton";
import MyModal from "../components/Modal";
import ListPage from "./ListPage";
import FormPage from "./FormPage";

const HomePage = ({ navigation }) => {
  const [currentScreen, setCurrentScreen] = useState("Home");

  const navigateToHomePage = () => {
    setCurrentScreen("Home");
  };

  const navigateToListPage = () => {
    setCurrentScreen("ListPage");
  };

  const navigateToFormPage = () => {
    setCurrentScreen("FormPage");
  };

  const navigateToLoginPage = () => {
    setCurrentScreen("LoginPage");
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "Home":
        return (
          <ImageBackground
            source={{
              uri: "https://e0.pxfuel.com/wallpapers/193/765/desktop-wallpaper-iphonexpapers-simple-lines-white-curves-abstract-art.jpg",
            }}
            style={styles.backgroundImage}
          >
            <PaperProvider>
              <View style={styles.container}>
                <Text>Welcome to my First mobile App!</Text>
                <StatusBar style="auto" />
                <CustomButton
                  label="Go to List Page"
                  onPress={navigateToListPage}
                />
                <CustomButton
                  style={{ paddingHorizontal: 15 }}
                  label="Go to Form Page"
                  onPress={navigateToFormPage}
                />
                <CustomButton
                  label="Go to Login Page"
                  onPress={navigateToLoginPage}
                  style={{ marginTop: 15 }}
                />
                <MyModal style={{ position: "absolute", top: 0 }} />
              </View>
            </PaperProvider>
          </ImageBackground>
        );

      case "ListPage":
        const liste = [
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
        return <ListPage liste={liste} onGoBack={navigateToHomePage} />;

      case "FormPage":
        return (
          <ImageBackground
            source={{
              uri: "https://e0.pxfuel.com/wallpapers/193/765/desktop-wallpaper-iphonexpapers-simple-lines-white-curves-abstract-art.jpg",
            }}
            style={styles.backgroundImage}
          >
            <FormPage onGoBack={navigateToHomePage} />
          </ImageBackground>
        );

      // ... (other cases)

      default:
        return null;
    }
  };

  return <>{renderScreen()}</>;
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 250,
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default HomePage;
