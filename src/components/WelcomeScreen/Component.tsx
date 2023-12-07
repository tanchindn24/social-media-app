import React, {useCallback, useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions, TouchableOpacity} from 'react-native';
import ButtonLogin from "./ButtonLogin";
import Colors from "../../modules/Colors";
import {useNavigation} from "@react-navigation/native";
import {NavigationProp} from "@react-navigation/core/src/types";

const WelComeScreen = () => {
    const webview = useRef(null);
    const navigation = useNavigation<NavigationProp<any>>();
    const handleLogin = () => {
        navigation.navigate('login-screen')
    }
    const handleRegister = () => {
        navigation.navigate('register-screen');
    }

    return (
        // <WebView
        //     source={{ uri: 'https://assets.ctfassets.net/hr8b1qvi5te0/4mtAdDOnMAYsOEog2AYYwW/d2c631a748ac7727f56be5affbbd4801/FBMD_-_Kinloc_Indie_-_Data_Sheet.pdf' }}
        //     scrollEnabled
        //     bounces={false}
        //     originWhitelist={['*']}
        //     style={{ flex: 1 }} />
        <ImageBackground source={require('../../../assets/images/Bg-img.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.container}>
                <View style={styles.containerItem}>
                    <Image source={require('../../../assets/images/icon.png')} style={styles.svgImage}/>
                    <ButtonLogin colorButton={'dark'} colorText={'white'} title="Login" onPress={handleLogin}/>
                    <ButtonLogin colorButton={'white'} colorText={'gray'} title="Register" onPress={handleRegister}/>
                    <TouchableOpacity onPress={() => navigation.navigate('button-tab-navigation')}>
                        <Text style={styles.footerText}>Continue as a guest</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    containerItem: {
        marginLeft: Dimensions.get('screen').width / 20,
        marginRight: Dimensions.get('screen').width / 20
    },
    svgImage: {
        width: 150,
        height: 150,
        marginBottom: 30
    },
    footerText: {
        color: Colors.blueGradiant,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 30
    }
});

export default WelComeScreen
