import React from "react";
import Navigation from "./Navigation";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Footer from "./Footer";

const Home = () =>{
	return(
		<div>
			<Navigation />
			<Jumbotron />
			<Cards />
			<Footer />
		</div>
	)
};

export default Home;