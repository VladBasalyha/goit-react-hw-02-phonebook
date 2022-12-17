import { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
export class App extends Component {
  state = {};
  formSubmit = data => {
    console.log(data);
  };
  render() {
    return <Phonebook onSubmit={this.formSubmit}></Phonebook>;
  }
}
