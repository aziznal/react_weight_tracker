
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


    const checkEntryIsValid = (entry) => {

        let validity = (
            entry.weight !== 0 &&
            entry.date !== undefined &&
            entry.time !== undefined
        );

        return validity;

    }


    const onEntrySubmitWrapper = async () => {

        let entry = constructEntry();

        if ( checkEntryIsValid(entry) ) {

            await onEntrySubmit(entry);

        } else {
            alert("Must fill all fields with proper values before submitting, dweeb.")
        }


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
