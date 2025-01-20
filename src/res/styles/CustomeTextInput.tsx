import React, { Component } from 'react';
import _ from "lodash";
import {
    I18nManager,
    Image, ImageURISource,
    KeyboardTypeOptions, StyleSheet,
    Text,
    TextInput, TextStyle, View,
    ViewStyle
} from 'react-native';
import { FontName } from './FontName';
import Clickable from './Clickable';


interface CustomTextInputProps {


    style?: ViewStyle,
    label?: string,
    value?: string,
    onChangeText?: (text: string) => void,
    password?: boolean
    fontSize?: number,
    inputType?: KeyboardTypeOptions,
    textColor?: string,
    editable?: boolean,
    rightText?: string,
    rightTextStyle?: TextStyle,
    rightIcon?: number | ImageURISource,
    onClickCountry?: () => void,
    multiline?: boolean,
    minHeight?: number,
    onPress?: () => void,
    onRightClick?: () => void,
    country?: any,
    hasCountry?: boolean,
    hasCurrency?: any,
    selectedCurrency?: any,
    selectedCurrencySymbol?: any,
    secondaryCurrency?: any,
    disabledFloating?: boolean,
    error?: string
    onRef?: (ref: TextInput) => void,
    autoFocus?: boolean,
    maxLength?: number,
    blockSpecialChars?: boolean,
    blockNumbers?: boolean,
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    isOptional?: boolean,
    isExtraField?: boolean,
    disabled?: boolean,
    onFocus?: () => void,
    numberOfLines?: number,
    fromtools?: boolean
}

interface CustomTextInputState {

    isFocused: boolean,
    underlineColor: string,
    text: string,
    x: number,
    y: number,
    width: number,
    height: number,
    error: string,
}

export default class CustomTextInput extends Component<CustomTextInputProps, CustomTextInputState> {

    state = {
        isFocused: false,
        underlineColor: '#EEEEEE',
        text: '',
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        error: ""
    };

    measureView(event: any) {

        this.setState({
            x: event.nativeEvent.layout.x,
            y: event.nativeEvent.layout.y,
            width: event.nativeEvent.layout.width,
            height: event.nativeEvent.layout.height
        })
    }

    textInput: any = null

    componentDidMount = () => {


        if (this.props.onRef) {
            this.props.onRef(this.textInput)
        }
    }

    handleFocus = () => this.setState({ isFocused: true, underlineColor: '#212121' }, this.props.onFocus);
    handleBlur = () => this.setState({ isFocused: false, underlineColor: '#212121' });

    render() {

        const {
            label, value, onChangeText, style, password, fontSize, inputType, textColor, editable, rightText, rightTextStyle,
            rightIcon, onClickCountry, multiline, maxLength, minHeight, autoFocus, onPress, onRightClick, country, hasCountry, hasCurrency, selectedCurrency, selectedCurrencySymbol, secondaryCurrency, disabledFloating, error,
            blockSpecialChars, blockNumbers, autoCapitalize, disabled, isOptional = true, numberOfLines, fromtools,
            isExtraField = false
        } = this.props
        let { isFocused, text } = this.state;
        // let displayLabel = isOptional == false ? label : label
        let displayLabel = isOptional == false ? label + " *" : label

        isFocused = isFocused || text.length > 0 || value != undefined && value.length > 0
        const labelStyle: TextStyle = {
            position: 'absolute',
            marginTop: hasCountry && !isFocused ? 4 : 0,
            left: -3, //hasCountry ? this.state.width :
            fontFamily: FontName.regular,
            top: -10,
            backgroundColor: 'white',
            maxWidth: "auto",
            fontSize: !isFocused ? 16 : 14,
            marginStart: hasCountry ? 22 : hasCurrency ? 82 : 20,
            paddingLeft: 4,
            paddingRight: 4,
            color: _.isEmpty(this.props.error) ? '#5F6C85' : '#E8453E',
        };

        const errorLabelStyle = {
            marginTop: 8,
            fontFamily: FontName.regular,
            fontSize: 14,
            color: '#E8453E',
        };
        const textAlign = I18nManager.isRTL ? "right" : "left"
        return (
            <View style={{ width: "100%" }}>
                <View style={{
                    height: 56,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    // borderRadius: _.isEmpty(this.props.error) ? 6 : 0,
                    borderRadius: 6,
                    paddingStart: 20,
                    borderBottomColor: _.isEmpty(this.props.error) ? this.state.borderColor : '#E8453E', ...style,
                    // borderLeftColor: _.isEmpty(this.props.error) ? Colors.RedColor500 : Colors?.RedColor500,
                    borderColor: this.state.isFocused ? '#94A0B8' : '#F8F9FC',
                    // borderColor: (!_.isEmpty(this.props.error) || this.state.isFocused)  ?  !_.isEmpty(this.props.error) ? Colors.RedColor500 :Colors.lightGray : Colors.textinputbgcolor ,
                    backgroundColor: this.state.isFocused ? 'white' : '#F8F9FC',
                }}>
                    {isFocused && !disabledFloating ? <Text style={labelStyle}>
                        {displayLabel}
                    </Text> : null}

                    <View style={{
                        flexDirection: 'row', alignItems: 'center'
                    }}>
                        {hasCountry ?
                            <View onLayout={(event) => this.measureView(event)}>
                                <Clickable disabled={editable == false} onPress={onClickCountry}
                                    style={styles.countryView}>
                                    <Image source={country?.flag }
                                        style={styles.CountryImg} />
                                    <Text style={styles.Countrytext}>{country?.code}</Text>
                                    {/* <Image style={[styles.downImage]} source={Images.ic_DownBlackArrow} /> */}

                                </Clickable>
                            </View> : null}

                        {hasCurrency ?
                            <View onLayout={(event) => this.measureView(event)}>
                                <Clickable disabled={secondaryCurrency ? false : true} onPress={onClickCountry}
                                    style={styles.countryView}>

                                    <Text style={[styles.Countrytext, { marginRight:8, marginLeft: 1 }]}>{selectedCurrencySymbol}</Text>
                                    {/* <Image style={[styles.downImage, {
                                        width: 18, height: 18, marginRight: ResponsivePixels.size8
                                    }]} source={Images.ic_DownBlackArrowIcon} /> */}
                                    <View style={{
                                        width: 1,
                                        height: 28, backgroundColor: "#E2E2E2", marginRight: 16
                                    }}></View>
                                </Clickable>
                            </View> : null}
                        {editable == undefined || editable == true ?
                            <TextInput
                                ref={(ref) => this.textInput = ref}
                                value={value}
                                placeholderTextColor={_.isEmpty(this.props.error) ? '#94A0B8' : '#E8453E'}
                                placeholder={!isFocused ? displayLabel : undefined
                                }
                                multiline={multiline}
                                autoFocus={autoFocus}
                                maxLength={maxLength}
                                selectTextOnFocus={editable}
                                keyboardType={inputType}
                                returnKeyType="done"
                                onChangeText={(text) => {

                                    let value = text
                                    if (inputType == 'email-address') {
                                        let regexp = /^\S*$/;
                                        if (!regexp.test(text)) {
                                            return
                                        }
                                    }
                                    if (!password && inputType === "default") {
                                        value = value.replaceAll("@", '')
                                    }
                                    else if (inputType === 'phone-pad') {

                                        value = text.replace(/\D[^\.]/g, "");
                                    }
                                    else if (inputType === 'numeric') {
                                        // let rgx = /^[0-9]*\.?[0-9]*$/;
                                        let rgx = fromtools ? /^\d+(\.\d{1,2})?$/ : /^[0-9]*\.?[0-9]*$/;
                                        const result = value.match(rgx);
                                        console.log("Result", result)
                                        if (result)
                                            value = result[0]
                                        else
                                            return
                                    }
                                    if (text && blockSpecialChars) {
                                        value = value.replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g, "")
                                    }
                                    this.setState({ text: value, error: '' })
                                    if (onChangeText)
                                        onChangeText(value)
                                }}
                                autoCapitalize={autoCapitalize || (password ? "none" : "words")}
                                secureTextEntry={password}
                                style={[styles.textInputStyle, {
                                    height: minHeight, fontSize: fontSize || 17,
                                    color: textColor || '#212121',
                                    textAlign: textAlign,
                                    fontFamily: FontName.regular
                                }]}
                                onFocus={this.handleFocus}
                                selectionColor={_.isEmpty(this.props.error) ? '#757575' : '#E8453E'}
                                onBlur={this.handleBlur}
                            /> :

                            <Text numberOfLines={numberOfLines} style={[styles.textInputStyle, {
                                fontSize: fontSize || 17,
                                color: _.isEmpty(value) ? '#212121' : textColor || '#212121',
                                textAlign: "left",

                            }]}
                                disabled={disabled}
                                onPress={onPress}>
                                {_.isEmpty(value) ? isExtraField ? displayLabel : label : value}
                            </Text>
                        }

                        {/* {rightIcon ? <ImageButton onPress={onRightClick} source={rightIcon}
                            style={{
                                width: ResponsivePixels.size24,
                                height: ResponsivePixels.size24,
                                marginStart: ResponsivePixels.size8,
                                marginEnd: ResponsivePixels.size16,
                                resizeMode: "contain"
                            }} /> : null} */}
                        {rightText ? <Text onPress={onRightClick} style={[{
                            marginHorizontal:8,
                            textAlignVertical: "center"
                        }, rightTextStyle]}>{rightText}</Text> : null}

                    </View>
                </View>
                {!_.isEmpty(error) ? <Text style={errorLabelStyle}>
                    {error}
                </Text> : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({

    coontainerStyle: {
        flexDirection: 'row',
        margin: 8,
        backgroundColor: 'white',
        height: 50
    },
    textInputStyle: {
        paddingStart: 0, flex: 1,
        fontFamily: FontName.regular,
        borderBottomWidth: 0,
        paddingVertical: 10,
        textAlign: "left",
    },
    errorStyle: {
        marginTop: 8,
        fontFamily: FontName.regular,
        fontSize: 12,
        color: '#E8453E',
        textAlign: 'left'
    },
    countryView: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 40,
    },
    CountryImg: {
        alignItems: 'center',
        width: 32,
        height: 32,
        resizeMode: "contain"

    },
    Countrytext: {
        fontFamily: FontName.regular,
        fontSize: 17,
        marginLeft: 8,
        color: '#212121',
    },
    downImage: {
        marginRight: 16,
        marginLeft: 8,
    },
    SperatorLine: {
        width: 2,
        height: 24,
        backgroundColor: 'black',
        alignSelf: 'center',
        marginStart: 6,
    },
})