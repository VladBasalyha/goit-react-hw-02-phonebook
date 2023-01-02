export const FilterContacts = ({ filterContacts, value }) => {
	return (
		<label>
			Find contacts by name
			<input onChange={filterContacts} type="text" name="filter" value={value} />
			<br />
		</label>
	);
};
