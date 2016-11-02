import React, { Component } from 'react'
import { map } from 'lodash'

export default class ContactList extends Component {
  constructor() {
    super()
    this.state = {
      displayFull: false
    }
  }
  render() {
    const { contactList } = this.props
    return (
      <ul className="contact-list">
        {contactList.map(contact => {
          return(
            <li className="single-contact" key={contact.key}>
              <span className="full-name">{contact.fullName}</span>
              <div className="show-contact-info">
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
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

// showContactInfo(){
//   if(button is clicked){
//     return(
//       <span className="full-name">{contact.fullName}</span>
//       <span className="company">{contact.company}</span>
//       <span className="email1">{contact.email1}</span>
//       <span className="email2">{contact.email2}</span>
//       <span className="cell">{contact.cell}</span>
//       <span className="home">{contact.home}</span>
//       <span className="work">{contact.work}</span>
//       <span className="google">{contact.google}</span>
//       <span className="facebook">{contact.facebook}</span>
//       <span className="twitter">{contact.twitter}</span>
//       <span className="github">{contact.github}</span>
//     )
//   }else{
//     return(
//       <span className="full-name">{contact.fullName}</span>
//     )
//   }
// }
//
//
// const ContactList = ({contactList}) => {
//   return(
//
//   )
// }
//
// module.exports = ContactList
