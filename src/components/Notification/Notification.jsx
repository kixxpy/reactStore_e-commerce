import React from 'react'
import styles from './Notification.module.css';
import titket from '../assets/ticket-percent.png';
export const Notification = () => {
	return (
		<div className={styles.notification}>
			<img src={titket} alt="titket" />
			<p>30% off storewide — Limited time!</p>
		</div>
	)
}
