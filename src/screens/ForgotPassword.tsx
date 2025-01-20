import React, { useEffect, useRef, useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { navigate, reset } from "./Navigation";
import { FontName } from "../res/styles/FontName";
import Colors from "../res/styles/Colors";
import OtpInputs, { OtpInputsRef } from "react-native-otp-inputs";
import Utils from "../res/styles/Utils";
import Button from "../res/styles/Button";
import CustomTextInput from "../res/styles/CustomeTextInput";
export const navigationRef: any = React.createRef();

const ForgotPassword = ({route}) => {
    console.log("roue...",route?.params?.data);
    
    const otp:any =  route?.params?.data;

   



  

    const onSubmitClicked = () => {
        navigate('ResetPassword')

    }


    return (
        <View style={styles.container}>
            <ImageBackground style={{
                // flexDirection: "row",
                // alignItems: "center",
                width: "100%",
                height: 294
                // paddingStart: 20,
                // paddingEnd: 16,
                // paddingVertical: 15,
            }} source={require('../res/images/Otp.png')}
                resizeMode={'cover'}>
                <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                    <Image style={{ width: 180, height: 200 }} resizeMode={"cover"} source={require('../res/images/OtpUser.png')}>
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
                }}>Forgot Password?</Text>
            </View>
            <View style={{
                marginTop: 13,
                paddingHorizontal:13
            }}>
                <Text style={{
                    color: Colors.Textcolor,
                    fontFamily: FontName.regular,
                    fontSize: 20,
                    textAlign: 'left',
                    paddingTop: 4
                }}>
                    {'Enter your registered email id, we will share verification code. '}
                </Text>
                
            </View>

           

                         <View style={{
                alignItems: "center",
                marginTop:16
            }}>
                 <View style={{ padding: 10 }}>
        <CustomTextInput
          isOptional={true}
          editable={false}
          
          value={otp}  label={'Email'}
          style={{
            marginTop: 10,
          }} inputType={'password'}
        //   onChangeText={(text) => SETpassword(text)} 
          />
      </View>
                
            </View> 
            {/* {timer ? */}
            

             
                
                
                <Button 
                onPress={onSubmitClicked}
                disabled={false}
                title={'Submit'} style={{
                  marginTop: 30,
                  marginBottom: 5,
                  marginHorizontal: 16,}}
                >

                </Button>

        </View>
    );
};

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        // alignItems: "center",
        // justifyContent: "center"
    }
});
