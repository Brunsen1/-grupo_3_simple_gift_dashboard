import './App.css';
import { useEffect } from 'react';
import Body from './components/Body';
import Head from './components/Head';

function App() {
	return (
		<html lang="es">
			<Head />
			<div className="App">
				<Body />
			</div>
		</html>
	);
}

export default App;
