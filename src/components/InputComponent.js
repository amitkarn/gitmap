import React, {Component} from "react";
import PropTypes from "prop-types";
import {View, TextInput} from "react-native";

const InputComponent = (props)=> {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            height: 48,
            padding: 10,
            margin: 10
        }}>
            <TextInput style={{
                height: 50,
                padding: 10,
                flex: 1,
                backgroundColor: '#f8f8f8',
                borderRadius: 5,
                borderColor: '#eaeaea',
                borderWidth: 2
            }}
                       autoCapitalize={'none'}
                       onChangeText={(text) => props.onSearchKeywordChange(text)}
                       placeholder={"Start searching using name"}
                       placeholderTextColor={'#ababab'}
                       underlineColorAndroid="transparent"/>
        </View>
    );
}

InputComponent.propTypes = {
    onSearchKeywordChange: PropTypes.func.isRequired
}

export default InputComponent;
