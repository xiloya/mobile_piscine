import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { TextInput, Button, ProgressBar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const LoginPage = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [progress, setProgress] = useState(0);

  const handleLogin = () => {
    setLoading(true);

    // Simulate login process
    setTimeout(() => {
      console.log("User logged in!");
      setLoading(false);
      navigation.navigate("Dashboard");
    }, 2000);
  };

  const isButtonDisabled = () => {
    return email.trim() === "" || password.trim() === "";
  };

  const updateProgress = () => {
    const fieldsCompleted = (email.trim() !== "") + (password.trim() !== "");
    const totalFields = 2;
    const newProgress = (fieldsCompleted / totalFields) * 100;
    setProgress(newProgress);
  };

  return (
    <ImageBackground
      source={{
        uri: "https://e0.pxfuel.com/wallpapers/193/765/desktop-wallpaper-iphonexpapers-simple-lines-white-curves-abstract-art.jpg",
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Connexion</Text>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            updateProgress();
          }}
          style={styles.input}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            updateProgress();
          }}
          secureTextEntry
          style={styles.input}
        />
        <ProgressBar
          progress={progress / 100}
          color="green"
          style={styles.progressBar}
        />
        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.button}
          disabled={isButtonDisabled()}
        >
          Connexion
        </Button>

        {loading && <ActivityIndicator size="large" color="#fff" />}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.goBackButton}
        >
          <Text style={styles.goBackText}>Go Back Home</Text>
        </TouchableOpacity>
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
  input: {
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 16,
    backgroundColor: "darkgreen",
  },
  progressBar: {
    marginTop: 10,
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

export default LoginPage;
