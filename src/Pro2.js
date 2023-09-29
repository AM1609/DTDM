import React from "react";
import { View,Text, StyleSheet, Button, TouchableOpacity } from "react-native";
const Pro2 = () =>{
    return(
    <View>
        {/* <Button title="Btn1" onPress={() => alert("Hello")}/> */}
        <TouchableOpacity style ={Styles.btn} onPress={() => alert("Hello")} >
            <Text style={Styles.text}> Button</Text>
        </TouchableOpacity>
    </View>
    )
    
}
const Styles = StyleSheet.create(
    {
        btn:{
            backgroundColor : 'blue',
            padding:10,
            margin:20,
            alignItems: 'center',
        },
        text:{
            color: 'white',
        }
    }
)
export default Pro2