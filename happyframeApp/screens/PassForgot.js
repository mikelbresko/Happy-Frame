import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native'

import Container from '../components/Container';
import styles from '../components/styles';
import {RemoteMongoClient, Stitch, UserPasswordAuthProviderClient} from "mongodb-stitch-react-native-sdk";

export default class PassForgot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        }
    }

    render() {
        const {route, navigation} = this.props;
        return(
            <Container>
                <View style={styles.centerSceen}>
                    <Text style={styles.title}> Enter email address </Text>
                    <Text style={styles.title}> to reset password </Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        value={this.state.email}
                        onChangeText = {(email) => this.setState({email})}/>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => this.handlePassSent()}>
                            <Text style={styles.btnText}> Recover </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btmBar}>
                        <View style={styles.wideBtnContainer}>
                            <TouchableOpacity
                                style={styles.wideBtn}
                                onPress={() => navigation.navigate(route.params.loc)}>
                                <Text style={styles.wideBtnText}> Cancel </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Container>
        )
    }

    handleResetState = () => {
        this.setState({email: ''});
    };


    handlePassSent = () => {
        const client = Stitch.getAppClient('taskmanager-zhnlv');
        const {route, navigation} = this.props;
        const emailPassClient = client.auth
            .getProviderClient(UserPasswordAuthProviderClient.factory);
        const userEmail = this.state.email;

        if (userEmail === ''){
            Alert.alert('Something went wrong!', 'Please enter an email', [
                {text: 'Ok', onPress: () => this.handleResetState()},
            ], {cancelable: false});
            return;
        }

        emailPassClient.sendResetPasswordEmail(userEmail).then(() => {
            Alert.alert('Email Sent', 'Check your email for more instructions.', [
                {text: 'Ok', onPress: () => navigation.navigate(route.params.loc)},
            ], {cancelable: false});
        }).catch(err => {
            Alert.alert('Something went wrong!', 'There was an error sending the password reset email', [
                {text: 'Ok', onPress: () => this.handleResetState()},
            ], {cancelable: false});
        });

    };

}
