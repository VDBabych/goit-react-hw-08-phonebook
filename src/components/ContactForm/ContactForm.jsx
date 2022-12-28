import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };
  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value.trim(),
    });
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.setState({
      id: nanoid(),
    });
    this.props.sendContact(this.state) && e.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>
          Name
          <br />
          <input
            onChange={this.onInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <br />
        <br />
        <label>
          Phone
          <br />
          <input
            onChange={this.onInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <br />
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
