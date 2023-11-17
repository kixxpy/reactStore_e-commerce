import React from 'react';
import styles from './Item.module.css';
import { Link } from 'react-router-dom';

export const Item = (props) => {
	return (
		<div className={styles.item}>
			<Link to={`/product/${props.id}`}><img src={props.image} alt="q" /></Link>
			<p>{props.name}</p>
			<div className={styles.prices}>
				<div className={styles.price_new}>${props.new_price}</div>
				<div className={styles.price_old}>${props.old_price}</div>
			</div>
		</div>
	);
};
