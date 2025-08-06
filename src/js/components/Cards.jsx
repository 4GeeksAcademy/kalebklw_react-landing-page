import React from "react";

const Cards = () =>{
    return(
    <div className="container-fluid w-75">
        <div className="card" style={{ width: '16rem' }}>
            <img 
                src="https://imgs.search.brave.com/v2wC9zUN5qYiceEiYYLsar32u2Iwb1rSAiL5utviKLo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTQ0/ODEyNTQwL3Bob3Rv/L21vdW50YWluLWxh/bmRzY2FwZS1wb250/YS1kZWxnYWRhLWlz/bGFuZC1hem9yZXMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PW1iUzhYNGd0Smtp/M2dHRGpmQzBzRzNy/c3o3RDBubHM1M2Ew/YjRPUFhMbkU9" 
                className="card-img-top" 
                alt="..."
            />
                <div className="card-body container-fluid">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary" style={{ display:'flex', justifyContent: 'center'}}>Find Out More</a>
                </div>
        </div>
    </div>
    )
};

export default Cards;