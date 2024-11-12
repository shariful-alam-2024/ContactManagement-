import React from 'react';

const ContactList = ({ contacts, onEdit, onDelete }) => {
  return (
    <div className=''>
      <h2 className='text-3xl font-semibold underline text-red-700 pb-3'>Contact List</h2>
      {contacts.length === 0 ? (
        <p className='text-2xl font-bold text-red-900'>No contacts found</p>
      ) : (
        <ul className='overflow-scroll overscroll-auto  items-center mx-auto rounded-lg bg-slate-500 w-1/2 h-[200px] text-white '>
          {contacts.map((contact) => (
            <li className=' ' key={contact.id}>
              <p>{contact.name} - {contact.email}</p>
              <button className='mx-8 px-3 py-1.5 border-2 rounded-lg bg-green-600 text-sm hover:bg-blue-500 text-center' onClick={() => onEdit(contact)}>Edit</button>
              <button className=' px-3 py-1.5 border-2 rounded-lg bg-green-600 text-sm hover:bg-blue-500 text-center' onClick={() => onDelete(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;