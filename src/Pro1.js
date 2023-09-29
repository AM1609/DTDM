import React from "react";
import { View,Text, StyleSheet } from "react-native";
const Pro1 = () =>{
    return(
        <View style = {Styles.st1}>
            <Text>
                Hello World
            </Text>
        </View>
      )
}
const Styles = StyleSheet.create(
    {
        st1:{
            backgroundColor : 'aqua',
            width:100,
            height:100,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 2
        },
        
    }
)
export default Pro1;