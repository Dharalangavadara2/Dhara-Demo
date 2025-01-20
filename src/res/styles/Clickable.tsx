import React, { Component, ReactElement } from 'react';
import { Falsy, RecursiveArray, RegisteredStyle, TouchableOpacity, ViewStyle } from 'react-native';

interface ClickableProps {
    children?: ReactElement | ReactElement[],
    borderLess?: boolean,
    rippleColor?: string,
    style?: StyleProp<ViewStyle>,
    activeOpacity?: number,
    onPress?: () => void,
    disabled?: boolean,
    checkInternet?: boolean
    onDoublePressDelay?: number
}

type StyleProp<T> =
    | T
    | RegisteredStyle<T>
    | RecursiveArray<T | RegisteredStyle<T> | Falsy>
    | Falsy;

class Clickable extends Component<ClickableProps, any> {


    state = {
        disabled: false
    }

    debouncedOnPress = () => {
        //  requestAnimationFrame(() => {

      
            this.props.onPress && this.props.onPress();

        // });

    }

    // onPress = debounce(this.debouncedOnPress, 200, { leading: true, trailing: false });

    onPress = () => {
        this.setState({ disabled: true })
        this.debouncedOnPress()
        setTimeout(() => {
            this.setState({ disabled: false })
        }, this.props.onDoublePressDelay || 1000)
    }

    render() {
        const { children, borderLess, rippleColor, style, activeOpacity, disabled } = this.props
        return (
            <TouchableOpacity
                disabled={this.state.disabled || disabled}
                activeOpacity={activeOpacity || 0.5} style={style}
                onPress={this.onPress}>
                {children}
            </TouchableOpacity>

        );
    }

}

export default Clickable

