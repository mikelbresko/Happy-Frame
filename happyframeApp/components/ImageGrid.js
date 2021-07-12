import React, { Component, useState } from 'react';
import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native';

import Container from './Container';
import styles from './styles';

// const data = [
//     { name: 'A', id: '1' },
//     { name: 'B', id: '2' },
//     { name: 'C', id: '3' },
//     { name: 'D', id: '4'},
// ];
const data = [
    { image: require('../images/Grid1.jpg'), id: '1' },
    { image: require('../images/Grid2.jpg'), id: '2' },
    { image: require('../images/Grid3.jpg'), id: '3' },
    { image: require('../images/Grid4.jpg'), id: '4' },
    { image: require('../images/Grid5.png'), id: '5' },
    { image: require('../images/Grid6.png'), id: '6' },
    { image: require('../images/Grid7.jpg'), id: '7' },
    { image: require('../images/Grid8.jpg'), id: '8' },
    { image: require('../images/Grid9.jpg'), id: '9' },
    { image: require('../images/Grid10.jpg'), id: '10' },
];

const formatData = (frames, numColumns) => {
    const numFullRows = Math.floor(data.length / numColumns);
    let numElementsLastRow = data.length - (numFullRows * numColumns);
    while (numElementsLastRow !== numColumns && numElementsLastRow !== 0) {
        data.push({ key: 'blank-${numElementsLastRow}', empty: true });
        numElementsLastRow = numElementsLastRow + 1;
    }
    return data;
}
const numColumns = 3;
const gridStyles = StyleSheet.create({
    imgGridItem: {
        backgroundColor: '#4D243D',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 3,
        height: Dimensions.get('window').width / numColumns,
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    imgStyle: {
        width: '100%',
        height: '100%',
    }
});

class ImageGrid extends React.Component {
    renderItem=({ item }) => {
        if (item.empty === true) {
            return <View style={[gridStyles.imgGridItem, gridStyles.itemInvisible]} />;
        }
        return (
        <View style={gridStyles.imgGridItem}>
            <Image style={gridStyles.imgStyle} source={{ url: item.image }} />
        </View>
        );
    };
    render() {
    return(
        <View>
            <FlatList
            data={formatData(data, numColumns)}
            keyExtractor={(item) => item.id}
            data={data}
            renderItem={this.renderItem}
            numColumns={numColumns}
            key={numColumns} />

            <TouchableOpacity>
                <Link to="/FrameOwner"><Text> Owner </Text></Link>
            </TouchableOpacity>
        </View>
    )
    }
}

export default ImageGrid;
