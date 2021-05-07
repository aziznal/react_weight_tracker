import WeightEntry from '../../../classes/WeightEntry';



const scrollEntrySectionToBottom = () => {

	let entry_section = document.getElementById("entry-section");

	entry_section.scrollBy(
		{
			top: entry_section.scrollHeight,
			behavior: 'smooth'

		}
	);

}


const scrollEntrySectionToTop = () => {

	let entry_section = document.getElementById("entry-section");

	entry_section.scrollTo(
		{
			top: 0,
			behavior: 'smooth'

		}
	);

}


const Entry = ({ data, onDelete }) => {


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

			<span className="entry-del" onClick={ () => onDelete(weight_entry.id) }>
				&times;
			</span>

		</div>
	)
}

export default Entry

export {

	scrollEntrySectionToBottom,

	scrollEntrySectionToTop

}
