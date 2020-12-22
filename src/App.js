import React from 'react'
// Router
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom"
// CSS
import './App.css'
// Components
import SiteNavbar from './Components/SiteNavbar';
import SiteFooter from './Components/SiteFooter';
import Home from './Pages/Home';

const App = () => {
  
  return (
    <body>
      <SiteNavbar />
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      <SiteFooter />
    </body>
  );
}

export default App;
