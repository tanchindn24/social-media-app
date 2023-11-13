import {Text, TouchableOpacity, View, StyleSheet, Alert} from "react-native";
import {AntDesign, Feather, Ionicons} from "@expo/vector-icons";
import Colors from "../../modules/Colors";
import React from "react";
import {NavigationProp} from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';

type HeaderComponentProps = {
    navigation: NavigationProp<any>;
};

const HeaderComponent: React.FC<HeaderComponentProps> = ({navigation}) => {
    const createPost = async (camera: boolean) => {
        console.log('create post ...');
        const result = camera
            ? await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: false,
                aspect: [4, 3],
                quality: 1,
            })
            : await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: false,
                aspect: [4, 3],
                quality: 1,
            });

        if (!result.canceled) {
            navigation.navigate('create-post-screen', {
                image: result.assets[0].uri,
                navigation: navigation,
            });
        }
    };

    return (
        <View style={styles.flexHeader}>
            <Text style={styles.colorTextHeader}>Bluewhale</Text>
            <View style={styles.optionHeader}>
                <TouchableOpacity style={{marginRight: 24}} onPress={() => {
                    alert('notification ...')
                }}>
                    <AntDesign name={'hearto'} size={24} color={Colors.dark}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: 24}} onPress={() => {
                    alert('message ...')
                }}>
                    <Ionicons name="chatbubble-ellipses-outline" size={24} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    Alert.alert('Post Status', '', [
                        {text: 'Camera', onPress: () => createPost(true)},
                        {text: 'Library', onPress: () => createPost(false)},
                    ]);
                }}>
                    <Feather name="plus-square" size={24} color="black"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HeaderComponent

const styles = StyleSheet.create({
    flexHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    colorTextHeader: {
        color: Colors.dark,
        fontSize: 27,
        fontWeight: 'normal',
        fontFamily: 'Grandista-Normal'
    },
    optionHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
