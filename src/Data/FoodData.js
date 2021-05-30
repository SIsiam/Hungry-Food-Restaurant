import burger from "../Image/FoodImg/Burger/Beef Burgers.jpg";
import burger1 from "../Image/FoodImg/Burger/Bison Burgers.jpg";
import burger2 from "../Image/FoodImg/Burger/Black Bean Burgers.jpg";
import burger3 from "../Image/FoodImg/Burger/Portobello Mushroom Burgers.jpg";
import burger4 from "../Image/FoodImg/Burger/Veggie Burgers.jpeg";
import burger5 from "../Image/FoodImg/Burger/Veggie Burgers.jpeg";

import desert from "../Image/FoodImg/Desert/CHOCOLATE MOLTEN LAVA CAKES.jpg";
import desert2 from "../Image/FoodImg/Desert/CINNAMON 'FRIED' ICE CREAM.jpg";
import desert3 from "../Image/FoodImg/Desert/GREEK BAKLAVA.jpg";
import desert4 from "../Image/FoodImg/Desert/LEMON SOUFFLES.jpg";
import desert5 from "../Image/FoodImg/Desert/TIRAMISU LAYER CAKE.jpg";
import desert6 from "../Image/FoodImg/Desert/WHITE CHOCOLATE RASPBERRY CHEESECAKE.jpg";

import salad from "../Image/FoodImg/Salad/Chicken Minced Salad.jpg";
import salad2 from "../Image/FoodImg/Salad//Crispy Noodle Salad.jpg";
import salad3 from "../Image/FoodImg/Salad/Mixed Beans Salad.jpg";
import salad4 from "../Image/FoodImg/Salad/Prawn and Litchi Salad.jpg";
import salad5 from "../Image/FoodImg/Salad/Vegetable Som Tam Salad.jpg";

import seaFood from "../Image/FoodImg/Sea-Food/Arbroath Smokies.jpg";
import seaFood2 from "../Image/FoodImg/Sea-Food/Blue crab.jpg";
import seaFood3 from "../Image/FoodImg/Sea-Food/Fried catfish.jpg";
import seaFood4 from "../Image/FoodImg/Sea-Food/Grilled-swordfish-GettyImages.jpg";
import seaFood5 from "../Image/FoodImg/Sea-Food/Seafood jambalaya.jpg";

const foods = [{
		id: 0,
		type: 'Burger',
		slug: 'burger',
		items: [{
				id: 0,
				name: 'Beef Burgers',
				info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
				price: 6.99,
				img: burger,
			},
			{
				id: 1,
				name: 'Bison Burgers',
				info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
				price: 9.99,
				img: burger1
			},
			{
				id: 2,
				name: 'Black Bean Burgers',
				info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
				price: 10.99,
				img: burger2
			},
			{
				id: 3,
				name: 'Portobello Mushroom Burgers',
				info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
				price: 8.99,
				img: burger3
			},
			{
				id: 4,
				name: 'Burger Veggie Burgers',
				info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
				price: 19.99,
				img: burger4
			},
			{
				id: 5,
				name: 'Royel Veggie Burgers ',
				info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
				price: 3.99,
				img: burger5
			}
		]
	},

	{
		id: 1,
		type: 'DESSERT',
		slug: 'dessert',
		items: [{
				id: 0,
				name: 'CHOCOLATE MOLTEN LAVA CAKES',
				info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
				price: 23.99,
				img: desert
			},
			{
				id: 1,
				name: 'CINNAMON FRIED ICE CREAM',
				info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
				price: 9.99,
				img: desert2
			},
			{
				id: 2,
				name: 'GREEK BAKLAVA',
				info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
				price: 6.99,
				img: desert3
			},
			{
				id: 3,
				name: 'LEMON SOUFFLES',
				info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
				price: 8.99,
				img: desert4
			},
			{
				id: 4,
				name: 'TIRAMISU LAYER CAKE',
				info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
				price: 15.99,
				img: desert5
			},
			{
				id: 5,
				name: 'WHITE CHOCOLATE RASPBERRY CHEESECAKE',
				info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
				price: 7.99,
				img: desert6
			}
		]
	},

	{
		id: 2,
		type: 'SALAD',
		slug: 'salad',
		items: [{
				id: 0,
				name: 'Chicken Minced Salad',
				info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
				price: 9.99,
				img: salad
			},
			{
				id: 1,
				name: 'Crispy Noodle Salad',
				info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
				price: 10.99,
				img: salad2
			},
			{
				id: 2,
				name: 'Mixed Beans Salad',
				info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
				price: 61.99,
				img: salad3
			},
			{
				id: 3,
				name: 'Prawn and Litchi Salad',
				info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
				price: 28.99,
				img: salad4
			},
			{
				id: 4,
				name: 'Vegetable Som Tam Salad.jpg',
				info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
				price: 19.99,
				img: salad5
			}
		]
	},
	{
		id: 3,
		type: 'SEAFOOD',
		slug: 'seaFood',
		items: [{
				id: 0,
				name: 'Arbroath Smokies.jpg',
				info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
				price: 23.99,
				img: seaFood
			},
			{
				id: 1,
				name: 'Blue crab',
				info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
				price: 9.99,
				img: seaFood2
			},
			{
				id: 2,
				name: 'Fried catfish',
				title: 'How we dream about our future',
				info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
				price: 6.99,
				img: seaFood3
			},
			{
				id: 3,
				name: 'Grilled-swordfish-Getty',
				title: 'How we dream about our future',
				info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
				price: 8.99,
				img: seaFood4
			},
			{
				id: 4,
				name: 'Seafood jambalaya',
				info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
				price: 15.99,
				img: seaFood4
			},
			{
				id: 5,
				name: 'Shrimp',
				info: 'Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.',
				price: 7.99,
				img: seaFood5
			},
		]
	}
];

export default foods;