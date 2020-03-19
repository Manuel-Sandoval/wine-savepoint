import React from 'react';
import NavBar from '../NavBar';
import Header from '../../components/Header/Header';
import { StylesProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Scrollspy from 'react-scrollspy';
import Routes from '../../components/Routes/Routes';

const App = () => {

	const dummy = Array.from(Array(50).keys());

	return (
		<div>
			<StylesProvider injectFirst>
				<CssBaseline />
				<Router>
					<div id="header">
						<Header />
					</div>
					<Scrollspy items={ ['header'] } currentClassName='hidden' scrolledPastClassName='display'>
						<div>
							<NavBar />
						</div>
					</Scrollspy>
					<Routes />
					<ul>
						{dummy.map((k) => (<li>{k}</li>))}
					</ul>
				</Router>
			</StylesProvider>
		</div>
	);
}

export default App;
