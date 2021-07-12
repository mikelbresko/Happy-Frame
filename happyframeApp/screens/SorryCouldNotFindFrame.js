import React, {Component} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native'

import Container from '../components/Container';
import styles from '../components/styles';
import {NavigationContext} from "@react-navigation/native";

export default class SorryCouldNotFindFrame extends Component {
    static contextType = NavigationContext;

    render() {
        const navigation = this.context;
        const owner = 'Owner';
        return(
            <Container>
                <View style={styles.titlePadding}>
                    <Text style={styles.header}> Sorry! </Text>
                </View>
                <Text style={styles.title}> Could not find </Text>
                <Text style={styles.title}> { owner }'s Frame </Text>

                <View style={styles.centerScreen}>
                    <Text style={styles.title}> Please re-enter </Text>
                    <Text style={styles.title}> frame code from email </Text>
                </View>

                <View style={styles.btmBtn}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => navigation.navigate('NewFrame')}>
                        <Text style={styles.btnText}> Okay </Text>
                    </TouchableOpacity>
                </View>

            </Container>
        )
    }
}
