import React from 'react';
import { View, StatusBar } from 'react-native';

const TopBar = ({ backgroundColor, ...props }) => (

<View style={[styles.statusBar, { backgroundColor }]}>
<StatusBar translucent backgroundColor={backgroundColor} {...props} />
</View>
);

export default TopBar;