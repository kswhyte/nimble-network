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
      newName: '',
      newCompany: '',
      newEmail1: '',
      newEmail2: '',
      newCell: '',
      home: '',
      work: '',
      google: '',
      facebook: '',
      twitter: '',
      github: '',
      notes: '',
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
    const newCompany = this.state.newCompany
    this.props.editCompany(contact.key, newCompany)
  }

  editName() {
    const { contact } = this.props
    const newName = this.state.newName
    this.props.editName(contact.key, newName)
  }

  editEmail1() {
    const { contact } = this.props
    const newEmail1 = this.state.newEmail1
    this.props.editEmail1(contact.key, newEmail1)
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
  else if (this.state.editable = true) {
    return(
      <li className='single-contact'>

        <input
          className='edit-name'
          placeholder={contact.fullName}
          value={this.state.newName}
          onChange={(e) => this.setState({newName: e.target.value})}
          onBlur={() => this.editName()}/>

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
            className="edit-company"
            placeholder={contact.company}
            value={this.state.newCompany}
            onChange={(e) => this.setState({newCompany: e.target.value})}
            onBlur={() => this.editCompany()}
            />

          <input
            className='edit-email1'
            placeholder={contact.email1}
            value={this.state.newEmail1}
            onChange={(e) => this.setState({newEmail1: e.target.value})}
            onBlur={() => this.editEmail1()}
          />

          <PhoneContact
            contact={contact}
          />

          <SocialMedia
            contact={contact}
          />

        <input
            className='contact-display'
            placeholder={contact.notes?contact.notes:"Notes"}
          />

        </ul>
      </li>

    )
  }
  }
}
