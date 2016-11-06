import React, { Component } from 'react'
import { map } from 'lodash'

import Contact from './Contact.jsx'

export default class ContactList extends Component {
  constructor() {
    super()
  }

  filterContactsBySearch(newFollowUpContacts) {
    let filteredNewFollowUpContacts = newFollowUpContacts.filter(contact =>
       this.filterContactbyName(contact) ||
       this.filterContactbyCompany(contact) ||
       this.filterContactbyCell(contact) ||
       this.filterContactbyEmail(contact)
     )
    return filteredNewFollowUpContacts
  }
  filterContactbyName(contact) {
    return(contact.props.contact.fullName.toLowerCase().indexOf(this.props.searchText.toLowerCase()) !== -1)
  }
  filterContactbyCompany(contact) {
    return(contact.props.contact.company.toLowerCase().indexOf(this.props.searchText.toLowerCase()) !== -1)
  }
  filterContactbyCell(contact) {
    return(contact.props.contact.cell.toLowerCase().indexOf(this.props.searchText.toLowerCase()) !== -1)
  }
  filterContactbyEmail(contact) {
    return(contact.props.contact.email1.toLowerCase().indexOf(this.props.searchText.toLowerCase()) !== -1)
  }

  render() {
    const { contactList } = this.props

    let followUpContacts = contactList.filter(contact =>
      contact.followUp === true)

    let newFollowUpContacts = followUpContacts.map(contact =>
      <Contact
        key ={contact.key}
        toggleFollowUp={this.props.toggleFollowUp}
        saveEdit={this.props.saveEdit}
        contact={contact}
      />
    )

    let filteredFollowUpContacts = this.filterContactsBySearch(newFollowUpContacts)

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
          { filteredFollowUpContacts }
        </ul>

      </section>
    )
  }
}
