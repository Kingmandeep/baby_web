import React from 'react'
import "./main1.css";
import { NavLink } from 'react-router-dom';
const Main1 = () => {

   

        return (
            <>
                 <div className="main1">
            <div className='m1box1'>
                
                <h1><span>World Class Website Designing</span></h1>
                <h1> and</h1>
                <h1> Digital Marketing</h1>
                <p>Global Quality within 24 hours</p>
                <button><NavLink activeClassName="active_class"  to='/contact' className="main_nav">Start Your Project</NavLink></button>
               
            </div>
        </div>
            </>
        )
    }
    export default Main1;
