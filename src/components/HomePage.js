import { Link } from 'react-router-dom';
import { useState } from 'react';

import BackendService from '../BackendService';

import AddWeight from './AddWeight';
import Header from './Header';

const HomePage = ({ weight, setWeight, currentUnit, setUnit, measureDate, setMeasureDate, measureTime, setMeasureTime }) => {

    let [showAddWeight, setShowAddWeight] = useState(false);

    const onSubmit = async (entry) => {
        await BackendService.addEntry(entry);
    }

    return (
        <div className="body-wrapper">

            <div className="homepage-container" >

                <Header />

                <button className="btn add-weight-toggle-button" onClick={() => setShowAddWeight(!showAddWeight)}>
                    Add Entry
                </button>

                <div className="separator"></div>

                <div className="row">
                    <Link to={'/about'}>About</Link>
                </div>


            </div>


            < AddWeight

                showAddWeight={showAddWeight}

                weight={weight}
                setWeight={setWeight}

                currentUnit={currentUnit}
                setUnit={setUnit}

                measureDate={measureDate}
                setMeasureDate={setMeasureDate}

                measureTime={measureTime}
                setMeasureTime={setMeasureTime}

                onSubmit={onSubmit}
            />


        </div>
    )
}

export default HomePage
