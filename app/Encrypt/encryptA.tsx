import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';

const SecureText: React.FC = () => {
  const [textInput, setTextInput] = useState<string>('');
  const [shiftAmount, setShiftAmount] = useState<number>(3); // Default shift amount

  const encryptText = () => {
    if (!textInput) {
      Alert.alert('Error', 'Please enter a message to encrypt.');
      return;
    }

    // Encrypt the text using Caesar cipher with the user-defined shift amount
    const encryptedData = caesarCipher(textInput, shiftAmount);

    // Update the state to display the encrypted text
    setTextInput(encryptedData);
  };

  const increaseShift = () => {
    setShiftAmount(shiftAmount + 1);
  };

  const decreaseShift = () => {
    if (shiftAmount > 1) {
      setShiftAmount(shiftAmount - 1);
    }
  };

  // Caesar cipher function
  const caesarCipher = (text: string, shift: number): string => {
    return text.replace(/[a-zA-Z]/g, (char) => {
      let code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        code = ((code - 65 + shift) % 26) + 65;
      } else if (code >= 97 && code <= 122) {
        code = ((code - 97 + shift) % 26) + 97;
      }
      return String.fromCharCode(code);
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter message"
        onChangeText={setTextInput}
        value={textInput}
      />
      <View style={styles.shiftButtonContainer}>
        <TouchableOpacity style={styles.shiftButton} onPress={increaseShift}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.shiftText}>Shift: {shiftAmount}</Text>
        <TouchableOpacity style={styles.shiftButton} onPress={decreaseShift}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.encryptButton} onPress={encryptText}>
        <Text style={styles.buttonText}>Encrypt</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#D0B38A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: '90%',
    borderColor: 'rgba(255, 242, 225, 1)',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'rgba(255, 242, 225, 1)',
    fontSize: 18
  },
  shiftButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
  },
  shiftButton: {
    backgroundColor: '#8B6F47',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  shiftText: {
    fontSize: 16,
    fontWeight:'600'
  },
  encryptButton: {
    backgroundColor: '#8B6F47',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: 350,
    height:50
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
  },
});

export default SecureText;
