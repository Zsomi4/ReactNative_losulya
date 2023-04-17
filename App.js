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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
