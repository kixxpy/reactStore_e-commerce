import React from 'react';
import styles from './Beadcrum.module.css';
import arrow_icon from '../assets/arrow.png';

export const Beadcrum = (props) => {
	const {product} = props;
	return (
		<div className={styles.beadcrum}>
			HOME <img src={arrow_icon} alt="arrow_icon" /> 
			SHOP <img src={arrow_icon} alt="arrow_icon" />
			{product.category} <img src={arrow_icon} alt="arrow_icon" />
			{product.name}
		</div>
	)
}
