import {Text, View} from "react-native";
import AvatarComponent from "../UserAvatarWithName/AvatarComponent";
import React from "react";

type UserProfileDataProps = {
    url: string;
    name: string;
    username: string;
}
export default function UserProfileData({url, name, username}: UserProfileDataProps) {
    return (
        <><View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20}}>
            <View style={{flex: 40, flexDirection: 'column'}}>
                <AvatarComponent avatarUrl={url} width={90} height={90} size={80}/>
            </View>
            <View style={{flex: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>1,234</Text>
                    <Text style={{fontWeight: 'normal', fontSize: 15, textAlign: 'center'}}>Posts</Text>
                </View>
                <View>

                    <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>9,234</Text>
                    <Text style={{fontWeight: 'normal', fontSize: 15, textAlign: 'center'}}>Followers</Text>
                </View>
                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>234</Text>
                    <Text style={{fontWeight: 'normal', fontSize: 15, textAlign: 'center'}}>Following</Text>
                </View>
            </View>
        </View><View>
            <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'left'}}>{name}</Text>
            <Text style={{fontWeight: 'normal', fontSize: 15, textAlign: 'left'}}>{username}</Text>
        </View></>
    )
}
