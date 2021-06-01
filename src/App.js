import { BrowserRouter as Router, Route } from 'react-router-dom'

import './StyleNormalize.css'
import './App.scss';
import './tabs-ui.scss';

import HomePage from './components/pages/HomePage/HomePage';
import AboutPage from './components/pages/AboutPage/AboutPage';
import TabsList from './components/TabsList/TabsList';
import AddWeight from './components/AddWeight/AddWeight';


const App = () => {

	// TODO: install ESLint and follow guidelines closer

	// TODO - Design: Switch to a dark color scheme

	return (

		<Router>

			
			<div className="tabs-container">

				<TabsList />

				<Route path='/' exact component={HomePage} />

				<Route path='/add-weight' exact component={AddWeight} />

				<Route path='/about' exact component={AboutPage} />

			</div>

		</Router>

	)
}

export default App
