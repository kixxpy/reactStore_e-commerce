import React from 'react';
import styles from './ProductDisplay.module.css';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';

export const ProductDisplay = (props) => {
	const { product } = props;

	return (
		<div className={styles.productdisplay}>
			<div className={styles.left}>
				<div className={styles.img_list}>
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
				<div className={styles.stars}>
					<img className={styles.star} src={star_icon} alt="" />
					<img className={styles.star} src={star_icon} alt="" />
					<img className={styles.star} src={star_icon} alt="" />
					<img className={styles.star} src={star_icon} alt="" />
					<img className={styles.star} src={star_dull_icon} alt="" />
					<p>(122)</p>
				</div>
				<div className={styles.price}>
					<div className={styles.old_price}>${product.old_price}</div>
					<div className={styles.new_price}>${product.new_price}</div>
				</div>
				<div className={styles.description}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officia incidunt quas, vitae sit temporibus. Deserunt aspernatur ex mollitia velit, dicta perferendis consequuntur provident molestiae illo officia! Quaerat, quisquam illo!
				</div>
				<div className={styles.size}>
					<h1>Select Size</h1>
					<div className={styles.sizes}>
						<div>S</div>
						<div>M</div>
						<div>L</div>
						<div>XL</div>
						<div>XXL</div>
					</div>
				</div>
				<button>ADD TO CART</button>
				<p className={styles.category}><span>Category: </span>Women, T-Shirt, Crop Top</p>
				<p className={styles.category}><span>Tags: </span>Modern, Latest</p>
			</div>
		</div>
	);
};
