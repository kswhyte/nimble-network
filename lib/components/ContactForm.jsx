import React, { Component } from 'react'
import firebase, { reference } from '../firebase'

import ImageUpload from './ImageUpload.jsx'

export default class ContactForm extends Component {
  constructor() {
    super()
    this.state = {
      fullName: '',
      company: '',
      email1: '',
      email2: '',
      cell: '',
      home: '',
      work: '',
      linkedIn: '',
      facebook: '',
      twitter: '',
      github: '',
      notes: '',
      followUp: false,
      userImage: '../../images/avatar.png',
      imgKey: '',
      isImgUploaded: false
    }
  }

  pushContact(e) {
    e.preventDefault()

    let newContact = {
      fullName: this.state.fullName,
      company:  this.state.company,
      email1:   this.state.email1,
      email2:   this.state.email2,
      cell:     this.state.cell,
      home:     this.state.home,
      work:     this.state.work,
      linkedIn:   this.state.linkedIn,
      facebook: this.state.facebook,
      twitter:  this.state.twitter,
      github:   this.state.github,
      notes:    this.state.notes,
      followUp: this.state.followUp,
      imgKey:   Date.now()
    }
    return(this.props.createContact(
      newContact,
      this.state.userImage,
      newContact.imgKey,
    ),
    this.setInitialState()
    )
  }

  setInitialState() {
    this.setState ({
      fullName: '',
      company: '',
      email1: '',
      email2: '',
      cell: '',
      home: '',
      work: '',
      linkedIn: '',
      facebook: '',
      twitter: '',
      github: '',
      notes: '',
      followUp: false,
      userImage: '../../images/avatar.png',
      imgKey: ''
    })
    this.setState({ isImgUploaded: false })
  }

  uploadImage(imageUpload) {
    this.setState({ userImage: imageUpload[0] })
  }

  imgHasUploaded() {
    this.setState({
      isImgUploaded: true
    })
  }

  render() {
    return (
      <section className='contact-form-and-list'>
        <ImageUpload
          uploadImage={this.uploadImage.bind(this)}
          user={this.props.user}
          imgHasUploaded={this.imgHasUploaded.bind(this)}
          isImgUploaded={this.state.isImgUploaded}
          handleImageChange={this.props.handleImageChange}
        />

        <form className='contact-form'
          aria-label='new contact form'>

          <div className='user-input'>
            <img className='icon-user'
              role="none"
              src='../../../images/avatar.png'/>
            <input
              value={this.state.fullName}
              className='input-form-field image'
              aria-label="full name"
              placeholder='full name ...'
              onChange={(e) => this.setState({
                  fullName: e.target.value
                })
              }
            />
          </div>

          <div className='company-input'>
            <img className='icon-company'
              role="none"
              src='../../../images/svg/business.svg'/>
            <input
              value={this.state.company}
              className='input-form-field company'
              aria-label="company name"
              placeholder='company ...'
              onChange={(e) => this.setState({
                  company: e.target.value
                })
              }
            />
          </div>

          <div className='email-input'>
            <img
              className='icon-email pimary-input primary'
              alt="primary email"
              src='../../../images/primary.png'
              />
            <img className='icon-email'
              role="none" src='../../../images/svg/close-envelope.svg'/>
            <input
              value={this.state.email1}
              className='input-form-field email email1'
              aria-label="primary email"
              placeholder='primary email ...'
              onChange={(e) => this.setState({
                  email1: e.target.value
                })
              }
            />
          </div>

          <div className='email-input'>
            <img className='icon-email'
              role="none" src='../../../images/svg/close-envelope.svg'/>
            <input
              value={this.state.email2}
              className='input-form-field email email2'
              aria-label="secondary email"
              placeholder='email ...'
              onChange={(e) => this.setState({
                  email2: e.target.value
                })
              }
            />
          </div>

          <div className='phone-input'>
            <img
              className='pimary-input'
              alt="primary phone"
              src='../../../images/primary.png'
              />
            <img className='icon-phone'
              role="none" src='../../../images/svg/whatsapp-logo.svg'
              />
            <input
              value={this.state.cell}
              className='input-form-field cell'
              aria-label="cell phone number"
              type='text'
              placeholder='primary phone ...'
              onChange={(e) => this.setState({
                  cell: e.target.value
                })
              }
            />
          </div>

          <div className='phone-input'>
            <img className='icon-phone'
              role="none" src='../../../images/svg/whatsapp-logo.svg'/>
            <input
              value={this.state.home}
              className='input-form-field home'
              aria-label="home phone number"
              placeholder='phone ...'
              onChange={(e) => this.setState({
                  home: e.target.value
                })
              }
            />
          </div>

          <div className='phone-input'>
            <img className='icon-phone'
              role="none" src='../../../images/svg/whatsapp-logo.svg'/>
            <input
              value={this.state.work}
              className='input-form-field work'
              aria-label="work phone number"
              placeholder='phone ...'
              onChange={(e) => this.setState({
                  work: e.target.value
                })
              }
            />
          </div>

          <div className='linkedIn-input'>
            <img className='icon-linkedIn'
              role="none" src='../../../images/svg/linkedIn.svg'/>
            <input
              value={this.state.linkedIn}
              className='social-media-input-form-field linkedIn'
              aria-label='linkedIn plus user name'
              placeholder='linkedIn ...'
              onChange={(e) => this.setState({
                  linkedIn: e.target.value
                })
              }
            />
          </div>

          <div className='facebook-input'>
            <img className='icon-facebook'
              role="none" src='../../../images/svg/facebook-logo.svg'/>
            <input
              value={this.state.facebook}
              className='social-media-input-form-field facebook'
              aria-label='facebook user name'
              placeholder='facebook ...'
              onChange={(e) => this.setState({
                  facebook: e.target.value
                })
              }
            />
          </div>

          <div className='twitter-input'>
            <img className='icon-twitter'
              role="none" src='../../../images/svg/twitter-logo.svg'/>
            <input
              value={this.state.twitter}
              className='social-media-input-form-field twitter'
              aria-label='twitter user name'
              placeholder='twitter ...'
              onChange={(e) => this.setState({
                  twitter: e.target.value
                })
              }
            />
          </div>

          <div className='github-input'>
            <img className='icon-github'
              role="none" src='../../../images/svg/github-sign.svg'/>
            <input
              value={this.state.github}
              className='social-media-input-form-field github'
              aria-label='github user name'
              placeholder='github ...'
              onChange={(e) => this.setState({
                  github: e.target.value
                })
              }
            />
          </div>

          <div className='notes-input'>
            <img className='icon-notes'
              role="none" src='../../../images/svg/notes.svg'/>
            <textarea
              value={this.state.notes}
              className='notes-text-area'
              aria-label='notes about contact'
              placeholder='notes ...'
              onChange={(e) => this.setState({
                  notes: e.target.value
                })
              }>
            </textarea>
          </div>

          <button
            className='save-contact-button'
            onClick={(e) => this.pushContact(e)}
            >Save Contact
          </button>
        </form>
      </section>
      )
    }
  }
