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
      newHome: '',
      newWork: '',
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
    this.editCompany()
    this.editName()
    this.editEmail1()
    this.editEmail2()
  }

  editCompany() {
    const { contact } = this.props
    let edit = this.state.newCompany
    let current = contact.company
    const newCompany = edit?edit:current
    this.props.editCompany(contact.key, newCompany)
  }

  editName() {
    const { contact } = this.props
    let edit = this.state.newName
    let current = contact.fullName
    const newName = edit?edit:current
    this.props.editName(contact.key, newName)
  }

  editEmail1() {
    const { contact } = this.props
    let edit = this.state.newEmail1
    let current = contact.email1
    const newEmail1 = edit?edit:current
    this.props.editEmail1(contact.key, newEmail1)
  }

  editEmail2() {
    const { contact } = this.props
    let edit = this.state.newEmail2
    let current = contact.email2
    const newEmail2 = edit?edit:current
    this.props.editEmail2(contact.key, newEmail2)
  }

  editCell() {
    const { contact } = this.props
    let edit = this.state.newCell
    let current = contact.cell
    const newCell = edit?edit:current
    this.props.editCell(contact.key, newCell)
  }

  editHome() {
    const { contact } = this.props
    let edit = this.state.newHome
    let current = contact.home
    const newHome = edit?edit:current
    this.props.editHome(contact.key, newHome)
  }

  editWork() {
    const { contact } = this.props
    let edit = this.state.newWork
    let current = contact.work
    const newWork = edit?edit:current
    this.props.editWork(contact.key, newWork)
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
          />

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
            />

          <input
            className='edit-email1'
            placeholder={contact.email1}
            value={this.state.newEmail1}
            onChange={(e) => this.setState({newEmail1: e.target.value})}
          />

          <input
            className='edit-email2'
            placeholder={contact.email2}
            value={this.state.newEmail2}
            onChange={(e) => this.setState({newEmail2: e.target.value})}
          />

          <input
            className='edit-phonecell'
            placeholder={contact.cell}
            value={this.state.newCell}
            onChange={(e) => this.setState({newCell: e.target.value})}
          />

          <input
            className='edit-phonehome'
            placeholder={contact.home}
            value={this.state.newHome}
            onChange={(e) => this.setState({newHome: e.target.value})}
          />

          <input
            className='edit-phonework'
            placeholder={contact.work}
            value={this.state.newWork}
            onChange={(e) => this.setState({newWork: e.target.value})}
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
