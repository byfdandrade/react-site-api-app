import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import Orcamento from './pages/Orcamento'

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Orçamen" component={Orcamento} />
            </Stack.Navigator>
        </NavigationContainer >
    );
}