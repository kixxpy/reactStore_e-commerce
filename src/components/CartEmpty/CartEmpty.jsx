import React from 'react';
import styles from './CartEmpty.module.css';

export const CartEmpty = () => (
	<div className={styles.cart_empty}>
		<h2>
			Cart is empty <span>😕</span>
		</h2>
		<p>Most likely, you did not add the item to your cart.</p>
		<p>To place an order, go to the <a href="/">main page</a>.</p>
	</div>
);
