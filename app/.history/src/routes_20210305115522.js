import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';
import { Text } from 'react-native';
import Orcamento from './pages/Orcamento';
import Home from './pages/Home';

const Stack = createStackNavigator();

export default function Routes() {
    const screenOptionStyle = {
        headerStyle: {
            backgroundColor: '#050c3d'
        },
        headerTintColor: '#00a1fc',
        headerBackTitle: 'Voltar'
    }
    return (
        <NavigationContainer>

            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen name="Orcamento" component={Orcamento} options={{
                    title: 'Solicite seu Orçamento',
                    headerStyle: {
                        backgroundColor: '#050c3d',
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