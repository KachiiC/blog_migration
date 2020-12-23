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
import SiteNavbar from './Components/SiteNavbar'
import SiteFooter from './Components/SiteFooter'
import Home from './Pages/Home';
import PageData from './Data/PageData'
import HeaderBanner from './Components/SiteNavbar/HeaderBanner'

const App = () => {
  
  const listOfPages = PageData.map((page, index) => (
    
      <Route path={`/${page.title}`} key={index}>
        <HeaderBanner image={page.banner}/>
        {page.route}
      </Route>

    )
  )
  
  return (
    <body>
      <SiteNavbar />
        <BrowserRouter>
          <Switch>
            {listOfPages}
            <Route path="/">
              <HeaderBanner 
                image={"http://via.placeholder.com/1350x900.png?text=Placeholder"}
              />
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      <SiteFooter />
    </body>
  );
}

export default App;
