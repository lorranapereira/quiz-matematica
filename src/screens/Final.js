import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const FinalScreen = ({ userName, userEmail, score, navigateTo }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Fim de jogo!</Text>
      <Text style={styles.score}>Jogador(a): {userName}</Text>
      <Text style={styles.score}>E-mail: {userEmail}</Text>
      <Text style={styles.message}>Sua pontuação final foi: {score}</Text>
      <Button title="Reiniciar Jogo" onPress={() => navigateTo('Jogo')} />
      <Button title="Voltar ao Cadastro" onPress={() => navigateTo('Cadastro')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  message: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  score: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default FinalScreen;
