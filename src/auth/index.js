import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LottieView from 'lottie-react-native';
import { colorApp, settingApp, lottie } from '../public';

export default function Auth(props) {

    const animationRef = useRef(null)

    useEffect(() => {
        animationRef?.current?.play()

        setTimeout(() => {
            props.navigation.navigate('Weather')
        }, 3500);
    }, [])

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colorApp.green_splash
            }}
        >
            <LottieView
                ref={animationRef}
                style={{
                    width: settingApp.width,
                    height: settingApp.height,
                }}
                source={lottie.splash}
                autoPlay={false}
                loop={false}
            />

        </View>
    )
}