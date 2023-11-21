import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<ul className={styles.link}>
				<li>Company</li>
				<li>Products</li>
				<li>Offices</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
			<div className={styles.copyright}>
					<p>Copiright @ 2023 - All Right Reserved.</p>
				</div>
		</div>
	);
};
