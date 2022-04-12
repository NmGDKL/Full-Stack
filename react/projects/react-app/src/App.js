import React from 'react'
import GlobalStyle from './GlobalStyle'
import AppRouter from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <GlobalStyle/>
      <AppRouter/>
      </BrowserRouter>
    </div>
  )
}

export default App
