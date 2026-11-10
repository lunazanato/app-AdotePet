import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Detalhes from './screens/Detalhes';
import Formulario from './screens/Formulario';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#2c3e50' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'AdotePet - Início' }} 
        />
        <Stack.Screen 
          name="Detalhes" 
          component={Detalhes} 
          options={{ title: 'Detalhes do Pet' }} 
        />
        <Stack.Screen 
          name="Formulario" 
          component={Formulario} 
          options={{ title: 'Solicitação de Adoção' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}