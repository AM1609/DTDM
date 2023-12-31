// 
// import Lab1 from './src/Lab1';
// import Lab2 from './src/Lab2';
// import Lab3 from './src/Lab3';
// import Lab4 from './src/Lab4';
// import Lab5 from './src/Lab5';
// import Lab6 from './src/Lab6';
// import Lab7 from './src/Lab7';
// import Lab8 from './src/Lab8';
// import Calyculator from './src/Calyculator'
import React from 'react';
import HomeScreen from './Src/HomeScreen';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import { Image, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import DetailsScreen from './Src/DetailsScreen';

const Stack = createStackNavigator();
const App = () => {
  return (

    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ navigation, route }) => ({
            title: (props) => <CustomNavigationBar {...props} />,
            headerLeft: () => {
              if (route.name !== 'Home') {
                return (
                  <TouchableOpacity style={{ paddingLeft: 20 }} onPress={() => navigation.goBack() } >
                    <Image source={"https://cdn-icons-png.flaticon.com/512/109/109618.png"} style={{ width: 24, height: 24}} />
                  </TouchableOpacity>
                );
              } else return null
            },
          })}
        >
          <Stack.Screen name="Home" component={HomeScreen}  options={{ title: 'HomeScreen' }}/>
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{ title: 'Detail' }}/> 
        </Stack.Navigator>
        
      </NavigationContainer>
      
    </PaperProvider>
    
  );
}
export default App;