import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';


const API_URL = 'https://yourapi.com/api/auth';

export const login = (email, password) => async dispatch => {
  try {
    //const response = await axios.post(`${API_URL}/login`, { email, password });
   // await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: "samrat" });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.response.data.message });
  }
};

export const register = (name, email, password) => async dispatch => {
  try {
    const response = await axios.post(`${API_URL}/register`, { name, email, password });

    dispatch({ type: REGISTER_SUCCESS, payload: response.data.user });
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error.response.data.message });
  }
};
