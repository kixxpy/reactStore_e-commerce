import React from 'react';
import styles from './Offers.module.css';
import exclusive_image from '../assets/women-cb.png';
export const Offers = () => {
	return (
		<div className={styles.offers}>
			<div className={styles.left}>
				<h1>Exclusive</h1>
				<h1>Offers for You</h1>
				<p>ONLY ON BEST SELLERS PRODUCT</p>
				<button className={styles.btn} onClick={() => window.scrollTo(0, 4000)}>
					Check now
				</button>
			</div>
			<div className={styles.right}>
				<img src={exclusive_image} alt="exclusive" />
			</div>
		</div>
	);
};
