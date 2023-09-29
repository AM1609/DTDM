import React from "react";
import { View,Text, StyleSheet } from "react-native";

const Pro5 = () =>{
    return(
        <View style={Styles.contaner}>

            <Square text = "Square 1" bgc= "red"/>
            <Square text = "Square 2" bgc ="yellow"/>
            <Square text = "Square 3" bgc ="lime"/>
        </View>
    );
}
const Styles = StyleSheet.create(
    {
        contaner:{
            flex:1,
            alignItems:"center",
            flexDirection:"row",
            justifyContent:"space-around",
        },
        box:{
            width:100,
            height:100,
            justifyContent:"center",
            alignItems:"center",
        }
    }
)
const Square = props =>{
    return(
        <View style={[Styles.box,{backgroundColor:props.bgc}]}>
        <Text>{props.text}</Text>
        </View>
    )
    
}

export default Pro5;