import { Auth, Weather } from './stack'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function ScreenStack() {
  return (
    <Stack.Navigator 
        initialRouteName='Auth'
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Auth" component={Auth} />

        <Stack.Screen name="Weather" component={Weather} />
    </Stack.Navigator>
  );
}
export default ScreenStack