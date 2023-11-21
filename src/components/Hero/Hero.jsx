import React from 'react';
import styles from './Heros.module.css';
import women from '../assets/women-cbcb.png';
import {Button} from '../Button/Button';

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
				<Button text={'Latest Collection'} />
			</div>
			<div className={styles.right}>
				<img src={women} alt="women" />
			</div>
		</div>
	);
};
