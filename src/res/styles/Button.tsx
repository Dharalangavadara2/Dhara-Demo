import React, { useState } from 'react';
import { ActivityIndicator, Keyboard, Platform, StyleProp, Text, TextStyle, TouchableHighlight, View } from 'react-native';
import { FontName } from './FontName';
import Colors from './Colors';


interface ButtonProps {

    style?: any,
    onPress?: () => void,
    disabled?: boolean,
    bordered?: boolean,
    disableAllCaps?: boolean,
    title?: string,
    loading?: boolean,
    buttonTextStyle?: StyleProp<TextStyle>,
    checkInternet?: boolean,
    borderColor?: string,
    onDoublePressDelay?: number,
    showProgress?: boolean,
    bgColor?: string
}


const Button: React.FC<ButtonProps> = ({ style, onPress, disabled, checkInternet, onDoublePressDelay,
    loading, bordered, disableAllCaps, title, buttonTextStyle, showProgress, bgColor }) => {
    const [disabledDoubleClick, setDisabledDoubleClick] = useState(false)
    const textColor: any = buttonTextStyle?.color
    const borderFinalColor = bordered ? textColor || Colors.SecondaryColor700 : undefined
    const button = {
        backgroundColor: bordered ? "transparent" : disabled ? Colors.ButtonColor : Colors.SecondaryColor700,
        height: 56,
        opacity: disabled ? 0.5 : 1,
        borderColor: Colors.PrimaryColor500,
        borderWidth: bordered ? 1 : 0,
        borderRadius: 100,
        alignItems: "center", justifyContent: "center"
    }
    const textStyle =
        [{
            color: bordered ? Colors.PrimaryColor500 : disabled ? (Colors.Defaultwhite) : (Colors.Defaultwhite),
            fontFamily: FontName.bold,
            fontSize: 16,
            textAlign: "center"
        },
            buttonTextStyle
        ]
    const debouncedOnPress = () => {
        Keyboard.dismiss()

       
            onPress && onPress();
    }

    const _onPress = () => {

        setDisabledDoubleClick(true)
        debouncedOnPress()
        setTimeout(() => {
            setDisabledDoubleClick(false)
        }, onDoublePressDelay || 2000)
    }

    return (
        <TouchableHighlight
            underlayColor={Colors.SecondaryColor500With10}
            disabled={disabled || disabledDoubleClick || loading || showProgress}
            style={[
                button,
                style,
                {
                    backgroundColor: Platform.select({
                        ios: bgColor ? bgColor : bordered ? "transparent" : '#314FA4',
                        android: bgColor ? bgColor : bordered ? "transparent" : '#314FA4',
                    })
                },
            ]}
            onPress={_onPress}>
            <View style={{ flexDirection: 'row', }}>
                {
                    showProgress ? <ActivityIndicator color={Colors.Defaultwhite} /> :
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={textStyle}>{disableAllCaps ? title : title}</Text>
                            {loading ?
                                <ActivityIndicator color={Colors.Defaultwhite} style={{ marginStart: 12 }} /> : null}
                        </View>
                }
            </View>
        </TouchableHighlight>
    );
}

export default Button