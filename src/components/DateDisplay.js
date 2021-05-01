
import {PropTypes} from 'prop-types';



const DateDisplay = ({ date, time }) => {


    return (
        <span className="row date-time-display">
            at {date} - {time}
        </span>
    )
}

DateDisplay.propTypes = {

    date: PropTypes.string,
    time: PropTypes.string

}

export default DateDisplay
