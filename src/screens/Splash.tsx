import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { navigate, reset } from "./Navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Utils from "../res/styles/Utils";

export const navigationRef: any = React.createRef();

const Splash = () => {
  const [token, setToken] = useState(null); 

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        setToken(storedToken); 
        console.log("Token:", storedToken); 
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };

    fetchToken(); 

    const timer = setTimeout(() => {
        reset('TabMain'); 
      
    }, 2000);

    return () => clearTimeout(timer);
  }, [token]);

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 300, height: 300 }}
        source={require('../res/images/splash.png')}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
