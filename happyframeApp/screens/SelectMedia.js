import React, { useState, Component } from 'react';
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';

import Container from '../components/Container'
import styles from '../components/styles'
import ImageGrid from '../components/ImageGrid';
import ImagePicker from 'react-native-image-picker'

export default class SelectMedia extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photo: null,
        };
        this.handleChoosePhoto()
    }

    handleChoosePhoto = () => {
        ImagePicker.launchImageLibrary({}, (response) => {
            this.setState({photo: response});
        })
    };

    render() {
        const {route, navigation} = this.props;

        return(
            <Container>
                <View style={styles.titlePadding}>
                    <Text style={styles.header}> Select Media </Text>
                </View>

                <View style={{ alignItems: "center", justifyContent: "center", marginVertical: 30 }}>
                    {this.state.photo && (
                        <Image
                            source={{ uri: this.state.photo.uri }}
                            style={{ width: 300, height: 300 }} />
                    )}
                </View>

                <View>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => this.props.navigation.navigate('AddCaption', { p: this.state.photo, pi: route.params.pi})}>
                        <Text style={styles.btnText}> Add Caption </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.btmScreen}>
                    <View style={styles.wideBtnContainer}>
                        <TouchableOpacity
                            style={styles.wideBtn}
                            onPress={() => navigation.navigate('FrameOwner')}>
                            <Text style={styles.wideBtnText}> Cancel </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Container>

        )
    }
}


