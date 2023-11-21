import React from 'react';
import styles from './CartItems.module.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';

export const CartItems = () => {
	const { all_product, cartItem, removeFromCart, getTotalCartAmount } = React.useContext(ShopContext);
	return (
		<div className={styles.cartitems}>
			<div className={styles.format_main}>
				<p>Product</p>
				<p>Title</p>
				<p>Price</p>
				<p>Quantity</p>
				<p>Total</p>
				<p>Remove</p>
			</div>
			<hr />
			{all_product.map((item) => {
				if (cartItem[item.id] > 0) {
					return (
						<div key={item.id}>
							<div className={styles.format}>
								<img className={styles.image} src={item.image} alt="..." />
								<p>{item.name}</p>
								<p>${item.new_price}</p>
								<button className={styles.btn}>{cartItem[item.id]}</button>
								<p>${item.new_price * cartItem[item.id]}</p>
								<img
									className={styles.remove}
									onClick={() => {
										removeFromCart(item.id);
									}}
									src={remove_icon}
									alt="remove"
								/>
							</div>
							<hr />
						</div>
					);
				} else return null;
			})}
			<div className={styles.cartitems_down}>
				<div className={styles.cartitems_total}>
					<h1>Cart Totals</h1>
					<div className={styles.cartitems_item}>
						<p>Subtatal</p>
						<p>${getTotalCartAmount()}</p>
					</div>
					<hr />
					<div className={styles.cartitems_item}>
						<p>Shipping Fee</p>
						<p>Free</p>
					</div>
					<hr />
					<div className={styles.cartitems_item}>
						<h3>Total</h3>
						<p>${getTotalCartAmount()}</p>
					</div>
					<button>PROCCED TO CHEKOUT</button>
				</div>
				<div className={styles.promocode}>
					<p>If you have a promo code, Enter it here</p>
					<div className={styles.promobox}>
						<input type="text" placeholder="promo code" />
						<button>Submit</button>
					</div>
				</div>
			</div>
		</div>
	);
};
