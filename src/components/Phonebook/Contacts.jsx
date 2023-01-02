export const Contacts = ({ contacts }) => {
	return (
		<ul>
			{contacts.map(({ name, id }) => {
				return <li key={id}>{name}</li>;
			})}
		</ul>
	);
};
