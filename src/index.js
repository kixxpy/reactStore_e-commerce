import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProveder from './context/ShopContext.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ShopContextProveder>
			<App />
		</ShopContextProveder>
	</React.StrictMode>,
);
