import React, { Component } from 'react'
import { map } from 'lodash'

import Contact from './Contact.jsx'

export default class ContactList extends Component {
  constructor() {
    super()
  }

  filterContactsBySearch(newContacts) {
    let filteredNewContacts = newContacts.filter(contact =>
       this.filterContactbyName(contact) ||
       this.filterContactbyCompany(contact) ||
       this.filterContactbyCell(contact) ||
       this.filterContactbyEmail(contact)
     )
    return this.sortContactsAlphabetically(filteredNewContacts)
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

  sortContactsAlphabetically(filteredNewContacts) {
    let sortedContacts = filteredNewContacts.sort(function(a, b) {
      let nameA = a.props.contact.fullName.toLowerCase()
      let nameB = b.props.contact.fullName.toLowerCase()
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    })
    return sortedContacts
  }

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
        user={this.props.user}
        imgStorage={this.props.imgStorage}
        deleteContact={this.props.deleteContact}
      />
    )

    let filteredContacts = this.filterContactsBySearch(newContacts)

    return (
      <section className='contact-section'>
        <h1
          className='contact-title'>
          ~ Contacts ~
        </h1>
        <ul
          className="contact-list">
          { filteredContacts }
        </ul>
      </section>
    )
  }
}
