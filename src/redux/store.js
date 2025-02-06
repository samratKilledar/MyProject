// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import authReducer from './reducer/authReducer';

// const store = createStore(authReducer, applyMiddleware(thunk));

// export default store;


import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducer/authReducer';

const store = configureStore({
  reducer: authReducer, // Ensure this matches the default exported reducer
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Correct way to use middleware
});

export default store;

