import PropTypes from 'prop-types';

import './summarysection_styles.scss';


const propTypes = {

	weight: PropTypes.number,

	weightUnit: PropTypes.string,

	date: PropTypes.string.isRequired,

	time: PropTypes.string.isRequired,

	onSubmitEntry: PropTypes.func.isRequired

}

const defaultProps = {

	weight: 0,

	weightUnit: "KG"

}


const SummarySection = ({ weight, weightUnit, date, time, onSubmitEntry }) => {

	const constructEntry = () => {

		let newEntry = {
			"weight": weight,
			"unit": weightUnit,
			"date": date,
			"time": time
		}

		return newEntry;

	}


	const checkEntryIsValid = (entry) => {

		let isValid = (
			entry.weight !== 0 &&
			entry.date !== undefined &&
			entry.time !== undefined
		);

		return isValid;

	}


	const onSubmitEntryWrapper = async () => {

		let entry = constructEntry();

		if (checkEntryIsValid(entry)) {

			await onSubmitEntry(entry);

		} else {
			alert("Did you choose Weight (> 0), Date, and Time?");
		}


	}

	return (
		<div>

			<span className="row weight-display">
				You weighed {weight} {weightUnit}
			</span>


			<span className="row date-time-display">
				at {date} - {time}
			</span>


			<button className="row btn" onClick={onSubmitEntryWrapper}>
				Submit Entry
            </button>

		</div>
	)
}

SummarySection.propTypes = propTypes;
SummarySection.defaultProps = defaultProps;

export default SummarySection
