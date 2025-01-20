import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { navigate, reset } from "./Navigation";
export const navigationRef: any = React.createRef();

const Splash = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Use navigationRef to navigate to the new screen
      reset("ReadingList");
      console.log("here called.....");
      
    }, 2000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array to run the effect only once

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
    justifyContent: "center"
  }
});
