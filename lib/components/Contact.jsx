import React, { Component } from 'react'
import PhoneContact from './PhoneContact.jsx'
import EmailContact from './EmailContact.jsx'
import SocialMedia from './SocialMedia.jsx'
var contentEditable = require("react-contenteditable")


export default class Contact extends Component {
  constructor() {
    super()
    this.state = {
      hideDisplay: true,
      editable: false,
      edit: ''
    }
  }

  toggleHideDisplay() {
    this.setState({
      hideDisplay: !this.state.hideDisplay
    })
  }

  editContact() {
    this.setState({editable: true})
  }

  saveEdit() {
    this.setState({editable: false})
  }

  editCompany() {
    const { contact } = this.props
    const newCompany = this.state.edit
    this.props.editCompany(contact.key, newCompany)
  }

  render() {
    const { contact } = this.props

    if(this.state.editable === false) {
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

          <button className='edit-button'
            onClick={this.editContact.bind(this)}>
            Edit
          </button>

          <li
            className="contact-display">
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
  if (this.state.editable = true) {
    return(
      <li className='single-contact'>

        <input placeholder={contact.fullName}/>

        <button className='follow-up-button'
          onClick={() => this.props.toggleFollowUp(contact.key)}>
          Follow-up
        </button>

        <ul
          hidden={false}
          className='show-contact-info'>

          <button className='save-button'
            onClick={this.saveEdit.bind(this)}>
            Save
          </button>

          <input
            className="contact-display"
            placeholder={contact.company}
            value={this.state.edit}
            onChange={(e) => this.setState({edit: e.target.value})}
            onBlur={() => this.editCompany()}
            />

          <EmailContact
            contact={contact}
          />

          <PhoneContact
            contact={contact}
          />

          <SocialMedia
            contact={contact}
          />

        <input
            className='contact-display'
            placeholder={contact.notes}
          />

        </ul>
      </li>

    )
  }
  }
}
