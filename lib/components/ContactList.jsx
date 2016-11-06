import React, { Component } from 'react'
import { map } from 'lodash'

import Contact from './Contact.jsx'

export default class ContactList extends Component {
  render() {
    const { contactList } = this.props

    let newContactList = contactList.filter(contact =>
      contact.followUp === false)

    let newContacts = newContactList.map(contact =>
      <Contact
        key ={contact.key}
        toggleFollowUp={this.props.toggleFollowUp}
        saveEdit={this.props.saveEdit}
        contact={contact}
      />
    )

    return (
      <section className='contact-section'>

        <h1
          className='contact-title'>
          ~ Contacts ~
        </h1>

        <ul
          className="contact-list">
          { newContacts }
        </ul>

      </section>
      )
    }
  }
