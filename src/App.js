import { Navbar } from './components/Navbar/Navbar.jsx';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './pages/Shop.jsx';
import { ShopCategory } from './pages/ShopCategory.jsx';
import { Product } from './pages/Product.jsx';
import { Cart } from './pages/Cart.jsx';
import { LoginSigup } from './pages/LoginSigup.jsx';

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Navbar />
				<Routes>
				  {/* Путь зависит от выбранной категории */}
					<Route path="/" element={<Shop />} />
					<Route path="/mens" element={<ShopCategory caregory="men" />} />
					<Route path="/womens" element={<ShopCategory caregory="women" />} />
					<Route path="/kids" element={<ShopCategory caregory="kid" />} />
					<Route path="/product" element={<Product />}>
						<Route path=" :productId" element={<Product />} />
					</Route>
					<Route path="/cart" element={<Cart />} />
					<Route path="/login" element={<LoginSigup />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
