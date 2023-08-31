import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { Component } from 'react'

import ScreenStackApp from './screenStack';

const Stack = createStackNavigator();

export default function ScreenStack(props) {
    return (
        <SafeAreaProvider>
            

            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="ScreenStack" component={ScreenStackApp} />
            </Stack.Navigator>
        </SafeAreaProvider>
    );
}
