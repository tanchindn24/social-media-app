import {Text, View} from "react-native";
import React from "react";

export function PostDescription() {
    return (
        <View style={{marginHorizontal: 12, marginVertical: 3, flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', fontSize: 14}}>
                roses_are_rosie
            </Text>
            <Text>{' '}</Text>
            <Text style={{fontWeight: 'normal', fontSize: 14}}>
                this is a description written by roses_are_rosie
            </Text>
        </View>
    )
}
