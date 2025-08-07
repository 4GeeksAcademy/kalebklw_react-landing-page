import React from "react";

const Cards = ({img, cardTitle, cardDesc, buttonLink, buttonText}) =>{
    return(
    <div className="container-fluid" style={{ "--bs-gutter-x": "7.5rem" }}>
        <div className="card" style={{ width: '18rem' }}>
            <img src={img} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{cardTitle}</h5>
                    <p className="card-text">{cardDesc}</p>
                    <a href= {buttonLink} className="btn btn-primary" style={{ display:'flex', justifyContent: 'center'}}>{buttonText}</a>
                </div>
        </div>
    </div>
    )
};

export default Cards;