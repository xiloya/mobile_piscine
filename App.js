import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./screen/HomePage";
import ListPage from "./screen/ListPage";
import FormPage from "./screen/FormPage";
import LoginPage from "./screen/LoginPage";
import Dashboard from "./screen/Dashboard";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="ListPage" component={ListPage} />
        <Stack.Screen name="FormPage" component={FormPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
