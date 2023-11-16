import React from 'react';
import styles from './Footer.module.css';
import instagram_icon from '../assets/instagram_icon.png';
import pintester_icon from '../assets/pintester_icon.png';
import whatsapp_icon from '../assets/whatsapp_icon.png';

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
			<div className={styles.social_icon}>
				<div className={styles.social_icon_container}>
					<img src={instagram_icon} alt="instagram icon" />
				</div>
				<div className={styles.social_icon_container}>
					<img src={pintester_icon} alt="pintester icon" />
				</div>
				<div className={styles.social_icon_container}>
					<img src={whatsapp_icon} alt="whatsapp icon" />
				</div>
			</div>
			<div className={styles.copyright}>
					<p>Copiright @ 2023 - All Right Reserved.</p>
				</div>
		</div>
	);
};
