import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native'

import Container from '../components/Container';
import styles from '../components/styles';
import {NavigationContext} from "@react-navigation/native";
import {RemoteMongoClient, Stitch} from "mongodb-stitch-react-native-sdk";

export default class NewFrame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            frameCode: '',
            frameName: '',
            yourName: '',
        }
    }

    render() {
        const navigation = this.props.navigation;
        return(
            <Container>
                <View style={styles.centerSceen}>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text style={styles.title}> Add a New Frame</Text>

                    <TextInput
                        style={styles.input}
                        placeholder='Frame Code (sent by email)'
                        value={this.state.frameCode}
                        onChangeText = {(frameCode) => this.setState({frameCode})}/>
                    <TextInput
                        style={styles.input}
                        placeholder='Frame Nickname'
                        value={this.state.frameName}
                        onChangeText = {(frameName) => this.setState({frameName})}/>
                    <TextInput
                        style={styles.input}
                        placeholder='Your Name (as it will appear on frame)'
                        value={this.state.yourName}
                        onChangeText = {(yourName) => this.setState({yourName})}/>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => this.handleAddFrame()}>
                            <Text style={styles.btnText}> Add </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Text> </Text>
                <Text> </Text>

                <View style={styles.btmScreen}>
                    <View style={styles.wideBtnContainer}>
                        <TouchableOpacity
                            style={styles.wideBtn}
                            onPress={() => navigation.navigate('Frames')}>
                            <Text style={styles.wideBtnText}> Cancel </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        )
    }

    handleResetState = () => {
        this.setState({frameCode: ''});
        this.setState({frameName: ''});
        this.setState({yourName: ''});
    };

    handleAddFrame = () => {
        const navigation = this.props.navigation;
        const frameCode = this.state.frameCode;
        const frameName = this.state.frameName;
        const yourName = this.state.yourName;
        const client = Stitch.getAppClient('taskmanager-zhnlv');
        const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('UserAccounts');

        if (frameCode === '' || frameName === '' || yourName === ''){
            Alert.alert('Something went wrong!', '', [
                {text: 'Ok', onPress: () => this.handleResetState()},
            ], {cancelable: false});
            return;
        }

        db.collection('UserCred')
            .updateOne({owner_id: client.auth.user.id}, {$push:{frames:{name:frameName, piId: frameCode}}})
            .then(
                Alert.alert('Frame added!', '', [
                    {text: 'Ok', onPress: () => navigation.navigate('Frames', {load: true})},
                ], {cancelable: false})
            )
            .catch(err =>{
                console.log("Error adding: ", err);
                Alert.alert('Something went wrong!', 'Please try again.', [
                    {text: 'Ok', onPress: () => this.handleResetState()},
                ], {cancelable: false})
            })




    }


}
