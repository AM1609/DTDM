import React from "react";
import { View,Text, StyleSheet, Button, TouchableOpacity } from "react-native";
const Pro3 = () =>{
    return(
        <View style = {{flex:1, justifyContent:"center"}}>
        {/* <Button title="Btn1" onPress={() => alert("Hello")}/> */}
        <TouchableOpacity onPress={() => alert("Hello") }style = {Styles.Button} >
            <Text style={Styles.text}>Say Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("GoodBye")}style = {Styles.Button} >
            <Text style={Styles.text}>Say GoodBye</Text>
        </TouchableOpacity>
        </View>
    )
}
const Styles = StyleSheet.create(
    {
        Button:{
            padding:10,
            margin:10,
            alignItems: "center",
            backgroundColor: "blue"
        },
        text:{
            color: 'white',
        }
    }
)
export default Pro3;