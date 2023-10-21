import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import allReducers from './redux/reducers/index.js'
import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({ 
  reducer:allReducers,
}
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
