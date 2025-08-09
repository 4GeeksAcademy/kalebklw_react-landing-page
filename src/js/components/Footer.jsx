import React from "react";

const Footer = ()=>{
    return(
        // Note to self: The style in this div, is so the footer is forced to stay at the bottom of the page due to minHeight style being utilized in the div within the Home Component.
        <div style={{marginTop: "auto"}}>  
           <footer>
                     <div className="container-fluid text-center mt-5 py-4 bg-secondary">
                        <p className="mb-0" style={{color: 'white'}}>Copyright © Your Website 2025</p>
                    </div>
           </footer>
        </div>
    )
};

export default Footer;