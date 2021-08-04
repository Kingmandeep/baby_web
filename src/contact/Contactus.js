import React from 'react'
import "./contactus.css";
 const Contactus = () => {
    return (
        <>
             <div className="contact">
                <div className="contacthead">
                    <h1><span>Contact Us</span></h1>
                </div>
                <div className="contactbox">
                <form>

              
                <h2>Name (required)</h2>
                <input type="text" required ></input>
                <h2>Email (required)</h2>
                <input type="email"  required></input>
                <h2>Message</h2>
                <textarea></textarea>
                <br></br>
                <button>Submit</button>
                </form>
                </div>
            </div>
        </>
    )
}

export default Contactus;