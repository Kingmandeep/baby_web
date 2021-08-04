import React from 'react'
import "./navs.css";
import { NavLink } from 'react-router-dom';
const Navbar = () => {

    return (
        <>
         <header>
             <div className="hleft  animate__animated animate__slideInDown" >
                 <img src="./favicon.ico" alt=""/>
                 <p>We're the Web Wizards !</p>
             </div>
             <div className="hright" >
                <ul className="main-nav animate__animated animate__slideInDown"  id="check-class">
                <li><NavLink activeClassName="active_class"  to='/' className="main_nav">HOME</NavLink></li>
            <li><NavLink activeClassName="active_class"  to='/about' className="main_nav">ABOUT</NavLink> </li>
            <li><NavLink activeClassName="active_class"  to='/service' className="main_nav">SERVICES</NavLink></li>
                   
                </ul>
                <span  class="mobile-icon" onClick={() => {
                        var x = document.getElementById("check-class");
                        if (x.style.display === "none") {
                            x.style.display = "block";
                        } else {
                            x.style.display = "none";
                        }
                    }}><i className="fa fa-bars"></i></span>

             </div>
                

           </header>
        </>
    )
}

export default Navbar;