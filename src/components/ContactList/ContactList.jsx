import { Notification } from 'components/Notification/Notification';

export const ContactList = ({ contacts, filter, btnAction }) => {
  const filteredContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );
  const onBtnClick = e => {
    btnAction(e.target.dataset.id);
  };

  if (filteredContacts.length === 0) {
    return <Notification message="There is no matches" />;
  }
  return (
    <ul>
      {filteredContacts.map(({ number, name, id }) => (
        <li key={id}>
          {name}: {number}{' '}
          <button onClick={onBtnClick} data-id={id} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
