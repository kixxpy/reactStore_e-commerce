import React from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/logo.png';
import cart from '../assets/cart_icon.svg';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	const [menu, setMenu] = React.useState('shop');

	return (
		<div className={styles.navbar}>
			<div className={styles.logo}>
				<img src={logo} alt="logo" />
			</div>
			<ul className={styles.menu}>
				<li onClick={() => setMenu('shop')}>
					<Link to="/">Shop</Link>
					{menu === 'shop' ? <hr /> : <></>}
				</li>
				<li onClick={() => setMenu('men')}><Link to='/mens'>Men</Link>{menu === 'men' ? <hr /> : <></>}</li>
				<li onClick={() => setMenu('woman')}><Link to='/womens'>Women</Link>{menu === 'woman' ? <hr /> : <></>}</li>
				<li onClick={() => setMenu('kids')}><Link to='/kids'>Kids</Link>{menu === 'kids' ? <hr /> : <></>}</li>
			</ul>
			<div className={styles.cart}>
				<Link to='login'><button>Login</button></Link>
				<Link to='/cart'><img src={cart} alt="cart icon" /></Link>
				<div className={styles.count}>0</div>
			</div>
		</div>
	);
};
