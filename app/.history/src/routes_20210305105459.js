import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';
import { Text } from 'react-native';
import Orcamento from './pages/Orcamento'

const Stack = createStackNavigator();

export default function Routes() {
    const screenOptionStyle = {
        headerStyle: {
            backgroundColor: '#58878B'
        },
        headerTintColor: '#00a1fc',
        headerBackTitle: 'Voltar'
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Orcamento" component={Orcamento} options={{
                    title: 'Orçamento FDAndrade',
                    headerStyle: {
                        backgroundColor: '#58878B',
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