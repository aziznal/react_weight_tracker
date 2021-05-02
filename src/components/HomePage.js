import { Link } from 'react-router-dom';
import {useState} from 'react';

import BackendService from '../BackendService';

import WeightForm from "./WeightForm";
import MetricImperialSwitch from './WeightFormComponents/metricImperialSwitch';

import SummarySection from './SummarySection';

const HomePage = ({ weight, setWeight, currentUnit, setUnit, measureDate, setMeasureDate, measureTime, setMeasureTime }) => {

    let [showAddWeight, setShowAddWeight] = useState(false);

    const onSubmit = async (entry) => {
        await BackendService.addEntry(entry);
    }

    return (
        <div className="body-wrapper">


            <div className="homepage-container" >

                <button onClick={ () => setShowAddWeight(!showAddWeight) }>
                    Me Cliquez!
                </button>

                <div className="separator"></div>

                <div className="row">
                    <Link to={'/about'}>About</Link>
                </div>


            </div>

            {
                showAddWeight &&
                <div className="column weight-add-menu slide-from-left">
                    {/* ### */}
                    <MetricImperialSwitch currentUnit={currentUnit} updateUnit={(newUnit) => setUnit(newUnit)} />

                    <div className="separator"></div>

                    {/* ### */}
                    <WeightForm

                        weight={weight}
                        updateWeight={setWeight}
                        updateUnit={setUnit}
                        currentUnit={currentUnit}

                        updateDate={setMeasureDate}
                        updateTime={setMeasureTime}

                    />

                    <div className="separator"></div>


                    < SummarySection

                        currentUnit={currentUnit}
                        weight={weight}
                        date={measureDate}
                        time={measureTime}
                        onEntrySubmit={onSubmit}

                    />
                </div>

            }

        </div>
    )
}

export default HomePage
