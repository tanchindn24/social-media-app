import React, {useCallback, useEffect, useState} from 'react'
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Container from "../../common/Container";
import Colors from "../../modules/Colors";
import {AntDesign} from "@expo/vector-icons";
import AvatarComponent from "../UserAvatarWithName/AvatarComponent";
import {ChipsInput, Button} from "react-native-ui-lib";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../reducers/store";
import {createPost} from "../../feature/PostSlice";

type PostCreate = {
    route: any
}

const PostCreate = ({route}: PostCreate) => {
    const navigation = route.params.navigation;
    const images = route.params.image
    const [description, setDescription] = useState<string>('')
    const [image, setImage] = useState<string>('')
    const avt = 'https://images.pexels.com/photos/1382732/pexels-photo-1382732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        if (images) {
            setImage(images)
        }
    }, [images])

    const createPostHandle = () => {
        const Params = {
            description: description,
            image: image,
        }
        dispatch(createPost(Params))
            .then((resultAction) => {
                if (createPost.fulfilled.match(resultAction)) {
                    setDescription('');
                    setImage('');
                    navigation.navigate('main-screen')
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <Container>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name={'left'} size={24} color={Colors.dark}/>
                </TouchableOpacity>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Create Post</Text>
                <View style={{marginRight: 10}}></View>
            </View>
            <View style={{marginTop: 25}}>
                <View style={styles.container}>
                    {images && <ImageBackground
                        blurRadius={30}
                        style={styles.imageContainer}
                        source={{uri: images}}
                        borderRadius={20}
                    >
                        <View style={styles.overlayTop}/>
                        <Image source={{uri: images}} style={styles.image}/>
                        <View style={styles.overlayBottom}/>
                    </ImageBackground>}
                    <View style={styles.avatarContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <AvatarComponent avatarUrl={avt} width={60} height={60} size={50}/>
                            <Text style={{fontWeight: 'bold', color: Colors.white, fontSize: 15}}>roses_are_rosie</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{marginVertical: 10}}>
                <Text style={{fontWeight: 'bold', color: Colors.dark, fontSize: 15}}>roses_are_rosie</Text>
                <ChipsInput
                    placeholder={'Write a caption'}
                    multiline={true}
                    numberOfLines={3}
                    value={description}
                    onChangeText={(valueDescription: string) => setDescription(valueDescription)}
                    style={styles.descriptionText}
                />
            </View>
            <Button label={'Post'} size={Button.sizes.large} backgroundColor={Colors.facebook}
                    onPress={createPostHandle}/>
        </Container>
    )
}

export default PostCreate

const styles = StyleSheet.create({
    container: {
        width: 400,
        height: 400,
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: Colors.white
    },
    imageContainer: {
        flex: 1,
    },
    overlayTop: {
        flex: 12,
        //backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    image: {
        flex: 76,
        //resizeMode: 'contain',
    },
    overlayBottom: {
        flex: 12,
        //backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    avatarContainer: {
        marginTop: 5,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1
    },
    descriptionText: {
        marginTop: 5,
        backgroundColor: Colors.white1,
        paddingHorizontal: 10,
        paddingTop: 10,
        borderRadius: 20,
        width: '100%',
        height: 120,
        textAlignVertical: 'top'
    }
})
