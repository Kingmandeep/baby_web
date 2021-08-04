import React from 'react'
import Footer from './footer/Footer'
import Main1 from './main1/Main1'
import Main2 from './main2/Main2'
import Main4 from './main4/Main4'
import Main5 from './main5/Main5'
import Navbar from './Nav/Navbar'
import Service1 from './service1/Service1'
 const Home = () => {
    return (
        <>
        <Navbar/>
            <Main1/>
            <Main2/>
            {/* <Main3/> */}
            <Service1/>
            <Main4/>
            <Main5/>
            <Footer/>
            
        </>
    )
}
export default Home;