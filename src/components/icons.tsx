import React from "react";

import {View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

const IconText = ({name, color, text, style} : any)=> {

    return (
      <View style={styles.container}>
        <Icon name={name} size={50} color={color} />
        <Text style={style}>{text}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    }
})
export default IconText