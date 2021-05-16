
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


export {

	scrollEntrySectionToBottom,

	scrollEntrySectionToTop

}
