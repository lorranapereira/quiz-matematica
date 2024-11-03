import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './src/screens/Cadastro';
import Jogo from './src/screens/Jogo';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cadastro">
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Jogo" component={Jogo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
