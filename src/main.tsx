import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home/Home.tsx';
import './index.css';
//создание виртуал дома и помещение туда index.html
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>
);
