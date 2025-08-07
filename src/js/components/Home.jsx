import React from "react";
import Navigation from "./Navigation";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Footer from "./Footer";

const cardTitlesPro = [
	{
		title: "Serene Forest",
		description: "A cozy walk never hurt anyone.",
		img: "https://imgs.search.brave.com/EnElOZhzT6ykAzyTyc0CzA-HFUlr8Or-KImNebNtGh8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMS8w/Ni8yNS8yMy8yNy9m/b3Jlc3QtNjM2NDkx/M18xMjgwLmpwZw",
		buttonText: "Learn About Forests",
		buttonLink: "url"
	},
	{
		title: "Nebula",
		description: "...and people say aliens don't exist.",
		img: "https://imgs.search.brave.com/b2v9cqa2XmuWsVWwAOXaGUHuiSkiwH2w6Y8WirHg5kw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzI5Lzg3LzM3/LzM2MF9GXzUyOTg3/Mzc2N19GTXdUWDh0/d1dSd0FJNHh0azJY/NjVUSGVmbEQ3RnA5/cy5qcGc",
		buttonText: "Take a Journey",
		buttonLink: "url"
	},
	{
		title: "Could Use Some Rain",
		description: "Years since the last rain",
		img: "https://imgs.search.brave.com/TX55oScJZUTW7OmvXsEJD9JFSKp2MZKufG6aJLb9ck4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MzI2Nzc5NC9waG90/by93ZWF0aGVyZWQt/ZGVzZXJ0LXRyZWUt/YXQtbGFzdC1saWdo/dC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9NG96ajBLR1Zf/TXNHczU1dTlrY1hU/ZTU5QWJQNnRCdnRs/WmE5M0pUZVB0ST0",
		buttonText: "Learn About Deserts",
		buttonLink: "url"
	},
	{
		title: "A Little Too Much Rain",
		description: "This could use less rain",
		img: "https://imgs.search.brave.com/tVqvfaLQRTkSmyp5UZ7kK3DvrxCOqnuM-wQ1dDldkn4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTQ1/NjI5MS9wZXhlbHMt/cGhvdG8tMTQ1NjI5/MS5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA",
		buttonText: "Take a Dive",
		buttonLink: "url"
	},
]

const Home = () =>{
	return(
		<div>
			<Navigation />
			<Jumbotron />
			<div className="d-flex justify-content-center">
				{cardTitlesPro.map(
					(item) =>{
						return(
							<div>
								<Cards img={item.img} cardTitle={item.title} cardDesc={item.description} buttonLink={item.buttonLink} buttonText={item.buttonText}/>
							</div>
						)
					}
				)}
			</div>
			<div className="d-flex" style={{minHeight: "59vh", flexDirection: "column"}}>
			<Footer />
			</div>
		</div>
	)
};

export default Home;