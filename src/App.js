import { useState } from 'react';

import './StyleNormalize.css'
import './App.scss';


import Header from "./components/Header";
import WeightForm from "./components/WeightForm";
import MetricImperialSwitch from './components/WeightFormComponents/metricImperialSwitch';

import WeightDisplay from './components/WeightDisplay';

const App = () => {

  const [currentUnit, setUnit] = useState("KG");
  const [weight, setWeight] = useState(0);

  const [measureDate, setMeasureDate] = useState();
  const [measureTime, setMeasureTime] = useState();

  return (
    <div className="container body-wrapper">

      <Header />

      <MetricImperialSwitch updateUnit={(newUnit) => setUnit(newUnit)} />

      <div className="separator"></div>

      <WeightForm

        updateWeight={setWeight}
        updateUnit={setUnit}
        currentUnit={currentUnit}

        updateDate={setMeasureDate}
        updateTime={setMeasureTime}

      />

      <div className="separator"></div>

      <WeightDisplay currentUnit={currentUnit} weight={weight} />


      <div className="column">

        <div className="row">
          <h3 style={{ marginRight: "1em" }}>
            Date:
          </h3>

          <span>{measureDate}</span>
        </div>

        <div className="row">
          <h3 style={{ marginRight: "1em" }}>
            Time:
          </h3>

          <span>{measureTime}</span>

        </div>

      </div>



    </div>

  )
}

export default App
