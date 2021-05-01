
import WeightDisplay from './WeightDisplay';
import DateDisplay from './DateDisplay';
import SubmitWeight from './SubmitWeight';


const SummarySection = ({ weight, currentUnit, date, time, onEntrySubmit }) => {

    const constructEntry = () => {

        let newEntry = {
            "weight": weight,
            "unit": currentUnit,
            "date": date,
            "time": time
        }

        return newEntry;

    }

    const onEntrySubmitWrapper = async () => {

        let entry = constructEntry();

        await onEntrySubmit(entry);

    }

    return (
        <div>

            <WeightDisplay
                currentUnit={currentUnit}
                weight={weight}
            />

            <DateDisplay
                date={date}
                time={time}
            />

            <SubmitWeight
                onEntrySubmit={onEntrySubmitWrapper}
            />

        </div>
    )
}

export default SummarySection
