import React from 'react'
import "./footer.css";
 const Footer = () => {
    return (
        <>
             <div className="footer">
                <div className="fleft">
                    <h1><span>Follow Us</span></h1>
                    <a href="https://www.instagram.com/" >Instagram</a>
                    <a href="https://www.linkedin.com/"> Linked In</a>
                    <input type="text" placeholder="Search ..."></input>
                    <button>Search</button>
                </div>
                <div className="fright">
                    <h1>Contact Us</h1>
                    <h2><span>Phone No: </span>9873844226</h2>
                    <h3><span>Gmail : </span></h3><a href="mailto:webdwiz@gmail.com">webdwiz@gmail.com</a>
                </div>
                <div className="flast">
                    <span>We're the best Wizards !</span>
                </div>
            </div>
        </>
    )
}
export default Footer;