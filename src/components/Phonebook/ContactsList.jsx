import css from '../Phonebook/ContactsList.module.css';
export const ContactsList = ({ contacts, onDeleteContact }) => {
	return (
		<ul className={css.contactsList}>
			{contacts.map(({ name, id, number }) => {
				return (
					<li className={css.contact} key={id}>
						{name}: {number}
						<button onClick={() => onDeleteContact(id)}>Delete</button>
					</li>
				);
			})}
		</ul>
	);
};
