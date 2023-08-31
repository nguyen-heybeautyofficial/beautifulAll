import React, {  } from 'react'
import { enableScreens } from 'react-native-screens';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ScreenStack from './router';

export default function AppComponent() {
    enableScreens();

    return(
        <View style={{flex:1}}>
           <NavigationContainer>
                <ScreenStack/>
           </NavigationContainer>
        </View>
    )
}