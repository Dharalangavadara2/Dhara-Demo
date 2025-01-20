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

const ResetPassword = ({route}) => {
    console.log("roue...",route?.params?.data);
    
const [password,setPassword] = useState('')
const [passworderror,setPasswordError] = useState('')
const [newpassworderror,setNewPasswordError] = useState('')
const [newpassword,setNewPassword] = useState('')
   



  

    const onSubmitClicked = () => {
        if(Utils.isEmpty(password)){
            setPasswordError('Enter New Password')
            // Utils.showErrorToast('Enter Password')
        }
        else if (Utils.isEmpty(newpassword)){
            setPasswordError('')
            setNewPasswordError('Enter Confirm Password')
            // Utils.showErrorToast('Enter Confirm Password')
        }
        else if (password != newpassword){
            setNewPasswordError('')
            setPasswordError('')
            Utils.showErrorToast("Please, make sure your password match. ")
        }
        else {
            navigate('OtpSucess',{isFromLogin:1})
            Utils.showToast("Password Set successFully")
        }

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
                }}>Reset Password?</Text>
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
                    {'Your new password must be different from previous used password, contain at least 8 letters. '}
                </Text>
                
            </View>

           

                         <View style={{
                alignItems: "center",
                marginTop:16
            }}>
                 <View style={{ padding: 10 }}>
        <CustomTextInput
          isOptional={true}
          error={passworderror}
        //   editable={false}
          
          value={password}  label={'New Password'}
          style={{
            marginTop: 10,
          }} inputType={'password'}
          onChangeText={(text) => setPassword(text)} 
          />
      </View>
      <View style={{ padding: 10 }}>
        <CustomTextInput
          isOptional={true}
          error={newpassworderror}
        //   editable={false}
          
          value={newpassword}  label={'Confirm Password'}
          style={{
            marginTop: 10,
          }} inputType={'password'}
          onChangeText={(text) => setNewPassword(text)} 
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

export default ResetPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        // alignItems: "center",
        // justifyContent: "center"
    }
});
