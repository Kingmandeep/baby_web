import React from 'react'
import Review from './Review'

 const Ratedproducts = () => {
    return (
        <>
        <div className="ratedproducts">
            <div className="ratedbox">
                <div className="rated1">
                    <h4>TOP RATED PRODUCTS</h4>
                    <Review />
                    <hr></hr>
                    <Review />
                    <hr></hr>
                </div>
                <div className="rated2">
                <h4>FEATURED PRODUCTS</h4>
                </div>
                <div className="rated3">
                <h4>RECENT REVIEWS</h4>
                </div>
                <div className="rated4">
                <h4>LATEST PRODUCTS</h4>
                </div>
            </div>
        </div>
            
        </>
    )
}
export default Ratedproducts;
