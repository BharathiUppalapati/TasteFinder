// import React, { useContext } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import RestaurantList from '../components/RestaurantList';
// import DishesMenu from '../components/DishesMenu';
// import { RestaurantContext } from '../contexts/RestaurantContext';
// import './Home.css'; // Import the CSS file for Home component
// import Carousal from '../components/Carousal'

// export default function Home() {
// 	const { selectedRestaurant } = useContext(RestaurantContext);

// 	return (
// 		<div>
// 			<Navbar />
// 			<div><Carousal/></div>
// 			<div className="content">
// 				<RestaurantList />
// 				{selectedRestaurant && (
// 					<div className="dishes-menu-container">
// 						<DishesMenu />
// 					</div>
// 				)}
// 			</div>
// 			<Footer />
// 		</div>
// 	);
// }
//Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousal from '../components/Carousal';
import './Home.css'; // Import the CSS file for Home component

const Home = () => {
	return (
		<div>
			<Navbar />
			<div><Carousal /></div>
			<Footer />
		</div>
	);
}

export default Home;

