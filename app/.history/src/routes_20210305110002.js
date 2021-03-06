import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';
import { Text } from 'react-native';
import Orcamento from './pages/Orcamento'

const Stack = createStackNavigator();

export default function Routes() {
    const screenOptionStyle = {
        headerStyle: {
            backgroundColor: '#2c2c2c80'
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
                        backgroundColor: '#2c2c2c80',
                        flex: 1,
                        alignItems: 'center'
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