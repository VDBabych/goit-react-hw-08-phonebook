import { Notification } from 'components/Notification/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { requestDeleteContact } from 'redux/contactsSlice/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  if (filteredContacts.length === 0) {
    return <Notification message="There is no matches" />;
  }
  return (
    <ul>
      {filteredContacts.map(({ phone, name, id }) => (
        <li key={id}>
          {name}: {phone}{' '}
          <button onClick={e => dispatch(requestDeleteContact(id))} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
