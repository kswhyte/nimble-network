import React, { Component } from 'react'
import PhoneContact from './PhoneContact.jsx'
import EmailContact from './EmailContact.jsx'
import SocialMedia from './SocialMedia.jsx'
import ImageUpload from './ImageUpload.jsx'

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
      newlinkedIn: '',
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
    let editlinkedIn = this.state.newlinkedIn
    const newlinkedIn = editlinkedIn ? editlinkedIn: contact.linkedIn
    let editFacebook = this.state.newFacebook
    const newFacebook = editFacebook ? editFacebook: contact.facebook
    let editTwitter = this.state.editTwitter
    const newTwitter = editTwitter ? editTwitter: contact.twitter
    let editGithub = this.state.newGithub
    const newGithub = editGithub ? editGithub: contact.github
    let editNotes = this.state.newNotes
    const newNotes = editNotes ? editNotes: contact.notes
    this.props.saveEdit(contact.key, newName, newCompany, newEmail1, newEmail2, newCell, newHome, newWork, newlinkedIn, newFacebook, newTwitter, newGithub, newNotes)
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
            alt="button to toggle follow up property for contact"
            onClick={() => this.props.toggleFollowUp(contact.key)}
            src={this.toggleFollowUpIcon(contact)}
          />

          <img
            className='remove'
            alt="button to delete this contact"
            onClick={() => this.props.deleteContact(contact.key)}
            src='../../../images/remove-icon.png'
          />

          <img
            className='expand'
            alt="button to view full contact information"
            onClick={this.toggleHideDisplay.bind(this)}
            src={this.toggleArrowButton()}/>

          <p
            className='contact-name'
            onClick={this.toggleHideDisplay.bind(this)}
            src={this.toggleArrowButton()}>
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
              className='contact-notes'>
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
            <img
              className='follow-up-button'
              alt="button to toggle follow up property for contact"
              onClick={() => this.props.toggleFollowUp(contact.key)}
              src={this.toggleFollowUpIcon(contact)}
            />

            <img
              className='remove'
              alt="button to delete this contact"
              onClick={() => this.props.deleteContact(contact.key)}
              src='../../../images/remove-icon.png'
            />

            <ul
              hidden={false}
              className='show-contact-info'
            >
              <img
                alt='user-image'
                className='editable-contact-image'
                src={this.state.userImgSource}
              />

              <div className='user-input'>
                <img className='icon-user'
                  role="none"
                  src='../../../images/avatar.png'/>
                <input
                  className='input-form-field image'
                  aria-label='edit contact name'
                  placeholder={contact.fullName}
                  value={this.state.newName}
                  onChange={(e) => this.setState({
                    newName: e.target.value
                  })}
                />
              </div>

              <div className='company-input'>
                <img className='icon-company'
                  role="none"
                  src='../../../images/svg/business.svg'/>
                <input
                  className='input-form-field company'
                  placeholder={contact.company ? contact.company: "Company"}
                  value={this.state.newCompany}
                  onChange={(e) => this.setState({
                    newCompany: e.target.value
                  })}
                />
              </div>

              <div className='email-input'>
                <img className='icon-email'
                  role="none" src='../../../images/svg/close-envelope.svg'/>
                <input
                  className='input-form-field email email1'
                  aria-label='edit contact primary email'
                  placeholder={contact.email1 ? contact.email1: "Primary Email"}
                  value={this.state.newEmail1}
                  onChange={(e) => this.setState({
                    newEmail1: e.target.value
                  })}
                />
              </div>

              <div className='email-input'>
                <img className='icon-email'
                  role="none" src='../../../images/svg/close-envelope.svg'/>
                <input
                  className='input-form-field email email2'
                  aria-label='edit contact secondary email'
                  placeholder={contact.email2 ? contact.email2: "Primary Email"}
                  value={this.state.newEmail2}
                  onChange={(e) => this.setState({
                    newEmail2: e.target.value
                  })}
                />
              </div>

              <div className='phone-input'>
                <img className='icon-phone'
                  role="none" src='../../../images/svg/whatsapp-logo.svg'/>
                <input
                  className='input-form-field cell'
                  aria-label='edit contact cell phone number'
                  placeholder={contact.cell ? contact.cell: "Primary Phone"}
                  value={this.state.newCell}
                  onChange={(e) => this.setState({
                    newCell: e.target.value
                  })}
                />
              </div>

              <div className='phone-input'>
                <img className='icon-phone'
                  role="none" src='../../../images/svg/whatsapp-logo.svg'/>
                <input
                  className='input-form-field home'
                  aria-label='edit contact home phone number'
                  placeholder={contact.home ? contact.home: "Secondary Phone"}
                  value={this.state.newHome}
                  onChange={(e) => this.setState({
                    newHome: e.target.value
                  })}
                />
              </div>

              <div className='phone-input'>
                <img className='icon-phone'
                  role="none" src='../../../images/svg/whatsapp-logo.svg'/>
                <input
                  className='input-form-field work'
                  aria-label='edit contact work phone number'
                  placeholder={contact.work ? contact.work: "Tertiary Phone"}
                  value={this.state.newWork}
                  onChange={(e) => this.setState({
                    newWork: e.target.value
                  })}
                />
              </div>

              <div className='linkedIn-input'>
                <img className='icon-linkedIn'
                  role="none" src='../../../images/svg/linkedIn.svg'/>
                <input
                  className='social-media-input-form-field linkedIn'
                  aria-label='edit contact linkedIn plus user name'
                  placeholder={contact.linkedIn ? contact.linkedIn: "linkedIn"}
                  value={this.state.newlinkedIn}
                  onChange={(e) => this.setState({
                    newlinkedIn: e.target.value
                  })}
                />
              </div>

              <div className='facebook-input'>
                <img className='icon-facebook'
                  role="none" src='../../../images/svg/facebook-logo.svg'/>
                <input
                  className='social-media-input-form-field facebook'
                  placeholder={contact.facebook ? contact.facebook: "Facebook"}
                  value={this.state.newFacebook}
                  onChange={(e) => this.setState({
                    newFacebook: e.target.value
                  })}
                />
              </div>

              <div className='twitter-input'>
                <img className='icon-twitter'
                  role="none" src='../../../images/svg/twitter-logo.svg'/>
                <input
                  className='social-media-input-form-field twitter'
                  aria-label='edit contact twitter user name'
                  placeholder={contact.twitter ? contact.twitter: "Twitter"}
                  value={this.state.newTwitter}
                  onChange={(e) => this.setState({
                    newTwitter: e.target.value
                  })}
                />
              </div>

              <div className='github-input'>
                <img className='icon-github'
                  role="none" src='../../../images/svg/github-sign.svg'/>
                <input
                  className='social-media-input-form-field github'
                  aria-label='edit contact github user name'
                  placeholder={contact.github ? contact.github: "Github"}
                  value={this.state.newGithub}
                  onChange={(e) => this.setState({
                    newGithub: e.target.value
                  })}
                />
              </div>

              <div className='notes-input'>
                <img className='icon-notes'
                  role="none" src='../../../images/svg/notes.svg'/>
                <textarea
                  className='notes-text-area'
                  aria-label='edit contact notes'
                  placeholder={contact.notes ? contact.notes: "Notes"}
                  value={this.state.newNotes}
                  onChange={(e) => this.setState({
                    newNotes: e.target.value
                  })}>
                </textarea>
              </div>

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
