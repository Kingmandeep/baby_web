import React from 'react'
import About from './About'
import Decorate from './Decorate'
import Footerf from './Footerf'
import Footerl from './Footerl'
// import Header from './Header'
import HeaderTop from './HeaderTop'
import Ratedproducts from './Ratedproducts'

const App = () => {
    return (
        <div>
            <HeaderTop/>
            {/* <Header/> */}
            <About/>
            <Decorate/>
            <Ratedproducts/>

            <Footerf/>
            <Footerl/>
        </div>
    )
}
export default App;
