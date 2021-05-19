import { BrowserRouter as Router, Route } from 'react-router-dom'

import './StyleNormalize.css'
import './App.scss';

import HomePage from './components/pages/HomePage/HomePage';
import AboutPage from './components/pages/AboutPage/AboutPage';


const App = () => {

	// TODO: install ESLint and follow guidelines closer

	// TODO - Design: Opt for tabs-based UI instead of the current weird sliding things. This would also allow a more effective use of Routes

	// TODO - Design: Switch to a dark color scheme

	return (

		<Router>

			<Route path='/' exact component={HomePage} />

			<Route path='/about' exact component={AboutPage} />

		</Router>

	)
}

export default App
