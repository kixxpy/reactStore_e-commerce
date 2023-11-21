import React from 'react';
import styles from './Navbar.module.css';
import cart from '../assets/shopping bag.png';
import authorization from '../assets/Vector.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

export const Navbar = () => {
	const [menu, setMenu] = React.useState('shop');
	const { getTotalItem } = React.useContext(ShopContext);

	return (
		<div className={styles.navbar}>
			<div className={styles.logo}>
				<Link to="/">
					<div className={styles.logo_styles} onClick={() => setMenu('shop')}>
						reactStore<span>.</span>
					</div>
				</Link>
			</div>
			<ul className={styles.menu}>
				<li onClick={() => setMenu('shop')}>
					<Link to="/">Shop</Link>
					{/* Выбраному блоку добавляется дотчеркивание */}
					{menu === 'shop' ? <hr /> : <></>}
				</li>
				<li onClick={() => setMenu('men')}>
					<Link to="/mens">Men</Link>
					{menu === 'men' ? <hr /> : <></>}
				</li>
				<li onClick={() => setMenu('woman')}>
					<Link to="/womens">Women</Link>
					{menu === 'woman' ? <hr /> : <></>}
				</li>
				<li onClick={() => setMenu('kids')}>
					<Link to="/kids">Kids</Link>
					{menu === 'kids' ? <hr /> : <></>}
				</li>
			</ul>
			<div className={styles.cart}>
				<Link to="login">
					<img src={authorization} alt="authorization" />
				</Link>
				<Link to="/cart">
					<img src={cart} alt="cart icon" />
				</Link>
				<div className={styles.count}>{getTotalItem()}</div>
			</div>
		</div>
	);
};
