import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, TouchableOpacityComponent } from "react-native";
import PostUserInfo from "./PostUserInfo";
import PostImage from "./PostImage";
import { PostActions } from "./PostActions";
import { PostLikes } from "./PostLikes";
import { PostDescription } from "./PostDescription";
import { faker } from "@faker-js/faker";
import AvatarWithName from "../UserAvatarWithName/Component";
import Colors from "../../modules/Colors";

interface Data {
    key: string;
    name: string;
    avatar: string;
    images: Array<string>;
}

const data: Data[] = new Array(20).fill(0).map(() => {
    const userData: Data = {
        name: faker.internet.userName(),
        avatar: faker.image.avatar(),
        key: faker.string.uuid(),
        images: [],
    };

    for (let i = 0; i < 2; i++) {
        userData.images.push(faker.image.url());
    }

    return userData;
});

const imagesUri: Array<string> = [
    "https://expertphotography.b-cdn.net/wp-content/uploads/2019/05/beautiful-photography-man-sitting-in-front-of-lake.jpg",
    "https://images.unsplash.com/photo-1512491583124-7049756958a3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2l0aG91dCUyMGZpbHRlcnxlbnwwfHwwfHx8MA%3D%3D"
]

const PostComponent = () => {
    const ref = React.useRef<FlatList>(null);
    const [index, setIndex] = React.useState<number>(0);

    const handleScroll = (event: any) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        if (offsetY === 0) {
            //alert('top')
        }
      };

    return (
        <FlatList
            ref={ref}
            initialScrollIndex={index}
            style={{height: '77.0%'}}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            legacyImplementation={false}
            data={data}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => {
                return (
                    <>
                        <PostUserInfo urlAvatar={item.avatar} username={item.name} />
                        <PostImage urlImagePost={item.images} key={item.key} /><PostActions /><PostLikes /><PostDescription />
                    </>
                );
            }}
            onScroll={handleScroll}
        />
    )
}

export default PostComponent
