import React from 'react';

import PropTypes from 'prop-types';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import './weight-list-styles.scss';

import Entry from './Entry/Entry';

import { scrollEntrySectionToBottom, scrollEntrySectionToTop } from '../../utils/navigation-utils'

import AskBeforeDeleteCheckBox from './AskBeforeDeleteCheckBox';
import WeightListContext from '../../Contexts/WeightListContext';


const propTypes = {

	onDeleteEntry: PropTypes.func.isRequired

};


const WeightList = ({ onDeleteEntry }) => {
	
	const [askBeforeDelete, setAskBeforeDelete] = React.useState(true);

	const weightListContext = React.useContext(WeightListContext);

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

		for (let entry of weightListContext.weights) {

			formattedEntryList.push(
				<Entry key={entry.id} entryData={entry} onDeleteEntry={onDeleteEntryWrapper} />
			)

		}

		return formattedEntryList;

	}

	return (
		<div className="weight-list-container">

			<h1>
				Weight Entries List
			</h1>

			<AskBeforeDeleteCheckBox

				askBeforeDelete={askBeforeDelete}
				onAskBeforeDeleteChange={setAskBeforeDelete}

			/>

			<section className="weight-list" id="entry-section">

				<ul>

					{
						createEntriesList()
					}

				</ul>

			</section>
				
			{/* TODO: Change the up and down symbols into actual icons */}
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
