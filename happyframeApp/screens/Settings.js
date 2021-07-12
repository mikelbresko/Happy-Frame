import React, { Component } from 'react';
import {Text, View, TouchableOpacity, Alert} from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native'

import Container from '../components/Container';
import styles from '../components/styles';
import {RemoteMongoClient, Stitch} from "mongodb-stitch-react-native-sdk";

export default class Settings extends Component {

    render() {
        const navigation = this.props.navigation;
        return(
            <>
                <Container>
                    <Text style={styles.header}> Settings </Text>
                    <View style={styles.line}></View>
                    <View>
                        <Text style={styles.box}> User Name </Text>
                        <Text style={styles.box}> User Email </Text>
                    </View>

                    <View style={styles.btmScreen}>
                        <TouchableOpacity
                            style={styles.btnSettings}
                            onPress={() => navigation.navigate('Payment')}>
                            <Text style={styles.box}> Manage Payment </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btnSettings}
                            onPress={() => navigation.navigate('PassForgot', {loc: 'Settings'})}>
                            <Text style={styles.box}> Change Password </Text>
                        </TouchableOpacity>
                        <View style={styles.wideBtnContainer}>
                            <TouchableOpacity
                                style={styles.wideBtn}
                                onPress={() => navigation.navigate('Frames')}>
                                <Text style={styles.deleteText}> DONE </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.deleteBtn}
                                onPress={() => this.handleDeleteAccount()}>
                               <Text style={styles.deleteText}> DELETE ACCOUNT </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Container>
            </>
        )
    }

    handleDeleteAccount = () => {
        const navigation = this.props.navigation;
        Alert.alert('Are you sure?', 'Press \'Ok\' to delete your account.', [
            {text: 'Cancel', onPress: () => navigation.navigate('Settings'), style: 'cancel' },
            {text: 'Ok', onPress: () => this.deleteAccount()},
        ], {cancelable: true});

    };

    deleteAccount = () => {
        const navigation = this.props.navigation;
        const client = Stitch.getAppClient('taskmanager-zhnlv');
        const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('UserAccounts');

        db.collection('UserCred')
            .deleteOne({ owner_id: client.auth.user.id})
            .then(Alert.alert('Success', 'Account deleted', [
                {text: 'Ok', onPress: () => navigation.navigate('Home')},

            ], {cancelable: false}));
    }

}
