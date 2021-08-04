import React from 'react'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Service from './Service'
import { Route,Switch } from 'react-router-dom';
import Web from './Web'
import Diz from './Diz'
import Brand from './Brand'
import Graphics from './Graphics'

 const App = () => {
    return (
        <>
        <Switch>
        <Route exact path ="/" component={Home}></Route>
        <Route exact path ="/about" component={About}></Route>
        <Route exact path ="/service" component={Service}></Route>
        <Route exact path ="/contact" component={Contact}></Route>
        <Route exact path ="/web_dev" component={Web}></Route>
        <Route exact path ="/digital_marketing" component={Diz}></Route>
        <Route exact path ="/brand_managment" component={Brand}></Route>
        <Route exact path ="/graphics_designing" component={Graphics}></Route>
        </Switch>
           
        </>
    )
}

export default App;