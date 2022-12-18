import { nanoid } from 'nanoid';
import React, { Component } from 'react';
const idFor = nanoid();
export class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formReset = () => {
    this.setState({ name: '' });
  };

  onHandleSubmit = e => {
    const nameId = nanoid();
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(prevstate =>
      prevstate.contacts.push({ name: this.state.name, id: nameId })
    );
    console.log(this.state);
    this.formReset();
  };
  onHandleChange = e => {
    this.setState({ name: e.currentTarget.value });
  };
  render() {
    const { name, contacts } = this.state;
    return (
      <>
        <form onSubmit={this.onHandleSubmit}>
          <label htmlFor={idFor}>
            Name
            <input
              value={name}
              onChange={this.onHandleChange}
              id={idFor}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <ul>
          {contacts.map(contact => {
            return <li key={contact.id}>{contact.name}</li>;
          })}
        </ul>
      </>
    );
  }
}
