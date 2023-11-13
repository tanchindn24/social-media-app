import React from "react";
import {View, Text, StyleSheet} from "react-native";
import PostUserInfo from "./PostUserInfo";
import PostImage from "./PostImage";
import {PostActions} from "./PostActions";
import {PostLikes} from "./PostLikes";
import {PostDescription} from "./PostDescription";

const PostComponent = () => {

    const images = [
        'https://lh3.googleusercontent.com/a/ACg8ocJfaUkmSOInUn5lBMjV35kPv0sstNIklLwUlbvVFfUTDSQ=s288-c-no',
        'https://instagram.fdad1-2.fna.fbcdn.net/v/t51.2885-15/154214172_184332236440250_6648655825192623972_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDAyeDEwMDIuc2RyIn0&_nc_ht=instagram.fdad1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=14oBm4d5Y1wAX-7mRxY&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MjUxNzAyNjc4ODgzNDM0NDkyMA%3D%3D.2-ccb7-5&oh=00_AfBCs0h3qcRpJNU595sT5wfZE8woyy5GUD-uNs4f3CkZMA&oe=65543810&_nc_sid=ee9879'
    ];

    return (
        <View>
            <PostUserInfo/>
            <PostImage urlImagePost={images}/>
            <PostActions/>
            <PostLikes/>
            <PostDescription/>
        </View>
    )
}

export default PostComponent
