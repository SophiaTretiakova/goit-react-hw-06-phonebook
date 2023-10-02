export const ContactsListItem = ({ contact, onDelete }) => {
  const { name, number } = contact;

  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};
