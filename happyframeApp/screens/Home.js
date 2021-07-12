import React, { Component } from 'react';
import {
    StyletSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    Alert,
} from 'react-native';
import {RemoteMongoClient, Stitch, UserPasswordCredential} from 'mongodb-stitch-react-native-sdk';
import Container from '../components/Container';
import styles from '../components/styles';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            valid: true,
        };
    }

    render(){
        const navigation = this.props.navigation;
        let stitchAppClient;
        if (Stitch.hasAppClient('taskmanager-zhnlv')) {
            stitchAppClient = Stitch.getAppClient('taskmanager-zhnlv');
        } else {
            stitchAppClient = Stitch.initializeDefaultAppClient('taskmanager-zhnlv');
        }
        return(
            <>
                <SafeAreaView>
                    <Container>
                        <View style={styles.centerSceen}>
                            <View style={styles.titlePadding}>
                                <Text style={styles.title}> Log In to your Happy Frames account </Text>
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder='Email'
                                value={this.state.email}
                                onChangeText = {(email) => this.setState({email})}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder='Password'
                                value={this.state.password}
                                onChangeText = {(password) => this.setState({password})}
                                secureTextEntry/>
                            <View style={styles.btnContainer}>
                                <TouchableOpacity
                                    style={styles.btn}
                                    onPress={() => this.handleUserLogin(stitchAppClient)}>
                                   <Text style={styles.btnText}> Log In </Text>
                                </TouchableOpacity>
                            </View>
                            <Text></Text>
                            <View style={styles.btnContainer}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('PassForgot', {loc: 'Home'})}>
                                    <Text style={styles.smallText}>Forgot your password? </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('SignUp')}>
                                    <Text style={styles.smallText}>Create an account</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </Container>

                </SafeAreaView>
            </>
        )
    }

    handleResetState = () => {
        this.setState({email: ''});
        this.setState({password: ''});
    };

    handleLogIntoFrame = () => {
        const navigation = this.props.navigation;
        const stitchAppClient = Stitch.getAppClient('taskmanager-zhnlv');
        const db = stitchAppClient.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('UserAccounts');
        db.collection('UserCred').find({owner_id: stitchAppClient.auth.user.id}, {limit: 100}).asArray()
            .then(docs => {
                docs[0].name;
                this.handleResetState();
                navigation.navigate('Frames', {
                    user: this.state.email,
                });
            })
            .catch(err =>
                Alert.alert('Invalid email', 'Please make a new account.', [
                    {text: 'Ok', onPress: () => this.handleResetState()},
                ], {cancelable: false}));

    };

    handleUserLogin = (stitchAppClient) => {
        // Log in with user/password credential
        const email = this.state.email;
        const pass = this.state.password;
        const credential = new UserPasswordCredential(email, pass);
        if (this.state.email === '' || this.state.password === ''){
            Alert.alert('Incorrect Credentials', 'Please try again.', [
                {text: 'Ok', onPress: () => this.handleResetState()},
            ], {cancelable: false});
            return;
        }
        stitchAppClient.auth
        .loginWithCredential(credential)
        .then( user =>
            this.handleLogIntoFrame()
        )
        .catch(err =>
            Alert.alert('Incorrect Credentials', 'Please try again.', [
                {text: 'Ok', onPress: () => this.handleResetState()},
            ], {cancelable: false})
        );

    }



}
