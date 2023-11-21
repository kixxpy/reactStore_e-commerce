import React from 'react';
import styles from './Offers.module.css';
import exclusive_image from '../assets/women-cb.png';
import {Button} from '../Button/Button.jsx';
export const Offers = () => {
	return (
		<div className={styles.offers}>
			<div className={styles.left}>
				<h1>Exclusive</h1>
				<h1>Offers for You</h1>
				<p>ONLY ON BEST SELLERS PRODUCT</p>
				<Button text={'Check now'}/>
			</div>
			<div className={styles.right}>
				<img src={exclusive_image} alt="exclusive" />
			</div>
		</div>
	);
};
