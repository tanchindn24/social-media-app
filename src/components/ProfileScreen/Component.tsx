import React from "react";
import Container from "../../common/Container";
import HeaderProfile from "./HeaderProfile";
import UserProfileData from "../MainScreen/UserProfileData";

const Profile = ({route}: any) => {
    const url = 'https://lh3.googleusercontent.com/a/ACg8ocJfaUkmSOInUn5lBMjV35kPv0sstNIklLwUlbvVFfUTDSQ=s288-c-no';

    return (
        <Container>
            <HeaderProfile/>
            <UserProfileData avatarUrl={url} name={'ROSÉ'} username={'roses_are_rosie'}/>
        </Container>
    )
}

export default Profile
