import React, {ReactNode, useCallback, useEffect} from "react";
import {
    StyleSheet,
    View,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {useFonts} from "expo-font";
import * as Location from "expo-location";
import {LinearGradient} from "expo-linear-gradient";
import Colors from "../modules/Colors";

type behaviorKeyboard = "padding" | "height" | "position" | undefined;
type Props = {
    children: ReactNode;
    behaviorKeyboardAndroid?: behaviorKeyboard;
    behaviorKeyboardIOS?: behaviorKeyboard;
    paddingHorizontal?: boolean;
};
// SplashScreen.preventAutoHideAsync();

const {width, height} = Dimensions.get("screen");

const Container = ({children, behaviorKeyboardAndroid = undefined, behaviorKeyboardIOS = 'padding', paddingHorizontal = true}: Props) => {

    const [fontsLoaded] = useFonts({
        "Poppins-Black": require("../../assets/font/Poppins-Black.ttf"),
        "Poppins-Medium": require("../../assets/font/Poppins-Medium.ttf"),
        "Poppins-Thin": require("../../assets/font/Poppins-Thin.ttf"),
        "Poppins-Light": require("../../assets/font/Poppins-Light.ttf"),
        "Poppins-Regular": require("../../assets/font/Poppins-Regular.ttf"),
        "Grandista-Normal": require("../../assets/font/Grandista.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={[styles.container, paddingHorizontal && { paddingHorizontal: 20 }]}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? behaviorKeyboardIOS : behaviorKeyboardAndroid}
                style={{flex: 1}}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View onLayout={onLayoutRootView}>{children}</View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </View>
    );
};

export default Container;

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        paddingTop: 40,
        backgroundColor: Colors.white,
    },
});
