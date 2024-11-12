import React, { useState, useEffect } from 'react';

const ContactForm = ({ contact, onSubmit, onReset }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setEmail(contact.email);
    }
  }, [contact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: contact?.id || Date.now(), name, email });
    setName('');
    setEmail('');
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    onReset();
  };

  return (
    <form onSubmit={handleSubmit} className='space-x-8 pt-3'>
      <input
        type="text"
        className='px-8 text-white py-2 border-2 rounded-md bg-cyan-700 border-s-cyan-100'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Your Name"
        required
      />
      <input
        type="email"
        className='px-8 text-white py-2 border-2 rounded-md bg-teal-700 border-fuchsia-600'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Your Email"
        required
      />
      <button className='px-5 py-2 border-2 rounded-lg bg-green-600 text-sm hover:bg-blue-500' type="submit">{contact ? 'Update' : 'Add'} Contact</button>
      {contact && <button className='px-5 py-2 border-2 rounded-lg bg-red-600 text-sm hover:bg-blue-500' type="button" onClick={handleReset}>Cancel</button>}
    </form>
  );
};

export default ContactForm;