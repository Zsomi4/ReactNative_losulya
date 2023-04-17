// File: App.js
// Author: Gubis Zsombor Dániel
// Copyright: 2023, Gubis Zsombor Dániel
// Group: Szoft_II_N
// Date: 2023-04-17
// Github: https://github.com/zsomi4/
// Licenc: GNU GPL 

import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [chestCircumference, setChestCircumference] = useState('');
  const [length, setLength] = useState('');
  const [horseWeight, setHorseWeight] = useState('');

  const calculateHorseWeight = () => {
    const weight = chestCircumference * chestCircumference * length;
    setHorseWeight(weight.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Mellkas Kerülete (cm)</Text>
      <TextInput
        style={styles.input}
        value={chestCircumference}
        onChangeText={setChestCircumference}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Hossz (cm)</Text>
      <TextInput
        style={styles.input}
        value={length}
        onChangeText={setLength}
        keyboardType="numeric"
      />

      <Button title="Számol" onPress={calculateHorseWeight} />

      {horseWeight ? (
        <Text style={styles.result}>{`Ló Súlya: ${horseWeight} kg`}</Text>
      ) : null}

        <Text>
          Gubis Zsombor Dániel, SzoftII N, 2023-03-27
        </Text>
        
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B4513',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
