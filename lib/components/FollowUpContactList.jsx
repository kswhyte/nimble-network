import React, { Component } from 'react'
import { map } from 'lodash'

import Contact from './Contact.jsx'

export default class ContactList extends Component {
  render() {
    const { contactList } = this.props

    let followUpContacts = contactList.filter(contact =>
      contact.followUp === true)

    let newFollowUpContacts = followUpContacts.map(contact =>
      <Contact
        key ={contact.key}
        toggleFollowUp={this.props.toggleFollowUp}
        editCompany={this.props.editCompany}
        editName={this.props.editName}
        editEmail1={this.props.editEmail1}
        contact={contact}
      />
    )

    return (
      <section
        className='follow-up-contact-section'
      >
        <h1
          className='follow-up-contact-title'>
          ~ Follow-up Contacts ~
        </h1>

        <ul
          className='follow-up-contact-list'>
          {newFollowUpContacts}
        </ul>

      </section>
    )
  }
}
