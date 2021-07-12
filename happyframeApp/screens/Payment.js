import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native'

import Container from '../components/Container';
import styles from '../components/styles';
import {NavigationContext} from "@react-navigation/native";

export default class Payment extends Component {
    static contextType = NavigationContext;

    render() {
        const navigation = this.context;
        return(
            <Container>
                <View>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => navigation.navigate('Settings')}>
                        <Text style={styles.btnText}> HOME </Text>
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }


}
