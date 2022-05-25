import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MainPage from './airwaybill/MainPage'
import { ContextProvider } from './context/Context'

import './App.css'

function App() {
  return (
    <ContextProvider>
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={() => <MainPage />} />
          </Switch>
        </Router>
      </div>
    </ContextProvider>
  )
}

export default App
