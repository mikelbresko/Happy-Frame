import * as React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import styles from './styles';
import TopBar from './TopBar';

const CenterContainer = ({ children }) => (
    <SafeAreaView>
        <ImageBackground
                    source={require('../images/TryBG.png')}
                    style={{width:'100%', height:'100%'}}>

        <View style={styles.centerContainer}> 
            {children}
        </View>

        </ImageBackground>
    </SafeAreaView>
);

CenterContainer.propTypes = {
   children: PropTypes.any,
};

export default CenterContainer;