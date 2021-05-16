import PropTypes from 'prop-types';

import WeightEntry from '../../../classes/WeightEntry';


const propTypes = {
	
	entryData: PropTypes.shape(
		{
			id: PropTypes.number.isRequired,

			weight: PropTypes.number.isRequired,

			unit: PropTypes.string.isRequired,

			date: PropTypes.string.isRequired,

			time: PropTypes.string.isRequired
		}
	).isRequired,
	
	onDeleteEntry: PropTypes.func.isRequired

}


const Entry = ({ entryData, onDeleteEntry }) => {


	let weight_entry = new WeightEntry(entryData);

	return (
		<div className="entry">


			<h2>
				{weight_entry.date} - {weight_entry.time}
			</h2>

			<h3>
				{weight_entry.weight} {weight_entry.unit}
			</h3>

			<span>
				#{weight_entry.id}
			</span>

			<button className="btn entry-del" onClick={ () => onDeleteEntry(weight_entry.id) }>
				Delete
			</button>

		</div>
	)
}


Entry.propTypes = propTypes;


export default Entry

