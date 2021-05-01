
import {PropTypes} from 'prop-types';



const DateDisplay = ({ date, time }) => {


    return (
        <div className="column">

            <div className="row">
                <h3 style={{ marginRight: "1em" }}>
                    Date:
            </h3>

                <span>{date}</span>
            </div>

            <div className="row">
                <h3 style={{ marginRight: "1em" }}>
                    Time:
            </h3>

                <span>{time}</span>

            </div>

        </div>
    )
}

DateDisplay.propTypes = {

    date: PropTypes.string,
    time: PropTypes.string

}

export default DateDisplay
