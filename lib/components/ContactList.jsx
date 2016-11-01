import React, { Component } from 'react'
import { map } from 'lodash'


const ContactList = ({contactList}) => {
  return(
    <ul className="contact-list">
      {contactList.map(contact => {
        return(
          <li className="single-contact" key={contact.key}>
            <span className="full-name">{contact.fullName}</span>
            <span className="company">{contact.company}</span>
            <span className="email1">{contact.email1}</span>
            <span className="email2">{contact.email2}</span>
            <span className="cell">{contact.cell}</span>
            <span className="home">{contact.home}</span>
            <span className="work">{contact.work}</span>
            <span className="google">{contact.google}</span>
            <span className="facebook">{contact.facebook}</span>
            <span className="twitter">{contact.twitter}</span>
            <span className="github">{contact.github}</span>
          </li>
        )
      })}
    </ul>
  )
}

module.exports = ContactList
