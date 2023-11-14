import React from 'react';
import styles from './Heros.module.css';
import arrow_icon from '../assets/arrow.png'

export const Hero = () => {
	return (
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
				<div className={styles.latest_btn}>
					<div>Latest Collection</div>
					<img src={arrow_icon} alt="arrow_icon" />
				</div>
			</div>

		</div>
	);
};
