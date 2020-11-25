import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle'

import Header from './components/Header/Header'
import Home from './views/Home'
import Contato from './views/Contato'
import NotFound from './views/NotFound'

function App() {
    return (
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/" children={<Home/>} />
            <Route path="/contato" children={<Contato/>} />
            <Route path="/not-found" children={<NotFound/>} />
          </Switch>
          <GlobalStyle/>
        </Router>
    )
}

export default App