import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Container from "../../common/Container";
import HeaderProfile from "./HeaderProfile";
import UserProfileData from "../MainScreen/UserProfileData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from "../../modules/Colors";
import { Avatar } from "react-native-ui-lib/src/components/avatar";
import { Ionicons, Entypo, FontAwesome5 } from "@expo/vector-icons";
import StoryComponent from "../StoryComponent/Component";
import DefaultImage from "../../modules/DefaultImage";
import { getData } from "../../../Until/user";

const Profile = () => {
  const [userData, setUserData] = React.useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getData();
        setUserData(user.userData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const listAvatar: Array<string> = [
    "https://images.pexels.com/photos/3387577/pexels-photo-3387577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1778821/pexels-photo-1778821.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <Container>
      <HeaderProfile user={userData} />
      <UserProfileData
        avatarUrl={DefaultImage.avatar}
        fullname={userData?.fullname}
        biography={userData?.biography}
      />
      <View style={styles.follower}>
        <View style={styles.avatarFollower}>
          {listAvatar.map((item, index) => {
            return (
              <View key={index} style={styles.avatarContainer}>
                <Avatar
                  imageStyle={{ borderColor: Colors.white, borderWidth: 2 }}
                  size={34}
                  source={{ uri: item }}
                />
              </View>
            );
          })}
        </View>
        <View style={styles.namefollower}>
          <Text numberOfLines={2} ellipsizeMode="tail">
            Followed by username, username and 100 others
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <TouchableOpacity style={styles.buttonEditProfile}>
          <Text style={{ fontWeight: "bold" }}>Edit profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonAddFrient}>
          <Ionicons
            name="ios-person-add-outline"
            size={17}
            color={Colors.dark}
          />
        </TouchableOpacity>
      </View>
      <StoryComponent isShowMyStories={false} />
      <View style={styles.buttonOption}>
        <TouchableOpacity style={styles.toButtonOption} onPress={() => {}}>
          <Ionicons name="grid-outline" size={24} color={Colors.dark} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.toButtonOption} onPress={() => {}}>
          <Entypo name="video" size={24} color={Colors.dark} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.toButtonOption} onPress={() => {}}>
          <FontAwesome5 name="user" size={24} color={Colors.dark} />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Profile;

const styles = StyleSheet.create({
  follower: {
    marginTop: 12,
    width: "100%",
    height: 32,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  avatarFollower: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
  },
  avatarContainer: {
    borderColor: "rgb(255, 255, 255)",
    overflow: "hidden",
    marginLeft: -10,
  },
  namefollower: {
    marginLeft: 12,
    width: "56%",
    justifyContent: "center",
  },
  buttonEditProfile: {
    backgroundColor: Colors.white1,
    borderRadius: 4,
    width: "90%",
    height: 32,
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonAddFrient: {
    backgroundColor: Colors.white1,
    borderRadius: 4,
    width: "9%",
    height: 32,
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonOption: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    width: "100%",
    height: 50,
  },
  toButtonOption: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
