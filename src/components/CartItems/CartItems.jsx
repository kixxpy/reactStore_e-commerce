import React from 'react';
import styles from './CartItems.module.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';

export const CartItems = () => {
	const { all_product, cartItem, removeFromCart } = React.useContext(ShopContext);
	return (
		<div className={styles.cartitems}>
			<div className={styles.format_main}>
				<p>Product</p>
				<p>Title</p>
				<p>Price</p>
				<p>Quantity</p>
				<p>Total</p>
				<p>Remave</p>
			</div>
			<hr />
			{all_product.map((item) => {
				if (cartItem[item.id] > 0) {
					return (
						<div key={item.id}>
							<div className={styles.format}>
								<img className={styles.image} src={item.image} alt="..." />
								<p>{item.name}</p>
								<p>{item.new_price}</p>
								<button className={styles.btn}>{cartItem[item.id]}</button>
								<p>{item.new_price * cartItem[item.id]}</p>
								<img
									onClick={() => {
										removeFromCart(item.id);
									}}
									src={remove_icon}
									alt="remove"
								/>
							</div>
						</div>
					);
				}
			})}
		</div>
	);
};
