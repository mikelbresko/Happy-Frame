import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native'

import LoginContainer from '../components/Container';
import styles from '../components/styles';
import {NavigationContext} from "@react-navigation/native";
import Container from '../components/Container';

export default class SharedFrames extends Component {
    static contextType = NavigationContext;

    render() {
        const friend = 'Friend';
        const navigation = this.context;
        return(
            <Container>
                <View style={styles.centerSceen}>
                    <Text style={styles.title}> You shared frames with </Text>
                    <Text style={styles.title}> { friend } </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}>
                        <Text>HOME</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }
}
