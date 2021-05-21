import React from 'react'

import PropTypes from 'prop-types';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import Entry from './Entry/Entry';


const propTypes = {

	entries: PropTypes.array.isRequired,

	onDeleteEntry: PropTypes.func.isRequired,

	askBeforeDelete: PropTypes.bool.isRequired,

}

// NOTE: This component is currently not used anywhere

const EntryList = React.memo(({ entries, onDeleteEntry, askBeforeDelete }) => {

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
		<section className="weight-list" id="entry-section">

		<ul>

			{
				createEntriesList()
			}

		</ul>

	</section>
	)
});

EntryList.propTypes = propTypes;

export default EntryList
