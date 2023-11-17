import React from 'react';
import styles from './ProductDisplay.module.css';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';

export const ProductDisplay = (props) => {
	const {product} = props;

	return (
		<div className={styles.productdisplay}>
			<div className={styles.left}>
				<div className={styles.img_list}>
					<img src={product.image} alt="" />
					<img src={product.image} alt="" />
					<img src={product.image} alt="" />
					<img src={product.image} alt="" />
				</div>
				<div className={styles.productdisplay_img}>
					<img className={styles.productdisplay_main_img} src={product.image} alt="" />
				</div>
			</div>
			<div className={styles.right}>
				<h1>{product.name}</h1>
				<div>
					<img className={styles.star} src={star_icon} alt="" />
					<img className={styles.star} src={star_icon} alt="" />
					<img className={styles.star} src={star_icon} alt="" />
					<img className={styles.star} src={star_icon} alt="" />
					<img className={styles.star} src={star_dull_icon} alt="" />
					<p>(122)</p>
				</div>
			</div>
		</div>
	)
}
