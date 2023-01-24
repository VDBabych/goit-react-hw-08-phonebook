import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestGetContacts } from 'redux/contactsSlice/contactsSlice';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Spinner } from './Spinner/Spinner';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(requestGetContacts());
  }, [dispatch]);
  return (
    <>
    {isLoading && <Spinner/>}
    {error && <p>Oops, something went wrong... <b>{error}</b></p>}
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
