import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ContactsScreen from "../screens/ContactsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import colors from '../utility/colors';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import User from "../screens/User";
// import ProfileScreen from "../src/screens/ProfileScreen";
// import ContactsScreen from "..src/screens/ContactsScreen";
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const ProScreen = () =>{
  return(
    
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={
        {
          // header: (props)=> <AppBarHeaderMenu {...props} />,
          headerTintColor: "white",
          headerStyle: {backgroundColor:colors.blue},
          headerTitleAlign: "center",  
        }
      }
    >
      <Stack.Screen name="Contacts" component={ContactsScreen} options={{title:"Contacts"}}/>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
    
  )

}
const CustomNavigationBar_Lab2 = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        initialRouteName="Contacts"
        screenOptions={
          {
            // header: (props)=> <AppBarHeaderMenu {...props} />,
            headerTintColor: "white",
            headerStyle: {backgroundColor:colors.blue},
            headerTitleAlign: "center",  
          }
        }
      >
        <Stack.Screen name="Contacts" component={ContactsScreen} options={{title:"Contacts"}}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen name="Contacts"  component={ProScreen} options={{tabBarIcon: "home"}}/>
        <Tab.Screen name="User"  component={User} options={{tabBarIcon: "home"}}/>
      </Tab.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Tab.Navigator
    //   initialRouteName="Contacts"
    //   screenOptions={
    //      {
    //       // header: (props)=> <AppBarHeaderMenu {...props} />,
    //       headerTintColor: "white",
    //       headerStyle: {backgroundColor:colors.blue},
    //       headerTitleAlign: "center",  
    //     }
    //   }>
    //   <Tab.Screen name="Contacts" component={ContactsScreen} options={{title:"Contacts"}}/>
    //     <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
}

export default CustomNavigationBar_Lab2

const styles = StyleSheet.create({});
