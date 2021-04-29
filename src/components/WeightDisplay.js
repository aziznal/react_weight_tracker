import { PropTypes } from 'prop-types';


const WeightDisplay = ({ currentUnit, weight }) => {
    return (
        <div className="weight-display">
            <span>
                You weigh {weight} {currentUnit}(s)
            </span>
        </div>
    )
}


WeightDisplay.propTypes = {

    currentUnit: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired

}


export default WeightDisplay
