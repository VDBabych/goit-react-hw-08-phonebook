import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactsSlice/contactsSlice';

export const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <label>
      Find contacts by name
      <br />
      <input
        onChange={e => dispatch(setFilter(e.target.value))}
        value={filter}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
    </label>
  );
};
