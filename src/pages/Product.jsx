import React from 'react';
import {ShopContext} from '../context/ShopContext';
import {Beadcrum} from '../components/Beadcrum/Beadcrum';
import {ProductDisplay} from '../components/ProductDisplay/ProductDisplay';
import { useParams } from 'react-router-dom';

export const Product = () => {
	const {all_product} = React.useContext(ShopContext);
	const {productId} = useParams();
	const product = all_product.find((e) => e.id === Number(productId));
	return (
		<div>
			<Beadcrum product={product}/>
			<ProductDisplay product={product}/>
		</div>
	)
}
