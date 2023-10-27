import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthTrack from "./src/navigations/AuthTrack";
export default function App() {
  return (
      <NavigationContainer>
        <AuthTrack />
      </NavigationContainer>
  );
}
