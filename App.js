import "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { PaperProvider } from "react-native-paper";
import CustomNavigationBar_Lab2 from "./src/navigation/CustomNavigationBar_Lab2";



const Stack = createStackNavigator();
const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        {/* <ProfileScreen /> */}
        {/* <ContactsScreen /> */}
        <CustomNavigationBar_Lab2 />

        {/* <CustomNavigationBar_Lab2 /> */}
        {/* <HomePage/> */}
      </PaperProvider>
    </SafeAreaProvider>

    //   {/* <MenuBtn/> */}
    //   {/* <MenuItem/> */}
    //   {/* <AppBarHeader /> */}

    //   {/* <HomeScreen/> */}
    //   {/* <Login/> */}
    //   {/* <HomePage /> */}
    //   {/* <Pj7TextInput/> */}

    //<Login />
  );
};

export default App;

//const styles = StyleSheet.create({});
