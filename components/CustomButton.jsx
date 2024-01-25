import * as React from "react";
import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";

const CustomButton = ({ label, onPress, style }) => {
  const defaultStyle = StyleSheet.create({
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    backgroundColor: "black",
    marginTop: 15,
  });

  const combinedStyle = StyleSheet.flatten([defaultStyle, style]);

  return (
    <Button
      style={combinedStyle}
      mode="contained"
      onPress={() => {
        console.log("Pressed");
        onPress();
      }}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
