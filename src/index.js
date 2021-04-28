import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { BlogContextProvider } from './Context/BlogContext';


ReactDOM.render(
  <React.StrictMode>
    <BlogContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BlogContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)