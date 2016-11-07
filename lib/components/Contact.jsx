import React, { Component } from 'react'
import PhoneContact from './PhoneContact.jsx'
import EmailContact from './EmailContact.jsx'
import SocialMedia from './SocialMedia.jsx'

import firebase, { reference, getDownloadURL, child } from '../firebase'

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
      newGoogle: '',
      newFacebook: '',
      newTwitter: '',
      newGithub: '',
      newNotes: '',
      userImgSource: null
    }
  }

  toggleHideDisplay() {
    this.setState({
      hideDisplay: !this.state.hideDisplay
    })
    this.getUserImgSource()
  }

  getUserImgSource() {
    this.props.imgStorage.child(
      `${this.props.user.uid}/${this.props.contact.imgKey}.jpg`).getDownloadURL()
      .then((url) => {
        this.setState({ userImgSource: url })
      })
      .catch(() => {
      })
  }

  toggleArrowButton() {
    if (this.state.hideDisplay === true){
      return '../../../images/down-arrow-icon.png'
    }else{
      return '../../../images/up-arrow-icon.png'
    }
  }

  editContact() {
    this.setState({
      editable: true
    })
  }

  saveEdit() {
    const { contact } = this.props
    this.setState({ editable: false })
    let editName = this.state.newName
    const newName = editName ? editName: contact.fullName
    let editCompany = this.state.newCompany
    const newCompany = editCompany ? editCompany: contact.company
    let editEmail1 = this.state.newEmail1
    const newEmail1 = editEmail1 ? editEmail1: contact.email1
    let editEmail2 = this.state.newEmail2
    const newEmail2 = editEmail2 ? editEmail2: contact.email2
    let editCell = this.state.newCell
    const newCell = editCell ? editCell: contact.cell
    let editHome = this.state.newHome
    const newHome = editHome ? editHome: contact.home
    let editWork = this.state.newWork
    const newWork = editWork ? editWork: contact.work
    let editGoogle = this.state.newGoogle
    const newGoogle = editGoogle ? editGoogle: contact.google
    let editFacebook = this.state.newFacebook
    const newFacebook = editFacebook ? editFacebook: contact.facebook
    let editTwitter = this.state.editTwitter
    const newTwitter = editTwitter ? editTwitter: contact.twitter
    let editGithub = this.state.newGithub
    const newGithub = editGithub ? editGithub: contact.github
    let editNotes = this.state.newNotes
    const newNotes = editNotes ? editNotes: contact.notes
    this.props.saveEdit(contact.key, newName, newCompany, newEmail1, newEmail2, newCell, newHome, newWork, newGoogle, newFacebook, newTwitter, newGithub, newNotes)
  }

  toggleFollowUpIcon(contact) {
    if (contact.followUp === true){
      return '../../../images/svg/communications.svg'
    }else{
      return '../../../images/svg/communications-grey.svg'
    }
  }

  render() {
    const { contact, searchText, followUp } = this.props

    if(this.state.editable === false) {
      return(
        <li className='single-contact'>

          <img
            className='follow-up-button'
            onClick={() => this.props.toggleFollowUp(contact.key)}
            src={this.toggleFollowUpIcon(contact)}
          />

          <img
            className='remove'
            onClick={() => this.props.deleteContact(contact.key)}
            src='../../../images/remove-icon.png'
          />

          <img
            className='expand'
            onClick={this.toggleHideDisplay.bind(this)}
            src={this.toggleArrowButton()}/>

          <p
            className='contact-name'>
            {contact.fullName}
          </p>

          <ul
            className='hidden-contact-info'
            hidden={this.state.hideDisplay}
            className='show-contact-info'
          >

            <img
              alt='user-image'
              className='contact-image'
              src={this.state.userImgSource}
            />

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

            <button
              className='edit-button'
              onClick={this.editContact.bind(this)}>
              Edit Contact
            </button>
          </ul>
        </li>
      )
    } else if (this.state.editable === true) {
        return(
          <li className='single-contact edit-form'>
            <button className='follow-up-button'
              onClick={() => this.props.toggleFollowUp(contact.key)}>
              Follow-up
            </button>

            <ul
              hidden={false}
              className='show-contact-info'
            >
              <input
                className='update-image-button'
                type='file'
                accept='image/*'
                onChange={(e) =>
                  this.props.uploadImage(e.target.files)}
              />

              <input
                className='edit-name input-form-field'
                placeholder={contact.fullName}
                value={this.state.newName}
                onChange={(e) => this.setState({newName: e.target.value})}
              />

              <input
                className="edit-company input-form-field"
                placeholder={contact.company ? contact.company: "Company"}
                value={this.state.newCompany}
                onChange={(e) => this.setState({newCompany:  e.target.value})}
              />

              <input
                className='edit-email1 input-form-field email'
                placeholder={contact.email1 ? contact.email1: "Email 1"}
                value={this.state.newEmail1}
                onChange={(e) => this.setState({newEmail1:  e.target.value})}
              />

              <input
                className='edit-email2 input-form-field email'
                placeholder={contact.email2 ? contact.email2: "Email 2"}
                value={this.state.newEmail2}
                onChange={(e) => this.setState({newEmail2:  e.target.value})}
              />

              <input
                className='edit-phonecell input-form-field email'
                placeholder={contact.cell ? contact.cell: "Cell Phone"}
                value={this.state.newCell}
                onChange={(e) => this.setState({newCell:  e.target.value})}
              />

              <input
                className='edit-phonehome input-form-field email'
                placeholder={contact.home ? contact.home: "Home Phone"}
                value={this.state.newHome}
                onChange={(e) => this.setState({newHome:  e.target.value})}
              />

              <input
                className='edit-phonework input-form-field email'
                placeholder={contact.work ? contact.work: "Work Phone"}
                value={this.state.newWork}
                onChange={(e) => this.setState({newWork:  e.target.value})}
              />

              <input
                className='edit-google input-form-field email'
                placeholder={contact.google ? contact.google: "Google"}
                value={this.state.newGoogle}
                onChange={(e) => this.setState({newGoogle:  e.target.value})}
              />

              <input
                className='edit-facebook input-form-field email'
                placeholder={contact.facebook ? contact.facebook: "Facebook"}
                value={this.state.newFacebook}
                onChange={(e) => this.setState({newFacebook:  e.target.value})}
              />

              <input
                className='edit-twitter input-form-field email'
                placeholder={contact.twitter ? contact.twitter: "Twitter"}
                value={this.state.newTwitter}
                onChange={(e) => this.setState({newTwitter:  e.target.value})}
              />

              <input
                className='edit-github input-form-field email'
                placeholder={contact.github ? contact.github: "Github"}
                value={this.state.newGithub}
                onChange={(e) => this.setState({newGithub:  e.target.value})}
              />

              <textarea
                className='edit-notes input-form-field notes'
                placeholder={contact.notes ? contact.notes: "Notes"}
                value={this.state.newNotes}
                onChange={(e) => this.setState({newNotes:  e.target.value})}>
              </textarea>

              <button
                className='save-button'
                onClick={this.saveEdit.bind(this)}>
                Update Contact
              </button>
            </ul>
          </li>
      )
    }
  }
}
