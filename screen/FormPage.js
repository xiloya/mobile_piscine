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

const FormPage = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      navigation.navigate("Dashboard");

      setLoading(false);
    }, 2000);
  };

  const isButtonDisabled = () => {
    return (
      name.trim() === "" ||
      surname.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    );
  };

  const updateProgress = () => {
    const fieldsCompleted =
      (name.trim() !== "") +
      (surname.trim() !== "") +
      (email.trim() !== "") +
      (password.trim() !== "") +
      (confirmPassword.trim() !== "");

    const totalFields = 5;
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
        <TextInput
          mode="outlined"
          label="Name"
          value={name}
          onChangeText={(text) => {
            setName(text);
            updateProgress();
          }}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Surname"
          value={surname}
          onChangeText={(text) => {
            setSurname(text);
            updateProgress();
          }}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            updateProgress();
          }}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          secureTextEntry
          onChangeText={(text) => {
            setPassword(text);
            updateProgress();
          }}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Confirm Password"
          value={confirmPassword}
          secureTextEntry
          onChangeText={(text) => {
            setConfirmPassword(text);
            updateProgress();
          }}
          style={styles.input}
        />
        <ProgressBar
          progress={progress / 100}
          color="green"
          style={styles.progressBar}
        />
        <Button
          mode="contained"
          onPress={handleSubmit}
          style={styles.button}
          disabled={isButtonDisabled()}
        >
          {loading ? <ActivityIndicator color="#fff" /> : "Submit"}
        </Button>

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
    marginVertical: 50,
    padding: 20,
    backgroundColor: "transparent",
    flex: 1,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: "darkgreen",
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
  progressBar: {
    marginTop: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default FormPage;
