import React from "react";
import './HomePage.css'
import image2 from '../Images/blobbs.jpg'
import image3 from '../Images/blob3.svg'
import Navbar from "./Navbar";
import Button from "./Button";


const HomePage = () => {
	return (
		<div className="homepage">
            <Navbar/>
             <img src= {image2} alt="svg" className="blob-img"></img> 
            <div className="homepage-text">
                  <h2 className="homepage-h2">Welcome to iTodos</h2>
                  <p className="homepage-p">infinitely flexible. incredibly easy to use.</p>
            </div>
           
                  <img src= {image3} alt="svg" className="blob1-img"></img>  
                  <img src= {image3} alt="svg" className="blob3-img"></img> 
           
		</div>
            
	);
}

export default HomePage;