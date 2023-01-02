import { Component } from 'react';
import { Contacts } from './Phonebook/Contacts';
import { nanoid } from 'nanoid';
import { FilterContacts } from './Phonebook/FilterContacts';
export class App extends Component {
	state = {
		contacts: [
			{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
			{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
			{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
			{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
		],
		name: '',
		number: '',
		filter: '',
	};
	formReset = () => {
		this.setState({ name: '', number: '' });
	};

	onHandleSubmit = e => {
		const { name, number } = this.state;
		const nameId = nanoid();
		e.preventDefault();
		this.setState(prevstate =>
			prevstate.contacts.push({
				name: name,
				id: nameId,
				number: number,
			})
		);
		this.formReset();
		console.log(this);
	};
	// filtering our contacts on input
	changeFilter = e => {
		this.setState({ filter: e.currentTarget.value });
		console.log(this.state.contacts);
	};
	onHandleChange = e => {
		const { name, value } = e.currentTarget;
		this.setState({ [name]: value });
	};

	render() {
		const NAMEID = nanoid();
		const NUMBERID = nanoid();
		const { name, contacts, number, filter } = this.state;
		const visibleTodos = contacts.filter(({ name }) =>
			name.includes(this.state.filter)
		);
		return (
			<>
				<form onSubmit={this.onHandleSubmit}>
					<label htmlFor={NAMEID}>
						Name
						<input
							value={name}
							onChange={this.onHandleChange}
							id={NAMEID}
							type="text"
							name="name"
							pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
							title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
							required
						/>
						<br />
					</label>
					<label htmlFor={NUMBERID}>
						Number
						<input
							value={number}
							id={NUMBERID}
							onChange={this.onHandleChange}
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
				<FilterContacts
					filterContacts={this.changeFilter}
					value={filter}
				></FilterContacts>
				<Contacts contacts={visibleTodos}></Contacts>
			</>
		);
	}
}
