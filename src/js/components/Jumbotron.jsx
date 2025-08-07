import React from "react";

const Jumbotron = () =>{
    return(
        <div className="container-fluid w-50">
            <div className="jumbotron mt-4 mb-3 py-4 bg-body-secondary rounded-2">
                <h1 className="display-4 ps-4">A Warm Welcome!</h1>
                <p className="ps-4">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information. It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                <div className="ps-4">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </div>
            </div>
        </div>
    )
};


export default Jumbotron;