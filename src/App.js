import { BrowserRouter as Router, Route } from 'react-router-dom'

import { useState } from 'react';

import './StyleNormalize.css'
import './App.scss';

import { getDateOfToday, getTimeRightNow } from './utils/date-utils';

import HomePage from './components/pages/HomePage/HomePage';
import AboutPage from './components/pages/AboutPage';
import { convertKGtoLBS, convertLBStoKG } from './utils/weight-utils';


const App = () => {

	// TODO: refactor project var names.
	// TODO: install ESLint and follow guidelines closer
	// TODO: Consider useContext as well ComponentComposition while refactoring app

	// REFACTOR: Separate each component's CSS into its own file instead of gathering 90% of the CSS in App.scss

	// TODO - Design: Opt for tabs-based UI instead of the current weird sliding things. This would also allow a more effective use of Routes

	const [weight, setWeight] = useState(0);
	const [weightUnit, setWeightUnit] = useState("KG");

	const [date, setDate] = useState(getDateOfToday());
	const [time, setTime] = useState(getTimeRightNow());


	const setWeightUnitWrapper = (newUnit) => {

		// When unit is changed, current weight entered will be converted to relevant unit.
		setWeightUnit(newUnit);

		let newWeight = Math.round((weightUnit === 'KG' ? convertKGtoLBS(weight) : convertLBStoKG(weight)) * 100) / 100;

		setWeight(newWeight);

	}


	return (

		<Router>

			<Route path='/' exact render={() => (

				<HomePage

					weight={weight}
					setWeight={setWeight}

					weightUnit={weightUnit}
					setWeightUnit={setWeightUnitWrapper}

					date={date}
					setDate={setDate}

					time={time}
					setTime={setTime}
				/>
			)} />

			<Route path='/about' exact component={AboutPage} />

		</Router>

	)
}

export default App
