import React, { Component } from 'react'
import { map } from 'lodash'

export default class ContactList extends Component{
  constructor(){
    super()

  }

  renderList(contactList){
    return (contactList.map(contact => {
      return(
        <li className="single-contact" key={contact.key}>
          <section>
            <span>{contact.fullName}</span>
            <button
              className='show-more-button'
              onClick={()=>this.props.toggleContactDisplay(contact.key)}
              >Show More </button>
          </section>

          <ul className='hidden-contact-info' hidden={contact.hideDisplay} className="show-contact-info">
            <li className='contact-display'>{contact.company}</li>
            <li className='contact-display'>{contact.email1}</li>
            <li className='contact-display'>{contact.email2}</li>
            <li className='contact-display'>{contact.cell}</li>
            <li className='contact-display'>{contact.home}</li>
            <li className='contact-display'>{contact.work}</li>
            <li className='contact-display'>{contact.google}</li>
            <li className='contact-display'>{contact.facebook}</li>
            <li className='contact-display'>{contact.twitter}</li>
            <li className='contact-display'>{contact.github}</li>
          </ul>
        </li>
      )
    })
    )
  }

  render(){
    const { contactList } = this.props
    return (
      <ul className="contact-list">
          {this.renderList(contactList)}
      </ul>
      )
    }
  }
