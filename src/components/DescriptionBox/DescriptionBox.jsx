import React from 'react';
import styles from './DescriptionBox.module.css';

export const DescriptionBox = () => {
	return (
		<div className={styles.descriptionbox}>
			<div className={styles.navigator}>
				<div className={styles.nav_box}>Decription</div>
				<div className={`${styles.nav_box} ${styles.fade}`}>Reviews (122)</div>
			</div>
			<div className={styles.description}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolorum facilis aut nulla corporis consectetur reprehenderit, qui sit temporibus animi amet recusandae ad, perferendis esse id. Provident officiis quis accusantium.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ullam expedita molestiae ab facilis temporibus corrupti veniam sapiente, quidem officia, magni labore, reprehenderit delectus aperiam praesentium iste aliquid repellendus dolorum?</p></div>
		</div>
	);
};
