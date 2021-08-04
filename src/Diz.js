import React from 'react'
import Digital from './digital_market/Digital';
import Footer from './footer/Footer'
import Main1 from './main1/Main1'
import Navbar from './Nav/Navbar'
import Service1 from './service1/Service1';
const Diz = () => {
    return (
        <>
            <Navbar/>
            <Main1/>
           <Digital/>
           <Service1/>
            <Footer/>
        </>
    )
}

export default Diz;