import React from "react";

const Jumbotron = () =>{
    return(
        <div className="container-fluid w-50">
            <div className="jumbotron mt-4 mb-3 py-4 bg-body-secondary rounded-2">
                <h1 className="display-4 ps-4">A Warm Welcome!</h1>
                <p className="ps-4 pe-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="ps-4">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </div>
            </div>
        </div>
    )
};


export default Jumbotron;