import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Alert,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Button, TextInput, Text, FAB} from 'react-native-paper';

const RegisterScreen = ({}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }
    setLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Error', 'That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('Error', 'That email address is invalid!');
      } else if (error.code === 'auth/weak-password:') {
        Alert.alert('Error', 'Password is too weak!');
      } else {
        Alert.alert('Error', error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          autoCapitalize="none"
        />
        <View>
          <Text>Profile Picture</Text>
          <FAB icon={'plus'}></FAB>
        </View>
        <View>
          <Text>Display Colour</Text>
          <FAB icon={'plus'}></FAB>
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Button
            mode="contained"
            onPress={() => {
              handleRegister();
            }}>
            Register
          </Button>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    color: '#6750A4',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#0288D1',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
