export const Filter = ({ onInputChange }) => {
  return (
    <label>
      Find contacts by name
      <br />
      <input
        onChange={onInputChange}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
    </label>
  );
};
