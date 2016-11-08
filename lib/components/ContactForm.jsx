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
      file: '',
      imagePreviewUrl: '../../../images/avatar.png'
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
      linkedIn: this.state.linkedIn,
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
      imgKey: '',
      file: '',
      imagePreviewUrl: '../../../images/avatar.png'
    })
  }


  toggleSaveButton () {
    if(this.state.fullName.length > 1){
      return false
    }else{
      return true
    }
  }

  handleImageChange(e) {
    e.preventDefault()

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
    this.uploadImage(e.target.files)
  }

  uploadImage(imageUpload) {
    this.setState({ userImage: imageUpload[0] })
  }

  render() {
    return (
      <section className='contact-form-and-list'>
        <ImageUpload
          uploadImage={this.uploadImage.bind(this)}
          user={this.props.user}
          handleImageChange={this.handleImageChange.bind(this)}
          imagePreviewUrl={this.state.imagePreviewUrl}
        />

        <form className='contact-form'
          aria-label='new contact form'>

          <div className='user-input'>
            <img className='icon-user'
              role="none"
              src='../../../images/avatar.png'/>
            <input
            className='input-form-field image'
              value={this.state.fullName}
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
              className='input-form-field company'
              value={this.state.company}
              aria-label="company name"
              placeholder='company ...'
              onChange={(e) => this.setState({
                  company: e.target.value
                })
              }
            />
          </div>

          <div className='email-input'>
            <img className='icon-email'
              role="none" src='../../../images/svg/close-envelope.svg'/>
            <input
              className='input-form-field email email1'
              value={this.state.email1}
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
              role="none" src='../../../images/svg/close-envelope.svg'
              />
            <input
              className='input-form-field email email2'
              value={this.state.email2}
              aria-label="secondary email"
              placeholder='email ...'
              onChange={(e) => this.setState({
                  email2: e.target.value
                })
              }
            />
          </div>

          <div className='phone-input'>
            <img className='icon-phone'
              role="none" src='../../../images/svg/whatsapp-logo.svg'
              />
            <input
              className='input-form-field cell'
              value={this.state.cell}
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
              className='input-form-field home'
              value={this.state.home}
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
              className='input-form-field work'
              value={this.state.work}
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
              className='social-media-input-form-field linkedIn'
              value={this.state.linkedIn}
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
              className='social-media-input-form-field facebook'
              value={this.state.facebook}
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
              className='social-media-input-form-field twitter'
              value={this.state.twitter}
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
              className='social-media-input-form-field github'
              value={this.state.github}
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
              className='notes-text-area'
              value={this.state.notes}
              aria-label='notes about contact'
              placeholder='notes ...'
              onChange={(e) => this.setState({
                  notes: e.target.value
                })
              }>
            </textarea>
          </div>

          <button
            disabled={this.toggleSaveButton()}
            className='save-contact-button'
            onClick={(e) => this.pushContact(e)}
            >Save Contact
          </button>
        </form>
      </section>
      )
    }
  }
