import React, { useState, Component } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native';
//import { CheckBox } from 'react-native-elements'

import Container from '../components/Container';
import styles from '../components/styles';
import {RemoteMongoClient, Stitch} from "mongodb-stitch-react-native-sdk";

export default class WhichFrames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frames: [],
            framesToSend: [],
            loaded: false,
        };
        this.getUserInfo().then(r => console.log('WhichFrames loaded'))
    }

    getUserInfo = async () => {
        const client = Stitch.getAppClient('taskmanager-zhnlv');
        const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('UserAccounts');
        await db.collection('UserCred').find({owner_id: client.auth.user.id}, {limit: 100}).asArray()
            .then(docs => {
                this.setState({frames: docs[0].frames});
                console.log(this.state.frames);
            })
            .catch(err => console.log("retrieval bad", err));

        this.setState({loaded: true})
    };


    render() {
        const {route, navigation} = this.props;
        return(
            <Container>
                <View style={styles.titlePadding}>
                    <Text style={styles.title}> Which Frames? </Text>
                </View>
                <View style={styles.listBG}>
                    <FlatList
                        keyExtractor={(item) => item.name}
                        data={this.state.frames}
                        renderItem={({ item }) => (
                            <View style={styles.listItem }>
                                <TouchableOpacity
                                    //onPress={() => this.handleChangeLoc('FrameOwner', item.name)}>
                                    >
                                    <Text style={styles.listText}>{item.name}</Text>
                                </TouchableOpacity>
                            </View>
                        )}/>
                </View>

                <View style={styles.btmScreen}>
                    <View style={styles.wideBtnContainer}>
                        <TouchableOpacity
                            style={styles.btn}
                            //onPress={() => navigation.navigate('Frames')}
                            >
                            <Text style={styles.btnText}> Invite </Text>
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
