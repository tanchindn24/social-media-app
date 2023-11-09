import React, { useCallback, useEffect, useState } from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import Container from "../../common/Container";
import {LoginIcon} from "../SVG/index";

const MainScreen = () => {
    return (
        <Container>
            <Image source={LoginIcon} style={styles.svgImage}/>
        </Container>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    svgImage: {
        width: 100,
        height: 100
    },
})
