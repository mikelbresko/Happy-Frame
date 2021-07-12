import React, { Component, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

import Container from '../components/Container'
import styles from '../components/styles'

export default class FrameOwner extends Component{

    render() {
        const {route, navigation} = this.props;
        const owner = route.params.user;
        const pi = route.params.pi;
        return(
            <Container>
                <Text style={styles.header}> Send to: { owner } </Text>
                <Text></Text>
                <View style={styles.uploadContainer}>
                    <TouchableOpacity style={styles.uploadBtn}
                                      onPress={() => navigation.navigate('SelectMedia', {pi: pi})}>
                        <Text style={{textAlign: 'center'}}> Upload </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btmBar}>
                    <TouchableOpacity style={styles.wideBtn}
                                      onPress={() => navigation.navigate('Frames')}>
                        <Text style={styles.wideBtnText}> Cancel </Text>
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }
}
