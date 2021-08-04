import React from 'react'
import About1 from './about1/About1';
import Contactus from './contact/Contactus'
import Footer from './footer/Footer';
import Navbar from './Nav/Navbar';

const Contact = () => {
    return (
        <>
        <Navbar/>
        <About1/>
            <Contactus/>
            <Footer/>
        </>
    )
}
export  default Contact;
