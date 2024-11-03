import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import JogoScreen from './Jogo';

const CadastroScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    if (name.length === 0 || email.length === 0) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }

    setIsRegistered(true);
  };

  return (
    <View style={styles.container}>
      {isRegistered ? (
        <JogoScreen userName={name} userEmail={email} /> // Usa JogoScreen ao invés de Jogo
      ) : (
        <>
          <Text style={styles.title}>Cadastro</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            value={email}
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
          />

          <Button title="Cadastrar" onPress={handleRegister} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default CadastroScreen;
