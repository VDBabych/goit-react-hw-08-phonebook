import { Component } from 'react';
import { load, save } from 'utils/storage';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  key = 'contacts';
  componentDidMount() {
    load(this.key) && this.setState(load(this.key));
  }
  componentDidUpdate() {
    save(this.key, this.state);
  }
  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value.trim(),
    });
  };
  getContact = obj => {
    if (this.state.contacts.some(el => el.name === obj.name)) {
      alert(`${obj.name} is already in contacts`);
      return;
    }
    this.setState(prev => ({
      contacts: [...prev.contacts, obj],
    }));
    return true;
  };
  removeContactById = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <ContactForm sendContact={this.getContact} />
        </Section>
        <br />
        <Section title="Contacts">
          <Filter onInputChange={this.onInputChange} />
          {contacts.length > 0 ? (
            <ContactList
              contacts={contacts}
              filter={filter}
              btnAction={this.removeContactById}
            />
          ) : (
            <Notification message="There is nothing yet" />
          )}
        </Section>
      </>
    );
  }
}
