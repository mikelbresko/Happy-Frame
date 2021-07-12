import React, { Component, useState } from 'react';
import {Text, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import ImageSize from 'react-native-image-size'

import Container from '../components/Container'
import styles from '../components/styles'
import {RemoteMongoClient, Stitch} from "mongodb-stitch-react-native-sdk";

export default class AddCaption extends Component{
    constructor(props) {
        super(props);
        this.state = {
            caption: '',
            width: 0,
            height: 0,
        }
    }

    render() {
        const {route, navigation} = this.props;
        const photo = route.params.p;
        return(
            <Container>
                <Text style={styles.title}> Add Caption </Text>
                <View>
                    <View style={{ alignItems: "center", justifyContent: "center", marginVertical: 30 }}>
                        {photo && (
                            <Image
                                source={{ uri: photo.uri }}
                                style={{ width: 300, height: 300 }} />
                        )}
                    </View>
                    <TextInput
                        style={styles.inputApp}
                        placeholder="Add Caption"
                        value={this.state.caption}
                        onChangeText = {(caption) => this.setState({caption})}
                    >
                    </TextInput>
                </View>
                <View style={styles.line2}></View>
                <View style={styles.wideBtnContainer}>
                    <TouchableOpacity style={styles.wideBtnSplit}
                                      onPress={() => this.handleUpload(photo)}>
                        <Text style={styles.deleteText}> DONE </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.wideBtnSplit}
                                      onPress={() => navigation.navigate('FrameOwner')}>
                        <Text style={styles.wideBtnText}> Cancel </Text>
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }

    handleResetState = () => {
        this.setState({caption: ''});
    };

    handleUpload = async (photo) => {
        const {route, navigation} = this.props;
        const client = Stitch.getAppClient('taskmanager-zhnlv');
        const dbPhoto = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas')
            .db('Facility1');


        // await Image.getSize(photo.uri, (width, height) => {
        //     this.setState({width, height})
        // });

        await ImageSize.getSize(photo.uri).then(size =>{
            this.setState({width: size.width});
            this.setState({height: size.height});
        })

        console.log(this.state.width);
        console.log(this.state.height);

        const newPhoto = {
            img: photo.data,
            imgType: 'png',
            imgWidth: this.state.width,
            imgHeight: this.state.height,
            imgCaption: this.state.caption,
        };

        await dbPhoto.collection(`${route.params.pi}`).insertOne(newPhoto)
            .then(r =>
                console.log(`success insert: ${r.insertedId}`),
            )
            .catch(err => {
                console.log(err);
                this.setState({imgCaption: ''});
                Alert.alert('Something went wrong', 'Please try again.', [
                    {text: 'Ok', onPress: () => navigation.navigate('FrameOwner')},
                ], {cancelable: false})
            })

        this.setState({imgCaption: ''});
        Alert.alert('Upload Success!', '', [
            {text: 'Ok', onPress: () => navigation.navigate('FrameOwner')},
        ], {cancelable: false})

    };
}
