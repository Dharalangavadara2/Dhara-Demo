import React from 'react';
import { Image, TouchableOpacity, ImageURISource, ImageStyle, ViewStyle } from 'react-native'

interface ImageButtonProps {

    source: ImageURISource | number,
    style?: ImageStyle,
    onPress?: () => void,
    containerStyle?: ViewStyle
}

const ImageButton: React.FC<ImageButtonProps> = ({ source, style, onPress, containerStyle }) => {

    return (<TouchableOpacity onPress={onPress} style={containerStyle} >

        <Image style={{ ...styles.actionStyle, ...style }} source={source} />

    </TouchableOpacity>);
}

const styles = {


    actionStyle: {

    },


}

export default ImageButton;