import WeightEntry from '../../../classes/WeightEntry';


const Entry = ({ data }) => {

	const createWeightEntry = () => {

		return new WeightEntry(data);

	}

	let weight_entry = createWeightEntry();

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

		</div>
	)
}

export default Entry
