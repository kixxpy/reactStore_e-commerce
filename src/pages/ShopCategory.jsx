import React, { useContext } from 'react';
import styles from './css/ShopCategory.module.css';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/assets/dropdown_icon.png';
import { Item } from '../components/Item/Item';

export const ShopCategory = (props) => {
	const { all_product } = React.useContext(ShopContext);

	return (
		<div className={styles.shop_category}>
			<img src={props.banner} alt="banner" />
			<div className={styles.index_sort}>
				<p>
					<span>Showing 1-12</span> out of 36 products
				</p>
				<div className={styles.sort}>
					Sort by <img src={dropdown_icon} alt="" />
				</div>
			</div>
			<div className={styles.products}>
				{all_product.map((item) => {
					if (props.category === item.category) {
						return (
							<Item
								key={item.id}
								id={item.id}
								name={item.name}
								image={item.image}
								new_price={item.new_price}
								old_price={item.old_price}
							/>
						);
					} else {
						return null;
					}
				})}
			</div>
		</div>
	);
};
