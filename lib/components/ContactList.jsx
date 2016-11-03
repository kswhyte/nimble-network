import React, { Component } from 'react'
import { map } from 'lodash'

import Contact from './Contact.jsx'


export default class ContactList extends Component {
  render(){
    const { contactList } = this.props
    return (
      <ul className="contact-list">
        {contactList.map(contact => <Contact key ={contact.key} contact={contact}/> )}
      </ul>
      )
    }
  }
