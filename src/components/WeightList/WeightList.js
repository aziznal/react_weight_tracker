import PropTypes from 'prop-types';

import Entry, { scrollEntrySectionToBottom, scrollEntrySectionToTop } from './Entry/Entry';
import AskBeforeDeleteCheckBox from './AskBeforeDeleteCheckBox';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import './weight-list-styles.scss';




const WeightList = ({ entries, onDelete, askBeforeDelete, setAskBeforeDelete }) => {


	const onDeleteWrapper = (...args) => {

		if (askBeforeDelete) {

			confirmAlert({
				customUI: ({ onClose }) => {
					return (

						<div className="confirm-delete-dialog">

							<h1>Confirm Delete</h1>
							<p>Are you sure you want to delete entry #{args}?</p>

							<div className="row">

								<button className="btn" onClick={onClose} style={{ backgroundColor: "red" }}>
									Cancel
								</button>

								<button className="btn" onClick={() => { onDelete(...args); onClose(); }}>
									Yes
								</button>

							</div>

						</div>

					)
				}
			})

		} else {

			onDelete(...args)

		}



	}


	const createEntriesList = () => {

		const formattedEntryList = [];

		for (let entry of entries) {

			formattedEntryList.push(
				<Entry key={entry.id} data={entry} onDelete={onDeleteWrapper} />
			)

		}

		return formattedEntryList;

	}

	return (
		<div className="weight-list-container">

			<AskBeforeDeleteCheckBox

				askBeforeDelete={askBeforeDelete}
				setAskBeforeDelete={setAskBeforeDelete}

			/>

			<div className="weight-list" id="entry-section">

				<ul>

					{
						createEntriesList()
					}

				</ul>

			</div>

			<span className="entry-list-scroll-to-top" onClick={scrollEntrySectionToTop}>
				^
			</span>

			<span className="entry-list-scroll-to-bottom" onClick={scrollEntrySectionToBottom}>
				v
			</span>

		</div>
	)
}


WeightList.propTypes = {

	entries: PropTypes.array.isRequired,

	onDelete: PropTypes.func.isRequired,

	askBeforeDelete: PropTypes.bool.isRequired,
	setAskBeforeDelete: PropTypes.func.isRequired

}

export default WeightList
