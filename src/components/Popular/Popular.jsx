import React from 'react'
import styles from './Popular.module.css';
import data_product from '../assets/data.js';
import {Item} from '../Item/Item';

export const Popular = () => {
	return (
		<div className={styles.popular}>
			<h1>POPULAR IN WOMEN</h1>
			<hr />
			<div className={styles.item}>
				{data_product.map((item) => {
					return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
				})}
			</div>
		</div>
	)
}
