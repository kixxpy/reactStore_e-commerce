import React from 'react';
import styles from './Heros.module.css';
import women from '../assets/women-cbcb.png';

export const Hero = () => {
	return (
		// Главный банер
		<div className={styles.hero}>
			<div className={styles.left}>
				<h2>NEEW ARRIVALS ONLY</h2>
				<div>
					<div className={styles.hend_icon}>
						<p>new</p>
					</div>
					<p>collection</p>
					<p>for everyone</p>
				</div>
				<button className={styles.btn} onClick={() => window.scrollTo(0,2270)}>Latest Collection</button>
			</div>
			<div className={styles.right}>
				<img src={women} alt="women" />
			</div>
		</div>
	);
};
