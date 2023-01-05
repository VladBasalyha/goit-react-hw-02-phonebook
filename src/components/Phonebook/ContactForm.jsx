import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';

export class ContactForm extends Component {
	state = {
		name: '',
		number: '',
	};
	formReset = () => {
		this.setState({ name: '', number: '' });
	};

	onHandleChange = e => {
		const { name, value } = e.currentTarget;
		this.setState({ [name]: value });
	};
	onHandleSubmit = e => {
		e.preventDefault();

		this.props.onSubmit(this.state);
		this.formReset();
	};
	render() {
		const NAMEID = nanoid();
		const NUMBERID = nanoid();
		const { name, number } = this.state;

		return (
			<Form
				onSubmit={this.onHandleSubmit}
				name={name}
				number={number}
				nameid={NAMEID}
				numberid={NUMBERID}
				onHandleChange={this.onHandleChange}
			></Form>
		);
	}
}
