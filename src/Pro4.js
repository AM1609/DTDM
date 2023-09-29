import React, { useState } from "react";
import { View,Text, Button } from "react-native";
const Pro4 = () =>{
    const [Count, setCount]= useState(0);
    return(
        
            <View style= {{alignItems:"center"}}>
            <Text> You are pressed the button: {Count} time(s)</Text>
            <Button title="Press Me" onPress={() => setCount(Count+1)}/>
            </View>
        
    )
}
export default Pro4;