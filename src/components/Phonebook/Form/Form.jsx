import css from './Form.module.css';
export const Form = ({ name, number, nameid, numberid, onHandleChange, onSubmit }) => {
	return (
		<form className={css.form} onSubmit={onSubmit}>
			<label htmlFor={nameid}>
				Name
				<input
					className={css.name}
					value={name}
					onChange={onHandleChange}
					id={nameid}
					type="text"
					name="name"
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					required
				/>
				<br />
			</label>
			<label htmlFor={numberid}>
				Number
				<input
					className={css.input}
					value={number}
					id={numberid}
					onChange={onHandleChange}
					type="tel"
					name="number"
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
					required
				/>
			</label>
			<br />
			<button type="submit">Add contact</button>
		</form>
	);
};
