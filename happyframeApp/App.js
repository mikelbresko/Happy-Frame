import 'react-native-gesture-handler';
import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./screens/Home";
import AddCaption from "./screens/AddCaption";
import SuccessMediaDeleted from "./screens/SuccessMediaDeleted";
import SuccessUpload from "./screens/SuccessUpload";
import SureDeleteMedia from "./screens/SureDeleteMedia";
import WhichFrames from "./screens/WhichFrames";
import AddFriend from "./screens/AddFriend";
import EditPhoto from "./screens/EditPhoto";
import FrameOwner from "./screens/FrameOwner";
import Frames from "./screens/Frames";
import NewFrame from "./screens/NewFrame";
import PassForgot from "./screens/PassForgot";
import Payment from "./screens/Payment";
import SelectMedia from "./screens/SelectMedia";
import Settings from "./screens/Settings";
import SharedFrames from "./screens/SharedFrames";
import SorryCouldNotFindFrame from "./screens/SorryCouldNotFindFrame";
import SignUp from "./screens/SignUp";

const THEME_COLOR = '#0080ff'
export default function App(props) {
  const Stack = createStackNavigator();
  return (

      <NavigationContainer>
        <Stack.Navigator
            initalRouteName={"home"}
            headerMode={'float' | 'screen'}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="AddCaption" component={AddCaption} />
          <Stack.Screen name="AddFriend" component={AddFriend}/>
          <Stack.Screen name="EditPhoto" component={EditPhoto}/>
          <Stack.Screen name="FrameOwner" component={FrameOwner}/>
          <Stack.Screen name="Frames" component={Frames}/>
          <Stack.Screen name="NewFrame" component={NewFrame}/>
          <Stack.Screen name="PassForgot" component={PassForgot}/>
          <Stack.Screen name="Payment" component={Payment}/>
          <Stack.Screen name="SelectMedia" component={SelectMedia}/>
          <Stack.Screen name="Settings" component={Settings}/>
          <Stack.Screen name="SharedFrames" component={SharedFrames}/>
          <Stack.Screen name="SorryCouldNotFindFrame" component={SorryCouldNotFindFrame}/>
          <Stack.Screen name="SuccessMediaDeleted" component={SuccessMediaDeleted}/>
          <Stack.Screen name="SuccessUpload" component={SuccessUpload}/>
          <Stack.Screen name="SureDeleteMedia" component={SureDeleteMedia}/>
          <Stack.Screen name="WhichFrames" component={WhichFrames}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
