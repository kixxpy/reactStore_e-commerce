import React from 'react';
import { CartItems } from '../components/CartItems/CartItems';
import { ShopContext } from '../context/ShopContext';
import {CartEmpty} from '../components/CartEmpty/CartEmpty';

export const Cart = () => {
	const { coutCart } = React.useContext(ShopContext);
	console.log(coutCart);
	if (coutCart) {
		return (
			<div>
				<CartItems />
			</div>
		);
	} else {
		return (
			<div>
				<CartEmpty/>
			</div>
		)
	}
};
