import * as React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import styles from './styles';

const Container = ({ children }) => (
    <SafeAreaView>
        <ImageBackground
                    source={require('../images/Background.png')}
                    style={{width:'100%', height:'100%'}}>

        <View style={styles.container}>
            {children}
        </View>

        </ImageBackground>
    </SafeAreaView>
);

Container.propTypes = {
   children: PropTypes.any,
};

export default Container;
