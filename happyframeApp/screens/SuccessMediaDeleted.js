import React, {Component} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native'

import Container from '../components/Container';
import styles from '../components/styles';
import {NavigationContext} from "@react-navigation/native";

export default class SuccessMediaDeleted extends Component {
    static contextType = NavigationContext;

    render() {
        const navigation = this.context;
        return(
            <Container>
                <Text style={styles.header}> Success! </Text>
                <View style={styles.centerSceen}>
                    <Text style={styles.titleRed}> Media Deleted </Text>
                </View>
                <View style={styles.btmBtn}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => navigation.navigate('FrameOwner')}>
                        <Text style={styles.btnText}> Okay </Text>
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }
}
