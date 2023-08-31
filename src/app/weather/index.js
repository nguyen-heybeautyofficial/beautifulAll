import React, { useEffect, useRef, useState } from 'react';
import { View, first } from 'react-native';
import * as Location from 'expo-location';

import styles from './styles'
import { WeahterApi } from '../../apiApp'

export default function Weather(props) {


    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync();
            if(location && location.coords){
                getCurrentWth(location.coords)
            }
        })();
    }, [])

    async function getCurrentWth(location) {
        const { latitude, longitude } = location
        const result = await WeahterApi.getWeather(latitude, longitude)
        console.log('getCurrentWth', result);
    }

    return (
        <View style={styles.main}>

        </View>
    )
}
