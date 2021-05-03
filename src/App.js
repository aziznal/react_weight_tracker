import { BrowserRouter as Router, Route } from 'react-router-dom'

import  {useState} from 'react';

import './StyleNormalize.css'
import './App.scss';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';


const App = () => {


  const [currentUnit, setUnit] = useState("KG");
  const [weight, setWeight] = useState(0);

  const [measureDate, setMeasureDate] = useState();
  const [measureTime, setMeasureTime] = useState();

  return (

    <Router>

      <Route path='/' exact render={() => (
        
        <HomePage
          weight={weight}
          setWeight={setWeight}
          currentUnit={currentUnit}
          setUnit={setUnit}
          measureDate={measureDate}
          setMeasureDate={setMeasureDate}
          measureTime={measureTime}
          setMeasureTime={setMeasureTime}
        />
        )}/>

      <Route path='/about' exact component={AboutPage} />

    </Router>

  )
}

export default App
