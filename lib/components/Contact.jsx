import React, { Component } from 'react'
import PhoneContact from './PhoneContact.jsx'
import EmailContact from './EmailContact.jsx'
import SocialMedia from './SocialMedia.jsx'


export default class Contact extends Component {
  constructor() {
    super()
    this.state = {
      hideDisplay: true
    }
  }

  toggleHideDisplay() {
    this.setState({
      hideDisplay: !this.state.hideDisplay
    })
  }

  render() {
    const { contact } = this.props
    return(
      <li className='single-contact'>

        <p
          onClick={this.toggleHideDisplay.bind(this)}>
          {contact.fullName}
        </p>

        <button className='follow-up-button'
          onClick={() => this.props.toggleFollowUp(contact.key)}>
          Follow-up
        </button>

        <ul
          className='hidden-contact-info'
          hidden={this.state.hideDisplay}
          className='show-contact-info'>

          <li
            className='contact-display'>
            {contact.company}
          </li>

          <EmailContact
            contact={contact}
          />

          <PhoneContact
            contact={contact}
          />

          <SocialMedia
            contact={contact}
          />

          <li
            className='contact-display'>
            {contact.notes}
          </li>

        </ul>
      </li>
    )
  }
}
