import React, {Component} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native'

import Container from '../components/Container';
import styles from '../components/styles';
import {NavigationContext} from "@react-navigation/native";

export default class SuccessUpload extends Component {
    static contextType = NavigationContext;

    render() {
        const owner = 'Owner';
        const navigation = this.context;
        return(
            <Container>
                <View style={styles.centerSceen}>
                    <Text style={styles.title}> Success! </Text>
                    <Text style={styles.title}> You uploaded to </Text>
                    <Text style={styles.title}> { owner }'s Frame </Text>
                </View>
                <View style={styles.btmBtn}>
                    <TouchableOpacity style={styles.btn}
                                      onPress={() => navigation.navigate('Frames')}>
                        <Text style={styles.btnText}> Okay </Text>
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }
}
