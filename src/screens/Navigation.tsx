import { CommonActions, StackActions } from "@react-navigation/native";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { FontName } from "../res/styles/FontName";
import Colors from "../res/styles/Colors";
import CustomTextInput from "../res/styles/CustomeTextInput";
import Button from "../res/styles/Button";


export const navigationRef: any = React.createRef();

export const navigate = (name: string, params?: any) => {
    navigationRef.current?.navigate(name, params);
}

export const push = (name: string, params?: any) => {
    navigationRef.current?.dispatch(
        StackActions.push(name, params)
    );
}
export const replace = (name: string, params?: any) => {
    navigationRef.current?.dispatch(
        StackActions.replace(name, params)
    );
}

export const navigateFood = (name: string, params?: any) => {
    navigationRef.current?.navigate("FoodHome", { screenName: name, params });
}

export const getRoute = () => {
    return navigationRef.current?.getCurrentRoute()
}

export const goBack = (name?: string) => {
    navigationRef.current?.goBack(name);
}

export const reset = (name: string, params?: any) => {

    navigationRef.current?.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [
                {
                    name: name,
                    params: params
                },
            ],
        })
    );
};
export const ForgotPassword = ({ route }) => {
    console.log("roue...", route?.params?.data);

    const otp: any = route?.params?.data;







    const onSubmitClicked = () => {
        navigate('ResetPassword');

    };


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
                    fontFamily: FontName.extraBold,

                    fontSize: 36,
                    color: '#3F444D',
                }}>Forgot Password?</Text>
            </View>
            <View style={{
                marginTop: 13,
                paddingHorizontal: 13
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
                marginTop: 16
            }}>
                <View style={{ padding: 10 }}>
                    <CustomTextInput
                        isOptional={true}
                        editable={false}

                        value={otp} label={'Email'}
                        style={{
                            marginTop: 10,
                        }} inputType={'password'} />
                </View>

            </View>
            {/* {timer ? */}





            <Button
                onPress={onSubmitClicked}
                disabled={false}
                title={'Submit'} style={{
                    marginTop: 30,
                    marginBottom: 5,
                    marginHorizontal: 16,
                }}
            >

            </Button>

        </View>
    );
};
