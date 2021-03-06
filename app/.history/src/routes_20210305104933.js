import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';
import { Text } from 'react-native';
import Orcamento from './pages/Orcamento'

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Orçamento"
                    component={Orcamento}
                    options={{
                        title: 'Orçamento',
                        headerStyle: {
                            backgroundColor: '#0F27C8',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer >
    );
}