import React from "react";
import PropTypes from "prop-types";
import {ActivityIndicator, FlatList, Text, StyleSheet, TouchableHighlight, View, Image, Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');
const ResultListComponent = (props) => {
    console.log(props);

    if (props.isFetching) {
        return (
            <View>
                <ActivityIndicator style={styles.centering}
                                   size="large"
                />
            </View>
        );
    }


    if (!props.items || props.items.length == 0) {
        return (
            <View>
                <Text style={styles.rowLayout}>No results found</Text>
            </View>
        );
    }

    if (props.items && !props.isFetching) {
        return (
            <View>
                <FlatList
                    data={props.items && props.items.items ? props.items.items : []}
                    style={{flex: 1}}
                    keyExtractor={(x, i)=>i}
                    renderItem={({item, index}) => <Row userData={item}
                                                        onPressRow={ (value) => props.onPressRow(value) }/>}/>
            </View>
        );
    }
}

const Row = (props) => {
    console.log(props);
    return (
        <TouchableHighlight onPress={() => props.onPressRow(props.userData.value) }>
            <View style={styles.rowLayout}>
                <Image source={{uri: props.userData.avatar_url}} style={{height: 50, width: 50}}/>
                <Text>{props.userData.login}</Text>
            </View>
        </TouchableHighlight>
    );
}

ResultListComponent.propTypes = {
    items: PropTypes.any,
    isFetching: PropTypes.bool,
    onPressRow: PropTypes.func,
}

const styles = StyleSheet.create({
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    rowLayout: {
        padding: 16,
        backgroundColor: '#FFFFFF',
        width: width,
        borderBottomWidth: 1
    }
});

export default ResultListComponent;
