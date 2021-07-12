import React, {Component} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native'

import Container from '../components/Container';
import styles from '../components/styles';
import {NavigationContext} from "@react-navigation/native";

export default class SureDeleteMedia extends Component {
    static contextType = NavigationContext;

    render() {
        const navigation = this.context;
        return(
            <Container>
                <Text style={styles.title}> Are you sure you want </Text>
                <Text style={styles.title}> to delete this media? </Text>
                <View style={styles.centerTop}>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('EditPhoto')}>
                            <Text style={styles.btnText}> No </Text>
                        </TouchableOpacity>
                        <Text></Text>
                        <Text></Text>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('SuccessMediaDeleted')}>
                            <Text style={styles.btnText}> Yes </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        )
    }
}
