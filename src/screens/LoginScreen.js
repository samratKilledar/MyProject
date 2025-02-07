import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/authActions';
import TextComponent from '../components/TextComponent';
import TextInputComponent from '../components/TextInputComponent';
import CheckBox from 'react-native-check-box'; // Import CheckBox
import { StyleSheet, View } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // State for checkbox

  const dispatch = useDispatch();
  const error = useSelector(state => state.error);
  const user = useSelector(state => state.user);

  useEffect(() => {
    if (user === 'samrat') {
      navigation.navigate('Register');
    }
  });

  const handleLogin = () => {
    dispatch(login(email, password));
    if (rememberMe) {
      console.log('User wants to be remembered');
      // Store credentials securely if needed
    }
  };

  return (
    <View style={styles.container}>
      <TextComponent type="heading" title="Login" />
      <TextInputComponent placeholder="Email" type="email" value={email} onChangeText={setEmail} />
      <TextInputComponent placeholder="Password" type="password" value={password} onChangeText={setPassword} />

      {/* Remember Me Checkbox */}
      <View style={styles.rememberContainer}>
        <CheckBox
          isChecked={rememberMe}
          onClick={() => setRememberMe(!rememberMe)}
          checkBoxColor="#900" // Change checkbox color
        />
        <TextComponent type="paragraph" title="Remember Me" style={styles.rememberText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  rememberText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default LoginScreen;
