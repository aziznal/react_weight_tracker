import PropTypes from 'prop-types';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import './weight-list-styles.scss';

import Entry from './Entry/Entry';

import { scrollEntrySectionToBottom, scrollEntrySectionToTop } from '../../utils/navigation-utils'

import AskBeforeDeleteCheckBox from './AskBeforeDeleteCheckBox';


const propTypes = {

	entries: PropTypes.array.isRequired,

	onDeleteEntry: PropTypes.func.isRequired,

	askBeforeDelete: PropTypes.bool.isRequired,
	onAskBeforeDeleteChange: PropTypes.func.isRequired

};

// FIXME: Entry List is re-rendering on every small change

const WeightList = ({ entries, onDeleteEntry, askBeforeDelete, onAskBeforeDeleteChange }) => {

	console.log("WeightList");

	const onDeleteEntryWrapper = (entry_id) => {

		if (askBeforeDelete) {

			confirmAlert({
				customUI: ({ onClose }) => {
					return (

						<div className="confirm-delete-dialog">

							<h1>Confirm Delete</h1>
							<p>Are you sure you want to delete entry #{entry_id}?</p>

							<div className="row">

								<button className="btn" onClick={onClose} style={{ backgroundColor: "red" }}>
									Cancel
								</button>

								<button className="btn" onClick={() => { onDeleteEntry(entry_id); onClose(); }}>
									Yes
								</button>

							</div>

						</div>

					)
				}
			})

		} else {

			onDeleteEntry(entry_id)

		}



	}


	const createEntriesList = () => {

		const formattedEntryList = [];

		for (let entry of entries) {

			formattedEntryList.push(
				<Entry key={entry.id} entryData={entry} onDeleteEntry={onDeleteEntryWrapper} />
			)

		}

		return formattedEntryList;

	}

	return (
		<div className="weight-list-container">

			<AskBeforeDeleteCheckBox

				askBeforeDelete={askBeforeDelete}
				onAskBeforeDeleteChange={onAskBeforeDeleteChange}

			/>

			<section className="weight-list" id="entry-section">

				<ul>

					{
						createEntriesList()
					}

				</ul>

			</section>

			<span className="entry-list-scroll-to-top" onClick={scrollEntrySectionToTop}>
				^
			</span>

			<span className="entry-list-scroll-to-bottom" onClick={scrollEntrySectionToBottom}>
				v
			</span>

		</div>
	)
}


WeightList.propTypes = propTypes;

export default WeightList
