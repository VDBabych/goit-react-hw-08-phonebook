import { useEffect, useState } from 'react';
import { load, save } from 'utils/storage';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export const App = () => {
  const key = 'contacts';
  const [contacts, setContacts] = useState(
    load(key) || [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');
  useEffect(() => {
    save(key, contacts);
  });
  const onInputChange = e => {
    setFilter(e.target.value.trim());
  };
  const getContact = obj => {
    if (contacts.some(el => el.name === obj.name)) {
      alert(`${obj.name} is already in contacts`);
      return;
    }
    setContacts([...contacts, obj]);
    return true;
  };
  const removeContactById = id => {
    setContacts(contacts.filter(el => el.id !== id));
  };

  return (
    <>
      <Section title="Phonebook">
        <ContactForm sendContact={getContact} />
      </Section>
      <br />
      <Section title="Contacts">
        <Filter onInputChange={onInputChange} />
        {contacts.length > 0 ? (
          <ContactList
            contacts={contacts}
            filter={filter}
            btnAction={removeContactById}
          />
        ) : (
          <Notification message="There is nothing yet" />
        )}
      </Section>
    </>
  );
};
