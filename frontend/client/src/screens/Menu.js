//Menu.js
import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RestaurantList from '../components/RestaurantList';
import DishesMenu from '../components/DishesMenu';
import Cart from '../components/Cart';
import { RestaurantContext } from '../contexts/RestaurantContext';
import './Menu.css'; // Import the CSS file for Menu component

const Menu = () => {
	const { selectedRestaurant } = useContext(RestaurantContext);

	return (
		<div>
			<Navbar />
			<div className="content">
				<Cart style={{ position: "absolute", right: "20px", top: "20px" }} />
				<RestaurantList />
				{selectedRestaurant && (
					<div className="dishes-menu-container">
						<DishesMenu />
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
}

export default Menu;
