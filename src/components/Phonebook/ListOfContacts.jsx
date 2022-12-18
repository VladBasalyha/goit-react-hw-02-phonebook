import React from 'react';
export const ListOfContacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => {
        <li key={contact.id}>{contact.name}</li>;
      })}
    </ul>
  );
};
