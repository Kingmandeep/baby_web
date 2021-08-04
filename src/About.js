import React from 'react'
import About1 from './about1/About1'
import About2 from './about2/About2'
import Footer from './footer/Footer'
import Main2 from './main2/Main2'
import Navbar from './Nav/Navbar'

const About = () => {
    return (
        <>
            <Navbar/>
            <About1/>
            <Main2/>
            <About2/>
            <Footer/>
        </>
    )
}
export  default About;