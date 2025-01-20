import React, { useEffect } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { navigate, reset } from "./Navigation";
import { FontName } from "../res/styles/FontName";
import Clickable from "../res/styles/Clickable";
export const navigationRef: any = React.createRef();

const OtpSucess = ({route}) => {
  console.log("this...",route?.params?.isFromLogin);
  
const GetWelComeText = () =>  {
    switch (route?.params?.isFromLogin) {
      case 1:
        return 'Password is set';
      case 2:
        return 'Something went wrong!';
      case 3:
        return 'OTP is verified...'
      case 4: 
      return 'OTP is incorrect'

      default:
        return 'OTP is verified...'
    }
  }
  const GetImages = () => {
    switch (route?.params?.isFromLogin) {
      case 1:
        return require('../res/images/OtpSucess.png');
      case 2:
        return require('../res/images/error-message.png');
      case 3:
        return require('../res/images/OtpSucess.png')
      case 4: 
      return require('../res/images/Frame.png')

      default:
        return require('../res/images/OtpSucess.png')
    }
  }

  const GetWelComeTextDesc = () =>  {
    switch (route?.params?.isFromLogin) {
      case 1:
        return 'Reset password is done, login with new password to continue using app.';
      case 2:
        return 'Taking too much time, Please check your internet connection.'
      case 3:
        return 'Happy to say everything went smoothly. Start with Tradesmen for great experience...'
      case 4: 
      return 'Please enter valid data, code is incorrect.'

      default:
        return 'Happy to say everything went smoothly. Start with Tradesmen for great experience...'
    }
  }

  const OnDoneText = () =>{
    switch (route?.params?.isFromLogin){
      case 1:
        return 'GetWelComeTextDesc'
      case 2:
        return 'Try Again'
      case 3:
        return 'Continue to App'
      case 4: return 'Try Again'
      default:
        return 'Continue to App'
    }
  }





  return (
    <View>
    <ImageBackground style={{
        // flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: 294
        // paddingStart: 20,
        // paddingEnd: 16,
        // paddingVertical: 15,
      }} source={require('../res/images/Signup.png')}
        resizeMode={"cover"}>
        <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
          <Image style={{ width: 250, height: 200 }} resizeMode={"cover"} source={GetImages()}>
          </Image>
        </View>
      </ImageBackground>
      <View style={{
                marginTop: 10,
                // backgroundColor: Colors.Defawhite,
                // flexDirection: 'row',
                // alignItems: 'center',
                marginLeft: 18,
                // backgroundColor:"red"
            }}>
                <Text style={{
                    fontFamily: FontName.extraBold
                    ,
                    fontSize: 36,
                    color: '#3F444D',
                }}>{GetWelComeText()}</Text>
            </View>

            <View style={{
                marginTop: 10,
                // backgroundColor: Colors.Defawhite,
                // flexDirection: 'row',
                // alignItems: 'center',
                marginLeft: 18,
                // backgroundColor:"red"
            }}>
                <Text style={{
                    fontFamily: FontName.extraBold,
                    fontSize: 20,
                    color: '#343434',
                }}>{GetWelComeTextDesc()}</Text>
            </View>

            <View style={{
                marginTop: 10,
                // backgroundColor: Colors.Defawhite,
                // flexDirection: 'row',
                // alignItems: 'center',
                marginLeft: 18,
                // backgroundColor:"red"
            }}>
                <Clickable onPress={ () => {
                   reset("ReadingList")

                }    }>
                <Text style={{
                    fontFamily: FontName.extraBold,
                    textDecorationLine:"underline",
                    fontSize: 25,
                    color: '#314FA4',
                }}> {OnDoneText()}</Text>
                </Clickable>
            </View>
      </View>
      
  );
};

export default OtpSucess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});
