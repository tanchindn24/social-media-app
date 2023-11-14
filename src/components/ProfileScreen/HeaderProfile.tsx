import {Text, TouchableOpacity, View} from "react-native";
import {AntDesign, Feather, Ionicons} from "@expo/vector-icons";
import Colors from "../../modules/Colors";
import React from "react";

export default function HeaderProfile() {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>roses_are_rosie</Text>
                <Text> </Text>
                <TouchableOpacity>
                    <AntDesign name={'down'} size={20} color={Colors.dark}/>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity>
                    <Feather name="plus-square" size={24} color="black"/>
                </TouchableOpacity>
                <Text> </Text>
                <TouchableOpacity>
                    <Ionicons name="options-outline" size={24} color="black"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
