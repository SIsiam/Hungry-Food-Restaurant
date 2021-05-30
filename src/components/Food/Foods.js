import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import food from '../../Data/FoodData';
import { BtnStyle } from './FoodStyle';
import Menu from './Menu';

const Foods = () => {
	const history = useHistory()
	const cartFoods = useSelector(state => state.cart)
	const [item, setItems] = useState({});
	const [showItems, setShowItems] = useState({
		type: 'Burger',
		property: food[0],
		slug: 'burger'
	});

	useEffect(
		() => {
			let foods = food.filter((item) => {
				return item.type === showItems.type;
			});
			setItems(foods);
		},
		[showItems.type]
	);

	const handleClick = (event) => {
		let menu = food.filter((item) => {
			console.log(item);
			return item.type === event.currentTarget.innerText;
		});
		setShowItems({
			type: menu[0].type,
			property: food[menu[0].id],
			slug: menu[0].slug
		});
	};

	return (
		<BtnStyle className="container">
			<h2 id="menu">Menu</h2>
			<div className={`btn-type text-center active-${showItems.property.id}`}>
				<button onClick={handleClick} className="btn mx-3 burger">
					Burger
				</button>
				<button onClick={handleClick} className="btn mx-3 dessert">
					DESSERT
				</button>
				<button onClick={handleClick} className="btn mx-3 salad">
					SALAD
				</button>

				<button onClick={handleClick} className="btn mx-3 seafood">
					SEAFOOD
				</button>
			</div>
			<div className={`row active-item-${showItems.property.id}`}>
				{item[0]?.items.map((food) => {
					return <Menu key={food.id} food={food} slug={item[0]?.slug} />;
				})}
			</div>
		
		</BtnStyle>
	);
};

export default Foods;
