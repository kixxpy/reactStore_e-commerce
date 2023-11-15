import React from 'react';
import styles from './NewsLetter.module.css';

export const NewsLetter = () => {
	return (
		<div className={styles.newsletter}>
			<h1>Get Exclusive Offers On Your Email</h1>
			<p>Subscribe to our newletter and stay updated</p>
			<div>
				<input type="email" placeholder="Your Email id" />
				<button className={styles.btn}>Subscribe</button>
			</div>
		</div>
	);
};
