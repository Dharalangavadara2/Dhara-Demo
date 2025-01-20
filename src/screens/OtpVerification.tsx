import React, { useEffect, useRef, useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { navigate, reset } from "./Navigation";
import { FontName } from "../res/styles/FontName";
import Colors from "../res/styles/Colors";
import OtpInputs, { OtpInputsRef } from "react-native-otp-inputs";
import Utils from "../res/styles/Utils";
import Button from "../res/styles/Button";
export const navigationRef: any = React.createRef();

const OtpVerification = () => {
    const otpView = useRef<OtpInputsRef>()
    const [otp,setOtp] = useState('')

    useEffect(() => {
        setTimeout(() => {
            otpView?.current?.focus()
        }, 500);
    }, [])
    let interval: any;
    const [timer, setTimer] = useState(300)



    useEffect(() => {
            interval = setInterval(() => {
                setTimer(timer => {
                    timer = timer - 1
                    if (timer > 0) {
                        return timer
                    } else {
                        clearInterval(interval)
                        return 0
                    }
                })
            }, 1000)
            return () => {
                clearInterval(interval)
            }
        
    }, [])

    const onSubmitClicked = () => {
        navigate('OtpSucess',{isFromLogin:3})

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
                }}>Verify Code</Text>
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
                    {'Check your Email Inbox we have sent you the code at john******om'}
                </Text>
                {/* <View style={styles.ViewMobilenumber}>
                                {session.company_config?.signup_config?.login_with_email == 1 ?
                                    <Text style={styles.mobilenumberlabel}>
                                        {email}
                                    </Text> :
                                    <Text style={styles.mobilenumberlabel}>
                                        {`${dialCode} ${mobileNumber.substr(mobileNumber.length - 4).padStart(mobileNumber.length, '*')}`}
                                    </Text>}
                                <Clickable style={styles.EditbtnClick} onPress={onEditClicked}>
                                    <Image source={Images.ic_newedit} style={{
                                        tintColor: Colors.BlueColor
                                    }} />
                                </Clickable>
                            </View> */}
            </View>

            <View style={{
                height: 56,
                marginTop:24,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal:15
            }}>
                            <OtpInputs ref={otpView} isRTL={false} autofillFromClipboard={false}
                                focusStyles={{
                                    borderColor: '#94A0B8',
                                    borderWidth: 1,
                                    backgroundColor: Colors.Defaultwhite,
                                    borderRadius: 6
                                }}

                                textContentType={'oneTimeCode'}
                                inputContainerStyles={{
                                    backgroundColor: '#E2E9FF',
                                    borderColor: '#F8F9FC',
                                    borderWidth: 1,
                                    borderRadius: 6

                                }}
                                inputStyles={{
                                    fontFamily: FontName.regular,
                                    fontSize: 15,
                                    color: Colors.ButtonColor,
                                    //alignSelf:'center',
                                    height: 60,
                                    width: 68,
                                    textAlign: 'center',
                                }} numberOfInputs={4} handleChange={(otp) => {
                                    setOtp(otp)

                                }} />
                        </View>

                         <View style={{
                alignItems: "center",
                marginTop:16
            }}>
                
            </View> 
            {/* {timer ? */}
             <Text style={{
                    fontFamily: FontName.bold,
                    fontSize: 20,
                    color: Colors.Defaultblack,
                    marginLeft:10
                }}> {'(' + Utils.secondsToHms(timer) + ')'}  </Text> 
                {/* // : undefined} */}

                <Text style={{fontFamily: FontName.bold,
                    fontSize: 18,
                    color: Colors.DarkGreyColor,
                    marginTop:5,
                    marginLeft:10}}>
                Did not received the code?
                </Text>
                <Text style={{fontFamily: FontName.bold,
                    fontSize: 18,
                    color: '#314FA4',
                    marginTop:5,
                    textDecorationLine:"underline",
                    marginLeft:10}}>
                Resend Code
                </Text>
                
                <Button 
                onPress={onSubmitClicked}
                disabled={otp.length < 4 || !Utils.isDigit(otp)}
                title={'Verify'} style={{
                  marginTop: 30,
                  marginBottom: 5,
                  marginHorizontal: 16,}}
                >

                </Button>

        </View>
    );
};

export default OtpVerification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        // alignItems: "center",
        // justifyContent: "center"
    }
});
