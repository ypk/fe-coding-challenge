import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import { Board } from './components/board'
import configureStore from './store'
import { Provider } from 'react-redux'

const store = configureStore()
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Board />
    </Provider>
  </React.StrictMode>)
