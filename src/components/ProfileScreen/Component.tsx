import React, { useEffect } from "react";
import Container from "../../common/Container";
import HeaderProfile from "./HeaderProfile";
import UserProfileData from "../MainScreen/UserProfileData";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
    const url = 'https://lh3.googleusercontent.com/a/ACg8ocJfaUkmSOInUn5lBMjV35kPv0sstNIklLwUlbvVFfUTDSQ=s288-c-no';
    const [currentUser, setCurrentUser] = React.useState<any>(null);

    useEffect(() => {
        AsyncStorage.getItem('user')
            .then((user) => {
                if (user) {
                    setCurrentUser(JSON.parse(user));
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Container>
            <HeaderProfile/>
            <UserProfileData avatarUrl={url} fullname={'ROSÉ'} biography={'roses_are_rosie'}/>
        </Container>
    )
}

export default Profile
