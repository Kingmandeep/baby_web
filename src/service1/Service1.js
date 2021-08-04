import React from 'react'
import "./service1.css";
import { NavLink } from 'react-router-dom';
const Service1 = () => {
    return (
        <>
            <div className="main3_">
            <div className="m2">

                <div className="m2box2">
                    <img src="https://webdwizcom.files.wordpress.com/2021/07/digitalmarketing850.jpg" alt="" />
                    <h3>DIGITAL MAKETING</h3>
                    <p>From developing a marketing strategy to managing campaigns, we can handle all your marketing and advertising needs.</p>
                    <span><NavLink activeClassName="active_class"  to='/digital_marketing' className="ser">more</NavLink></span>
                </div>

                
                <div className="m2box2">
                    <img src="https://webdwizcom.files.wordpress.com/2021/07/web-dee.jpeg?w=1024" alt="" />
                    <h3>Web Development</h3>
                    <p>Experts in web design, we craft award-winning and cutting edge online experiences.</p>
                    <span><NavLink activeClassName="active_class"  to='/web_dev' className="ser">more</NavLink></span>
                </div>
                <div className="m2box2">
                    <img src="https://webdwizcom.files.wordpress.com/2021/07/seo-1759-bs-brand-business-marketing-word-285045373-1200x675-1.jpg?w=292" alt="" />
                    <h3>Brand Management</h3>
                    <p>We help companies define a clear brand identity that will carry their global presence.</p>
                    <span><NavLink activeClassName="active_class"  to='/brand_managment' className="ser">more</NavLink></span>
                </div>

                <div className="m2box2">
                    <img src="https://webdwizcom.files.wordpress.com/2021/07/graphic.jpg" alt="" />
                    <h3>Graphic Designing</h3>
                    <p>Designs are a huge part of a brand. our experts make designs that make your brand beautiful and creative. From social media posts to poster and flyers, everything, made by the best in the industry.</p>
                    <span><NavLink activeClassName="active_class"  to='/graphics_designing' className="ser">more</NavLink></span>
                </div>

                
            </div>
        </div>
        </>
    )
}
export  default Service1;
