import React, { createContext } from 'react';
import all_product from '../components/assets/all_product.js';

export const ShopContext = createContext(null);
const getDefaultCart = () => {
	let cart = {};
	for (let i = 0; i < all_product.length + 1; i++) {
		cart[i] = 0;
	}
	return cart;
};

const ShopContextProveder = (props) => {
	const [cartItem, setCartItem] = React.useState(getDefaultCart());
	const [coutCart, setCountCart] = React.useState(0);

	const addToCart = (itemId) => {
		setCountCart((prev) => (prev+=1))
		setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
	};
	const removeFromCart = (itemId) => {
		setCountCart((prev) => (prev-=1))
		setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	};
	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for(const item in cartItem) {
			if(cartItem[item] > 0) {
				let itemInfo = all_product.find((product)=> product.id === Number(item));
				totalAmount = totalAmount + itemInfo.new_price * cartItem[item];
			}
		}
		return totalAmount;
	}
	const getTotalItem = () => {
		let totalItem = 0;
		for(const item in cartItem) {
			if(cartItem[item] > 0) {
				totalItem = totalItem + cartItem[item];
			}
		}
		return totalItem;
	}
	const contextValue = { all_product, cartItem, addToCart, removeFromCart, getTotalCartAmount, getTotalItem , coutCart};

	return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProveder;
