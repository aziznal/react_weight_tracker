import { Link } from 'react-router-dom';

import BackendService from '../BackendService';

import WeightForm from "./WeightForm";
import MetricImperialSwitch from './WeightFormComponents/metricImperialSwitch';

import SummarySection from './SummarySection';

const HomePage = ({ weight, setWeight, currentUnit, setUnit, measureDate, setMeasureDate, measureTime, setMeasureTime }) => {

    const onSubmit = async (entry) => {
        await BackendService.addEntry(entry);
    }

    return (
        <div className="body-wrapper">
            {/* ### */}
            <MetricImperialSwitch  currentUnit={currentUnit} updateUnit={(newUnit) => setUnit(newUnit)} />

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

            <div className="separator"></div>

            <div className="row">
                <Link to={'/about'}>About</Link>
            </div>

        </div>
    )
}

export default HomePage
