import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from "react-native";
import Pro1 from './Pro1';
import Pro2 from './Pro2';
import Pro3 from './Pro3';
import Pro4 from './Pro4';
import Pro5 from './Pro5';
import Pro6 from './Pro6';
import Pro7 from './Pro7';
import Pro8 from './Pro8';



const Main = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Pro1', title: 'Pro1', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Pro2', title: 'Pro2', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Pro3', title: 'Pro3', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Pro4', title: 'Pro4', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Pro5', title: 'Pro5', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Pro6', title: 'Pro6', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Pro7', title: 'Pro7', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Pro8', title: 'Pro8', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Pro1: Pro1,
    Pro2: Pro2,
    Pro3: Pro3,
    Pro4: Pro4,
    Pro5: Pro5,
    Pro6: Pro6,
    Pro7: Pro7,
    Pro8: Pro8

  });

  return (
    <SafeAreaProvider>
         <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        />
    </SafeAreaProvider>
  );
};
const Styles = StyleSheet.create(
    {
        contaner:{
          flex:1
        }
    }
)
export default Main;