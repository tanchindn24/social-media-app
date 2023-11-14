import React from "react";
import Container from "../../common/Container";
import HeaderProfile from "./HeaderProfile";
import UserProfileData from "../MainScreen/UserProfileData";

const Profile = ({route}: any) => {
    const url = 'https://instagram.fdad1-1.fna.fbcdn.net/v/t51.2885-15/398222820_870307841440231_1927964894137189069_n.jpg?stp=dst-jpg_e35_p1080x1080&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=instagram.fdad1-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=SgM8qzWwZaYAX-Sr0lq&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIyNjczODM3MzM4NTgzMjUwNw%3D%3D.2-ccb7-5&oh=00_AfC_rPCDwhzevA2VKwS7p2u-Si4eGHXz8holi9EkKIrqvA&oe=65575D19&_nc_sid=ee9879';

    return (
        <Container>
            <HeaderProfile/>
            <UserProfileData url={url} name={'roses_are_rosie'} username={'roses_are_rosie'}/>
        </Container>
    )
}

export default Profile
