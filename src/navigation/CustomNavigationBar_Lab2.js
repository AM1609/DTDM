import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ContactsScreen from "../screens/ContactsScreen";
import ProfileScreen from "../screens/ProfileScreen";
// import ProfileScreen from "../src/screens/ProfileScreen";
// import ContactsScreen from "..src/screens/ContactsScreen";

const Stack = createStackNavigator();

const CustomNavigationBar_Lab2 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Contacts"
        screenOptions={
          {
            // header: (props)=> <AppBarHeaderMenu {...props} />,
            headerTintColor: "white",
            headerStyle: {backgroundColor:"tomato"},
            headerTitleAlign: "center",  
          }
        }
      >
        <Stack.Screen name="Contacts" component={ContactsScreen} options={{title:"Contacts"}}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        {/* <Stack.Screen name="ScreenTest" component={ScreenTest} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default CustomNavigationBar_Lab2

const styles = StyleSheet.create({});
