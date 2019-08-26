export const sortContacts = contacts => {
  return contacts.sort((a, b) => a.name.localeCompare(b.name));
};

export const searchContacts = (contacts, searchTerm) => {
  return contacts.filter(contact => {
    if (contact.name.toLowerCase().includes(searchTerm)) {
      return contact;
    }
    return null;
  });
};
