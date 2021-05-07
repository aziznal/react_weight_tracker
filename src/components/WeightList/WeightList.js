
import Entry from './Entry/Entry';

import './weight-list-styles.scss';



const WeightList = ({ entries }) => {

	const createEntriesList = () => {
		
		const formattedEntryList = [];

		for (let entry of entries) {

			formattedEntryList.push(
				<Entry key={entry.id} data={entry} />
			)

		}

		return formattedEntryList;

	}

	return (
		<div className="weight-list-container" id="entry-section">
			
			<ul>

				{
					createEntriesList()
				}

			</ul>

		</div>
	)
}

export default WeightList
