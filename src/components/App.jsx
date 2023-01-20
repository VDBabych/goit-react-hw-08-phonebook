import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <br />
      <Section title="Contacts">
        <Filter />
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <Notification message="There is nothing yet" />
        )}
      </Section>
    </>
  );
};
