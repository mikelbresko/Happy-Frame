import React, { Component, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image, ImageBackground, TouchableWithoutFeedback } from 'react-native';

import Container from '../components/Container';
import styles from '../components/styles';
import {RemoteMongoClient, Stitch} from "mongodb-stitch-react-native-sdk";


export default class Frames extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            user: '',
            email: '',
            frames: [],
        };
        this.getUserInfo().then(r => console.log("done loading"));

    }


    getUserInfo = async () => {
        const client = Stitch.getAppClient('taskmanager-zhnlv');
        const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('UserAccounts');
        await db.collection('UserCred').find({owner_id: client.auth.user.id}, {limit: 100}).asArray()
            .then(docs => {
                this.setState({user: docs[0].name});
                this.setState({frames: docs[0].frames});
                this.setState({email: docs[0].email});
                console.log(this.state.frames);
            })
            .catch(err => console.log("retrieval bad", err));
        this.setState({isLoaded: true});
    };

    render() {
        const {route, navigation} = this.props;
        if (route.params.load){
            this.getUserInfo().then(r => console.log("done loading"));
            route.params.load = false;
        }
        const email = this.state.email;
        return(
            <Container>

                <Text style={styles.title}> Select a frame </Text>
                <Text style={styles.title}> to send happy </Text>
                <View style={styles.listBG}>
                    <TouchableOpacity style={{paddingTop: 8, paddingBottom: 20}}
                                      onPress={() => this.handleChangeLoc('NewFrame', '')}>
                        <Text style={{fontSize: 24}}> Add a new frame! </Text>
                    </TouchableOpacity>
                    <FlatList
                        keyExtractor={(item) => item.name}
                        data={this.state.frames}
                        renderItem={({ item }) => (
                            <View style={styles.listItem }>
                                <TouchableOpacity
                                    onPress={() => this.handleChangeLoc('FrameOwner', item.name, item.piId)}>
                                    <Text style={styles.listText}>{item.name}</Text>
                                </TouchableOpacity>
                            </View>
                        )}/>
                </View>

                <View style={styles.btmBar}>

                    <ImageBackground
                        source={require('../images/AddFriend.png')}
                        style={styles.imgFriend}
                        resizeMode='contain'>
                        <View style={styles.icon}>
                            <TouchableOpacity style={styles.invisBtn}
                                              onPress={() => this.handleChangeLoc('AddFriend', '')}>
                               <Text style={styles.invisText}> </Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>

                    <ImageBackground
                        source={require('../images/Settings.png')}
                        style={styles.imgSettings}
                        resizeMode='contain'>

                        <View style={styles.icon}>
                            <TouchableOpacity style={styles.invisBtn}
                                              onPress={() => this.handleChangeLoc('Settings', email)}>
                                <Text style={styles.invisText}> </Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
            </Container>
        )
    }

    handleChangeLoc = (location, name, pi) => {
        const {navigation} = this.props;

        navigation.navigate(location, {
            user: name,
            pi: pi,
        })
    }
}

