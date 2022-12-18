export const ListOfContacts = ({ contacts }) => {
  {
    contacts.map(contact => {
      return (
        <ul>
          contacts
          <li key={contact.id}>{contact.name}</li>
        </ul>
      );
    });
  }
};
