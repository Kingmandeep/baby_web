import React from 'react'
import Brands from './brand/Brands'
import Footer from './footer/Footer'
import Main1 from './main1/Main1'
import Navbar from './Nav/Navbar'
import Service1 from './service1/Service1'

 const Brand = () => {
    return (
        <>
            <Navbar/>
            <Main1/>
           <Brands/>
            <Service1/>
            <Footer/>
        </>
    )
}
export default Brand;
