import React, { useState } from 'react';
import { View } from 'react-native';
import CadastroScreen from './src/screens/Cadastro';
import JogoScreen from './src/screens/Jogo';
import FinalScreen from './src/screens/Final';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Cadastro');
  const [userData, setUserData] = useState({});
  const [gameData, setGameData] = useState({});

  const navigateTo = (screen, data = {}) => {
    if (screen === 'Jogo' || screen === 'Cadastro') {
      setUserData(data);
    }
    if (screen === 'Final') {
      setGameData(data);
    }
    setCurrentScreen(screen);
  };

  return (
    <View style={{ flex: 1 }}>
      {currentScreen === 'Cadastro' && <CadastroScreen navigateTo={navigateTo} />}
      {currentScreen === 'Jogo' && (
        <JogoScreen
          navigateTo={navigateTo}
          userName={userData.userName}
          userEmail={userData.userEmail}
        />
      )}
      {currentScreen === 'Final' && (
        <FinalScreen
          navigateTo={navigateTo}
          userName={gameData.userName}
          userEmail={gameData.userEmail}
          score={gameData.score}
        />
      )}
    </View>
  );
}
