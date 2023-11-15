import React from 'react';
import { Hero } from '../components/Hero/Hero.jsx';
import { Popular } from '../components/Popular/Popular.jsx';
import { Offers } from '../components/Offers/Offers.jsx';
import { NewCollections } from '../components/NewCollections/NewCollections.jsx';
import { NewsLetter } from '../components/NewsLetter/NewsLetter.jsx';
import '../index.css';

export const Shop = () => {
	return (
		// Рендер банера и карточек с популярными товарами
		<div>
			<Hero />
			<Popular />
			<Offers />
			<NewCollections />
			<NewsLetter />
		</div>
	);
};
