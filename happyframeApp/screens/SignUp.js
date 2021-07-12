import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';

import Container from '../components/Container';
import styles from '../components/styles';
import {
    Stitch,
    AnonymousCredential,
    UserPasswordAuthProviderClient,
    RemoteMongoClient,
    UserPasswordCredential,
} from 'mongodb-stitch-react-native-sdk';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    render() {
        return (
            <Container>
                <View style={styles.centerSceen}>
                    <Text style={styles.title}> Create a Happy Frames account </Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Name'
                        value={this.state.name}
                        onChangeText = {(name) => this.setState({name})}/>
                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        value={this.state.email}
                        onChangeText = {(email) => this.setState({email})}/>
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        value={this.state.password}
                        onChangeText = {(password) => this.setState({password})}/>

                    <View style={styles.btnContainer}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => this.handleCreateAccount('Home')}>
                            <Text style={styles.btnText}> Create </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => this.handleResetStateLoc('Home')}>
                            <Text style={styles.btnText}> Cancel </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        )
    }

    handleResetStateLoc = (location) => {
        const navigation = this.props.navigation;
        this.handleResetState();
        navigation.navigate(location)
    };

    handleResetState = () => {
        this.setState({name: ''});
        this.setState({email: ''});
        this.setState({password: ''});
    };

    handleCreateAccount = async (location) => {
        const navigation = this.props.navigation;
        const userName = this.state.name;
        const userEmail = this.state.email;
        const userPass = this.state.password;
        if (userName === '' || userEmail === '' || userPass === '') {
            Alert.alert('Something went wrong', 'Please try again.', [
                {text: 'Ok', onPress: () => this.handleResetState()},
            ], {cancelable: false});
            return;
        }
        this.loginPls(userName, userEmail, userPass);

        this.setState({name: ''});
        this.setState({email: ''});
        this.setState({password: ''});
        navigation.navigate(location);


    };

    loginPls = (userName, userEmail, userPass) => {
        const emailPasswordClient = Stitch.getAppClient('taskmanager-zhnlv').auth
            .getProviderClient(UserPasswordAuthProviderClient.factory);

        emailPasswordClient.registerWithEmail(this.state.email, this.state.password)
            .then(() => this.loginManual(userName, userEmail, userPass))
            .catch(err => console.error("Error registering:", err));
    };

    loginManual = (userName, userEmail, userPass) => {
        const client = Stitch.getAppClient('taskmanager-zhnlv');
        const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('UserAccounts');

        client.auth.loginWithCredential(new AnonymousCredential()).then(user =>
            db.collection('UserCred').updateOne({owner_id: client.auth.user.id}, {
                $set: {
                    name: userName,
                    email: userEmail,
                    password: userPass,
                    frames: [],
                }
            }, {upsert: true})
        ).then(docs => {
            console.log("Creation Complete", docs);
        }).then(user => {
            client.auth.user
                .linkWithCredential(new UserPasswordCredential(userEmail, userPass))
                .catch(err => console.error("creation error", err))
        }).catch(err => {
            console.error("Error updating", err);
        });

    };

}
