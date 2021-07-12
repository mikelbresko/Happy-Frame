import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
/*------------COMPONENTS---------------*/

    btmBar: {
        flex: .3,
        width: '100%',
        height: '13%',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    btmBtn: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 35,
        alignItems: 'center',
    },

    
    btmScreen: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    btmSettings: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    btn: {
        alignSelf: 'center',
        backgroundColor: '#FFF',
        padding: 11,
        marginBottom: 11,
        width: 160,
        borderRadius: 40,
        borderColor: '#c0e7f6',
    },

    btnContainer: {
        //flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
        marginTop: 15,
    },

    btnSettings: {
        width: '100%',
        backgroundColor: '#FFF',
        marginVertical: 15,
    },

    btnSettingsText: {

    },

    btnText: {
        fontSize: 18,
        textAlign: 'center',
        justifyContent: 'center',
        color: '#1aa3ff',
    },
    
    box: {
        backgroundColor: '#FFF',
        width: '100%',
        textAlign: 'center',
        paddingRight: 200,
        fontSize: 21,
        padding: 16,
        marginVertical: .5,
    },

    centerSceen: {
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    centerTop: {
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 200,
    },

    // centerContainer: {
    //     width: '100%',
    //     height: '100%',
    //     flex: 1,
    //     justifyContent: 'center'
    // },

    container: {
        width: '100%',
        height: '100%',
        flex: 1,
    },

    deleteBtn: {
        width: '90%',
        padding: 15,
        backgroundColor: '#ff0000',
        borderRadius: 10,
        marginTop: 10,
    },

    deleteBtnSplit: {
        width: '90%',
        padding: 15,
        backgroundColor: '#ff0000',
        borderRadius: 10,
        marginVertical: 10,
    },

    deleteText: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        color: '#FFF',
        fontWeight: 'bold',
    },

    dlt: {
        height: 55,
        alignSelf:'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    doneBtn: {
        alignSelf: 'center',
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 15,
        borderWidth: 5,
        borderColor: '#fFFF',
        width: '40%',
    },

    header: {
        fontSize: 35,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 2,
    },

    icon: {
        width: '55%',
        height: '100%',
        justifyContent: 'center',
    },

    invisBtn: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },

    invisText: {
        width: '100%',
        height: '100%',
    },

    imgContainer: {
        height: '40%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    
    imgDisplay: {
        alignSelf: 'center',
        maxWidth: 270,
        maxHeight: 270,
    },

    imgDisplayContainer: {
        paddingVertical: 15,
    },

    imgFriend: {
        width:'85%',
        height:'85%',
        flexDirection: 'row',
    },

    imgSettings: {
        width: '85%',
        height: '85%',
        flexDirection: 'row-reverse',
    },

    input: {
        width: '100%',
        backgroundColor: '#FFF',
        marginBottom: 1,
        alignSelf: 'center',
    },

    inputApp: {
        width: '90%',
        backgroundColor: '#FFF',
        marginVertical: 20,
        alignSelf: 'center',
    },

    line: {
        backgroundColor: '#cccccc',
        height: 1.5,
        width: '100%',
        marginTop: 10,
        marginBottom: 35,
    },

    line2: {
        backgroundColor: '#cccccc',
        height: 1.5,
        width: '100%',
        marginVertical: 7,
    },

    listBG: {
        backgroundColor: '#FFF',
        padding: 20,
        width: '95%',
        height: '68%',
        alignSelf: 'center',
    },

    listItem: {
        backgroundColor: '#c0e7f6',
        paddingVertical: 26,
    },

    listText: {
        flex: 1,
        fontSize: 25,
        paddingLeft: 15,
    },

    ok: {
        width: '40%',
        fontSize: 24,
        textAlign: 'center',
        justifyContent: 'flex-end',
    },

    smallText: {
        fontSize: 20,
        color: '#FFF',
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    
    title: {
        fontSize: 30,
        color: '#FFF',
        padding: 8,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    titleRed: {
        fontSize: 25,
        color: '#cc0000',
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    titleCenter: {
        fontSize: 30,
        color: '#FFF',
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        //justifyContent: 'center',
    },

    titlePadding: {
        marginVertical: 20,
    },

    uploadBtn: {
        width: '22%',
        padding: 12,
        backgroundColor: '#4db8ff',
        borderRadius: 8,
        alignSelf: 'center',
    },

    uploadContainer: {
        //flexDirection: 'row',
        alignItems: 'center',
    },

    wideBtnContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },

    wideBtn: {
        width: '90%',
        padding: 15,
        backgroundColor: '#4db8ff',
        borderRadius: 10,
    },

    wideBtnSplit: {
        width: '90%',
        padding: 15,
        backgroundColor: '#4db8ff',
        borderRadius: 10,
        marginVertical: 10,
    },

    wideBtnText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
    },

    //--------//

    display: {
        height: '100%',
    },
})

export default styles;