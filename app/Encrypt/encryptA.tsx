import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import * as FileSystem from 'expo-file-system';
import CryptoJS from 'crypto-js';

const SecureSnap = () => {
  const [fileUri, setFileUri] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [encryptedUri, setEncryptedUri] = useState<string>('');

  const chooseFile = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: false,
        includeBase64: true,
      });
      setFileUri(image.path);
      setFileName(image.path.split('/').pop() || 'image');
    } catch (error) {
      console.error('Image picking cancelled', error);
    }
  };

  const generateKey = () => {
    // Generate a 256-bit key for AES encryption
    const key = CryptoJS.lib.WordArray.random(32).toString(CryptoJS.enc.Hex);
    return key;
  };

  const encryptFile = async () => {
    if (!fileUri) {
      Alert.alert('Error', 'Please choose a file to encrypt.');
      return;
    }

    try {
      const fileData = await FileSystem.readAsStringAsync(fileUri, { encoding: FileSystem.EncodingType.Base64 });
      const key = generateKey();
      const encrypted = CryptoJS.AES.encrypt(fileData, key).toString();
      const encryptedFilePath = `${FileSystem.documentDirectory}${fileName}.enc`;
      await FileSystem.writeAsStringAsync(encryptedFilePath, encrypted, { encoding: FileSystem.EncodingType.UTF8 });
      setEncryptedUri(encryptedFilePath);
      Alert.alert('Success', 'File encrypted successfully.');
    } catch (error) {
      console.error('Encryption failed:', error);
      Alert.alert('Error', 'Failed to encrypt the file.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.chooseFileButton} onPress={chooseFile}>
        <Text style={styles.buttonText}>Choose File Image</Text>
      </TouchableOpacity>
      <Text style={styles.fileName}>{fileName || 'No File Chosen'}</Text>
      {fileUri && (
        <Image source={{ uri: fileUri }} style={styles.image} />
      )}
      <TouchableOpacity style={styles.encryptButton} onPress={encryptFile}>
        <Text style={styles.buttonText}>Encrypt</Text>
      </TouchableOpacity>
      {encryptedUri && (
        <Text style={styles.encryptedText}>File encrypted and saved at: {encryptedUri}</Text>
      )}
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
  chooseFileButton: {
    backgroundColor: '#8B6F47',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  fileName: {
    marginVertical: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  encryptButton: {
    backgroundColor: '#8B6F47',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  encryptedText: {
    marginVertical: 10,
    fontSize: 16,
    textAlign: 'center',
    color: 'red',
  },
});

export default SecureSnap;