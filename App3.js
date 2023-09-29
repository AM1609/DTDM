import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,} from "react-native";
  

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      
      <Image
        source={{uri:'https://glints.com/vn/blog/wp-content/uploads/2022/11/react-native.jpg'}}
        style={styles.logo}
      />
      <View style={styles.header}>
        <Text style={styles.title}>React Native</Text>
      </View>
      {!isLoggedIn && (
        <View style={styles.loginForm}>
          <Text style={styles.label}>Tài khoản</Text>
          <TextInput
            style={styles.input}
            placeholder="Tài khoản"
            onChangeText={(text)=> setUserName(text)}
            value={userName}
          />
          <Text style={styles.label}>Mật khẩu</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu"
            onChangeText={(text)=> setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
          <Button
            style={styles.button}
            title="Đăng ký"
            onPress={() => setIsLoggedIn(true)}
          />
          
        </View>
      )}
      {isLoggedIn && (
        <View style={styles.loginForm}>
          <Text style={styles.label} onPressIn={()=> alert("Hello "+ userName )}>Chào mừng bạn đến với React Native!</Text>
          <Button
            style={styles.button}
            title="Bắt đầu"
            onPress={() => setIsLoggedIn(false)}
          />
          
        </View>
      )}
      {/* </ImageBackground> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: 5,
  },
  backgroundImage: {
    width: 200,
    height: 200,
    borderRadius: 5,
  },
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});


export default App;

