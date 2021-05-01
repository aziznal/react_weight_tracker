import { PropTypes } from 'prop-types';


const WeightDisplay = ({ currentUnit, weight }) => {
    return (
        <span className="row weight-display">
            You weighed {weight} {currentUnit}(s)
        </span>
    )
}


WeightDisplay.propTypes = {

    currentUnit: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired

}


export default WeightDisplay
