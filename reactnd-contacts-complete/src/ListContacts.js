import React, { Component } from 'react'

class ListContacts extends Component {

  contacts = this.props.contacts;

  render() {
    return (
      <ol className='contact-list'>

        contacts.map(contact =>
        <li className='contact'>
          contact.name;
        </li>
        )
    </ol>
    )
  }
}

export default ListContacts;