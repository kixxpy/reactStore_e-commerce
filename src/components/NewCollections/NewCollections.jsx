import React from 'react';
import styles from './NewCollections.module.css';
import new_collections from '../assets/new_collections.js';
import { Item } from '../Item/Item';

export const NewCollections = () => {
	return (
		// Блок новая коллекция
		<div className={styles.new_collection}>
			<h1>NEW COLLECTIONS</h1>
			<hr />
			<div className={styles.item}>
				{new_collections.map((item) => {
					return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
				})}
			</div>
		</div>
	);
};
