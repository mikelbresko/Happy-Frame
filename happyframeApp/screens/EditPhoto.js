import React, { Component, useState } from 'react';
import { Text, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native';

import Container from '../components/Container'
import styles from '../components/styles'
import {NavigationContext} from "@react-navigation/native";

export default class EditPhoto extends Component{
    static contextType = NavigationContext;

    render() {
        const navigation = this.context;
        const owner = 'Owner';
        const user = 'User';
        return(
            <Container>
                <Text style={styles.title}> Edit Photo </Text>
                <View>
                    <View style={styles.imgDisplayContainer}>
                        <Image
                            source={require('../images/Grid1.jpg')}
                            style={styles.imgDisplay}
                            resizeMode='contain'>
                        </Image>
                    </View>
                    <TextInput
                        style={styles.inputApp}
                        placeholder="Add Caption">
                    </TextInput>
                </View>
                <View style={styles.line2}></View>
                <Text style={{color: '#FFF', textAlign: 'center'}}> Uploaded by: { user } </Text>
                <Text style={{color: '#FFF', textAlign: 'center'}}> Upload Date: </Text>
                <View style={styles.wideBtnContainer}>
                    <TouchableOpacity style={styles.deleteBtnSplit}
                                      onPress={() => navigation.navigate('SureDeleteMedia')}>
                        <Text style={styles.deleteText}> DELETE MEDIA </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.wideBtnSplit}
                                      onPress={() => navigation.navigate('Frames')}>
                        <Text style={styles.wideBtnText}> Cancel </Text>
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }
}
