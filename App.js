import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Source/Screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>

            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>

        </NavigationContainer>
    );
}