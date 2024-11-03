import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const generateRandomQuestion = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operators = ['+', '-', '*', '/'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    case '/':
      correctAnswer = Math.round((num1 / num2) * 10) / 10;
      break;
    default:
      correctAnswer = num1 + num2;
  }

  const wrongAnswer1 = correctAnswer + Math.floor(Math.random() * 5) + 1;
  const wrongAnswer2 = correctAnswer - Math.floor(Math.random() * 5) - 1;

  const answers = [correctAnswer, wrongAnswer1, wrongAnswer2].sort(() => Math.random() - 0.5);

  return {
    question: `${num1} ${operator} ${num2} = ?`,
    correctAnswer: correctAnswer,
    answers: answers,
  };
};

const JogoScreen = ({ userName, userEmail }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(0);

  const startGame = () => {
    setGameStarted(true);
    setGameEnded(false);
    setScore(0);
    setQuestionNumber(1);
    setCurrentQuestion(generateRandomQuestion());
  };

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }

    if (questionNumber < 5) {
      setQuestionNumber(questionNumber + 1);
      setCurrentQuestion(generateRandomQuestion());
    } else {
      setGameEnded(true);
      setGameStarted(false);
    }
  };

  return (
    <View style={styles.container}>
      {!gameStarted && !gameEnded && (
        <>
          <Text style={styles.message}>Olá, {userName}!</Text>
          <Button title="Iniciar Jogo" onPress={startGame} />
        </>
      )}

      {gameStarted && !gameEnded && (
        <>
          <Text style={styles.message}>Questão {questionNumber} de 5</Text>
          <Text style={styles.question}>{currentQuestion?.question}</Text>
          {currentQuestion?.answers.map((answer, index) => (
            <TouchableOpacity
              key={index}
              style={styles.answerButton}
              onPress={() => handleAnswer(answer)}
            >
              <Text style={styles.answerText}>{answer}</Text>
            </TouchableOpacity>
          ))}
          <Text style={styles.score}>Pontuação: {score}</Text>
        </>
      )}

      {gameEnded && (
        <>
          <Text style={styles.message}>Fim de jogo!</Text>
          <Text style={styles.score}>Jogador(a): {userName} E-mail: {userEmail}</Text>
          <Text style={styles.message}>Sua pontuação final foi: {score}</Text>
          <Button title="Reiniciar Jogo" onPress={startGame} />
        </>
      )}
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
  },
  answerButton: {
    backgroundColor: '#007bff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  answerText: {
    color: '#fff',
    fontSize: 18,
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default JogoScreen;
