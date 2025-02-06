import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// import { register } from '../redux/authActions';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(state => state.error);

  const handleRegister = () => {
    dispatch(register(name, email, password));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      {/* {error && <Text style={styles.error}>{error}</Text>}
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" value={password} secureTextEntry onChangeText={setPassword} />
      <Button title="Register" onPress={handleRegister} />
      <Button title="Back to Login" onPress={() => navigation.navigate('Login')} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,               // Takes up the full screen
    justifyContent: 'center',  // Centers content vertically
    alignItems: 'center',      // Centers content horizontally
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',           // Sets input width to 80% of the container
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  error: {
    color: 'red',
  },
});


export default RegisterScreen;
