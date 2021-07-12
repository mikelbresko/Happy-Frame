import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native'

import Container from '../components/Container';
import styles from '../components/styles';

export default class AddFriend extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fName: '',
            fEmail: '',
        }
    }


    render() {
        const navigation = this.props.navigation;
        return (
            <Container>

                <View style={styles.centerSceen}>
                    <View style={styles.titlePadding}>
                        <Text style={styles.title}> Invite a Friend! </Text>
                    </View>

                    <TextInput
                        style={styles.input}
                        placeholder="Friend's Name"
                        value={this.state.fName}
                        onChangeText = {(fName) => this.setState({fName})}/>
                    <TextInput
                        style={styles.input}
                        placeholder="Friend's Email Address"
                        value={this.state.fEmail}
                        onChangeText = {(fEmail) => this.setState({fEmail})}/>
                </View>

                <View style={styles.btmScreen}>
                    <View style={styles.wideBtnContainer}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate('WhichFrames',{
                                fName: this.state.fName,
                                fEmail: this.state.fEmail,
                            })}>
                           <Text style={styles.btnText}> Submit </Text>
                        </TouchableOpacity>
                        <Text></Text>
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
}
