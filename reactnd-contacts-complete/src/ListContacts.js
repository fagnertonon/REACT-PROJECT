import React, { Component } from 'react'


function ListContacts(props) {
  return (
    <ol className='contact-list'>
      {
        props.contacts.map((contact) =>
          (
            <li key={contact.name} className='contact-list-item' >
              <div className='contact-avatar' style={{
                backgroundImage: `url(${contact.avatarURL})`
              }} />
              <div className='contact-details'>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <button onClick={() => props.onDeleteContact(contact)} className='contact-remove'>Remove</button>
            </li>
          ))}
    </ol>
  )
}

// class ListContacts extends Component {

//   render() {
//     return ListContacts()
//   }
// }

export default ListContacts;