import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice/contactsSlice';

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    if (contacts.some(el => el.name === e.target.elements.name.value)) {
      return;
    }
    let obj = {
      id: nanoid(),
    };
    const data = new FormData(e.target);
    for (const [key, value] of data) {
      obj[key] = value;
    }
    dispatch(addContact(obj));
    e.target.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <br />
        <input
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
};
