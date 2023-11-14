import React from 'react';
import styles from './Item.module.css';

export const Item = (props) => {
	return (
		<div className={styles.item}>
			<img src={props.image} alt="q" />
			<p>{props.name}</p>
			<div className={styles.prices}>
				<div className={styles.price_new}>${props.new_price}</div>
				<div className={styles.price_old}>${props.old_price}</div>
			</div>
		</div>
	);
};
