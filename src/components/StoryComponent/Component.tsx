import {FlatList, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import React from "react";
import {Avatar} from "react-native-ui-lib";
import {faker} from '@faker-js/faker';
import {BadgePosition} from "react-native-ui-lib/src/components/avatar";
import {LinearGradient} from "expo-linear-gradient";
import Colors from "../../modules/Colors";
import AvatarWithName from "../UserAvatarWithName/Component";

interface Data {
    key: string;
    name: string;
    avatar: string;
}

const data: Data[] = new Array(20).fill(0).map(() => ({
    name: faker.internet.userName(),
    avatar: faker.image.avatar(),
    key: faker.string.uuid()
} as Data));

const StoriesComponent = () => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 3}}>
            <View style={{marginRight: 12, justifyContent: 'center', alignItems: 'center'}}>
                <Avatar source={require('../../../assets/images/icon.png')} size={70}
                        badgePosition={BadgePosition.BOTTOM_RIGHT}/>
                <Text style={{width: 80, textAlign: 'center', marginTop: 10}} ellipsizeMode='tail' numberOfLines={1}>My Stories</Text>
            </View>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
                data={data}
                keyExtractor={(item) => item.key}
                renderItem={({item}) => {
                    return (
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <AvatarWithName avatarUrl={item.avatar} name={item.name}/>
                        </View>
                    );
                }}
            />
        </View>
    );
};


export default StoriesComponent

const styles = StyleSheet.create({})
