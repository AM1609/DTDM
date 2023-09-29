import React from "react";
import { View, Text, StyleSheet } from "react-native"; 
const DetailsScreen =()=>{
return(
    <View style={Styles.container}>
    <Text>Details Screen</Text>
    </View>
    )
}
export default DetailsScreen;

const Styles = StyleSheet.create({
    container: { 
        flex:1,
        justifyContent:"center",
        alignItems: "center"
            }
        })