import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';

const DecryptText: React.FC = () => {
  const [encryptedText, setEncryptedText] = useState<string>('');
  const [shiftAmount, setShiftAmount] = useState<number>(3); // Default shift amount
  const [decryptedText, setDecryptedText] = useState<string>('');

  const decryptText = () => {
    if (!encryptedText) {
      Alert.alert('Error', 'Please enter the encrypted message.');
      return;
    }

    // Decrypt the text using Caesar cipher with the user-defined shift amount
    const decryptedData = caesarCipher(encryptedText, -shiftAmount);

    // Update the state to display the encrypted text
    setEncryptedText(decryptedData);
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
        code = ((code - 65 + shift) % 26 + 26) % 26 + 65;
      } else if (code >= 97 && code <= 122) {
        code = ((code - 97 + shift) % 26 + 26) % 26 + 97;
      }
      return String.fromCharCode(code);
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter encrypted message"
        onChangeText={setEncryptedText}
        value={encryptedText}
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
      <TouchableOpacity style={styles.decryptButton} onPress={decryptText}>
        <Text style={styles.buttonText}>Decrypt</Text>
      </TouchableOpacity>
      <Text style={styles.decryptedText}>{decryptedText !== '' ? `Decrypted Message: ${decryptedText}` : ''}</Text>
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
    fontSize: 18,
    backgroundColor: 'rgba(57, 41, 21, 1)'
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
  decryptButton: {
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
  decryptedText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default DecryptText;