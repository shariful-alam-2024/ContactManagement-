import React, { useState } from 'react';
import './App.css'
import ContactForm from './Components/ContactForm';
import SearchBar from './Components/SearchBar';
import ContactList from './Components/ContactList';
function App() {
  
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const addContact = (contact) => {
    setContacts([...contacts, { id: Date.now(), ...contact }]);
  };

  const editContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setCurrentContact(null);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className="text-center max-w-screen-xl Image pt-14">
      <h1 className='text-gray-900 font-bold text-3xl'>Contact Management</h1>
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <ContactForm
        onSubmit={currentContact ? editContact : addContact}
        contact={currentContact}
        onReset={() => setCurrentContact(null)}
      />
      <ContactList
        contacts={filteredContacts}
        onEdit={setCurrentContact}
        onDelete={deleteContact}
      />
      </div>
    </>
  )
}

export default App
