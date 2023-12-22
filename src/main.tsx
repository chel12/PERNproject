import React from 'react';
import './fonts/CyrillicOld-Bold.ttf';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
//создание виртуал дома и помещение туда index.html
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
