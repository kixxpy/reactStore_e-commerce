import { Navbar } from './components/Navbar/Navbar.jsx';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './pages/Shop.jsx';
import { ShopCategory } from './pages/ShopCategory.jsx';
import { Product } from './pages/Product.jsx';
import { Cart } from './pages/Cart.jsx';
import { LoginSigup } from './pages/LoginSigup.jsx';
import { Footer } from './components/Footer/Footer.jsx';
//img
import men_banner from './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png';
import kid_banner from './components/assets/banner_kids.png';

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Navbar />
				<Routes>
					{/* Путь зависит от выбранной категории */}
					<Route path="/" element={<Shop />} />
					<Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
					<Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
					<Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
					<Route path="/product" element={<Product />}>
						<Route path=" :productId" element={<Product />} />
					</Route>
					<Route path="/cart" element={<Cart />} />
					<Route path="/login" element={<LoginSigup />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
