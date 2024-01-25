import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { PaperProvider } from "react-native-paper";
import CustomButton from "../components/CustomButton";
import MyModal from "../components/Modal";
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
  const navigation = useNavigation();

  const navigateToListPage = () => {
    navigation.navigate("ListPage");
  };

  const navigateToFormPage = () => {
    navigation.navigate("FormPage");
  };

  const navigateToLoginPage = () => {
    navigation.navigate("LoginPage");
  };

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
          <CustomButton label="Go to List Page" onPress={navigateToListPage} />
          <CustomButton
            style={{ paddingHorizontal: 15 }}
            label="Go to Form Page"
            onPress={navigateToFormPage}
          />
          <CustomButton
            label="Go to Login Page"
            onPress={navigateToLoginPage}
            style={{ paddingHorizontal: 15 }}
          />
          <MyModal style={{ position: "absolute", top: 0 }} />
        </View>
      </PaperProvider>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 160,
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
