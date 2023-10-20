import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ContactsScreen from "../screens/ContactsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import colors from '../utility/colors';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import User from "../screens/User";
import Option from "../screens/Option";
import { MaterialIcons } from '@expo/vector-icons';
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
const Pro1Screen = ({navigation}) =>{
  return(
    
    <Stack.Navigator
      initialRouteName="User"
      screenOptions={
        {
          // header: (props)=> <AppBarHeaderMenu {...props} />,
          headerTintColor: "white",
          headerStyle: {backgroundColor:colors.blue},
          headerTitleAlign: "center",  
        }
      }
    >
      <Stack.Screen name="User" component={User} options={{title:"User",
      headerTitle:"Me", 
      headerTintColor: 'white', 
      headerStyle: { backgroundColor: colors.blue, }, 
      headerRight: ()=>(
        <MaterialIcons name="settings" 
          size={24} 
          style={{ color: 'white', marginRight: 10 }} onPress={() => navigation.navigate("Option")} />
      )
      }}
      />
      
    
      <Stack.Screen name="Option" component={Option} />
    </Stack.Navigator>
    
  )

}
const CustomNavigationBar_Lab2 = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Contacts"  component={ProScreen} options={{tabBarIcon: "home"}}/>
        <Tab.Screen name="User"  component={Pro1Screen} options={{tabBarIcon: "home"}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default CustomNavigationBar_Lab2

const styles = StyleSheet.create({});
