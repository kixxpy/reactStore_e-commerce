import React from 'react';
import styles from './IntsaBlock.module.css';
// import photo
import photo1 from '../assets/inst/beautiful-young-tattooed-person.jpeg';
import photo2 from '../assets/inst/cheerful-young-european-girl-with-dark-flowing-hair-and-closed-eyes-in-winter-clothes-studio-people-emotions-lifestyle-and-fashion-concept_197531-31623.jpeg';
import photo3 from '../assets/inst/close-up-indoor-studio-fashion-portrait-of-gorgeous-woman-in-stylish-winter-brown-coat-and-black-hat_273443-3778.jpeg';
import photo4 from '../assets/inst/fashion-portrait-of-young-elegant-woman_1328-2743.jpeg';
import photo5 from '../assets/inst/shirt-mockup-concept-with-plain-clothing_23-2149448743.avif';
import photo6 from '../assets/inst/young-woman-working-in-her-fashion-design-workshop_23-2148877386.jpeg';

export const IntsaBlock = () => {
	return (
		<div className={styles.instablock}>
			<div>
				<h1>newsfeed</h1>
				<h2>Instagram</h2>
				<h3>Follow us on social media for more discount & promotions</h3>
				<p>@3legant_official</p>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.photo}>
					<img src={photo1} alt="" />
				</div>
				<div className={styles.photo}>
					<img src={photo2} alt="" />
				</div>
				<div className={styles.photo}>
					<img src={photo3} alt="" />
				</div>
				<div className={styles.photo}>
					<img src={photo4} alt="" />
				</div>
				<div className={styles.photo}>
					<img src={photo5} alt="" />
				</div>
				<div className={styles.photo}>
					<img src={photo6} alt="" />
				</div>
			</div>
		</div>
	);
};
