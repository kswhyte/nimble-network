import React, { Component } from 'react'
import firebase, { reference } from '../firebase'

// import ContactList from './ContactList.jsx'
// import FollowUpContactList from './FollowUpContactList.jsx'
// import ImageUpload from './ImageUpload.jsx'

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
      google: '',
      facebook: '',
      twitter: '',
      github: '',
      notes: '',
      followUp: false
    }
  }

  pushContact() {
    var newContact = this.state
    return(this.props.pushContact(newContact))
  }

  render() {
    return (
      <section className='contact-form-and-list'>
        <form className='contact-form'>
            <input
              className='input-form-field'
              placeholder='image...'
              onChange={(e) => this.setState({
                  userImage: e.target.value
                })
              }
            />

          <button
            className='save-contact-button'
            onClick={()=>this.setImage()}>
            upload image
          </button>

          <div className='user-input'>
            <img className='icon-user' src='../../../images/user-icon.png'/>
            <input
              className='input-form-field'
              placeholder='full name ...'
              onChange={(e) => this.setState({
                  fullName: e.target.value
                })
              }
            />
          </div>

          <div className='company-input'>
            <img className='icon-company' src='../../../images/company-icon.png'/>
            <input
              className='input-form-field'
              placeholder='company ...'
              onChange={(e) => this.setState({
                  company: e.target.value
                })
              }
            />
        </div>

        <div className='email-input'>
            <img className='icon-email' src='../../../images/email-icon.png'/>
            <input
              className='input-form-field email'
              placeholder='email 1 ...'
              onChange={(e) => this.setState({
                  email1: e.target.value
                })
              }
            />
        </div>

        <div className='email-input'>
            <img className='icon-email' src='../../../images/email-icon.png'/>
            <input
              className='input-form-field email'
              placeholder='email 2 ...'
              onChange={(e) => this.setState({
                  email2: e.target.value
                })
              }
            />
        </div>

        <div className='phone-input'>
            <img className='icon-phone' src='../../../images/phone-icon.png'/>
            <input
              className='input-form-field'
              type='text'
              placeholder='cell number ...'
              onChange={(e) => this.setState({
                  cell: e.target.value
                })
              }
            />
          </div>

          <div className='phone-input'>
              <img className='icon-phone' src='../../../images/phone-icon.png'/>
            <input
              className='input-form-field'
              placeholder='home number ...'
              onChange={(e) => this.setState({
                  home: e.target.value
                })
              }
            />
          </div>

          <div className='phone-input'>
              <img className='icon-phone' src='../../../images/phone-icon.png'/>
            <input
              className='input-form-field'
              placeholder='work number ...'
              onChange={(e) => this.setState({
                  work: e.target.value
                })
              }
            />
          </div>

          <div className='google-input'>
            <img className='icon-google' src='../../../images/svg/google-plus-logo.svg'/>
            <input
              className='social-media-input-form-field'
              placeholder='google+ ...'
              onChange={(e) => this.setState({
                  google: e.target.value
                })
              }
            />
          </div>

          <div className='facebook-input'>
            <img className='icon-facebook' src='../../../images/svg/facebook-logo.svg'/>
            <input
              className='social-media-input-form-field'
              placeholder='facebook ...'
              onChange={(e) => this.setState({
                  facebook: e.target.value
                })
              }
            />
          </div>

          <div className='twitter-input'>
            <img className='icon-twitter' src='../../../images/svg/twitter-logo.svg'/>
            <input
              className='social-media-input-form-field'
              placeholder='twitter ...'
              onChange={(e) => this.setState({
                  twitter: e.target.value
                })
              }
            />
          </div>

          <div className='github-input'>
            <img className='icon-github' src='../../../images/svg/github-sign.svg'/>
            <input
              className='social-media-input-form-field'
              placeholder='github ...'
              onChange={(e) => this.setState({
                  github: e.target.value
                })
              }
            />
          </div>

          <div className='notes-input'>
            <img className='icon-notes' src='../../../images/notes-icon.png'/>
            <textarea
              className='notes-text-area'
              placeholder='notes ...'
              onChange={(e) => this.setState({
                  notes: e.target.value
                })
              }>
            </textarea>
          </div>

          <button
            className='save-contact-button'
            onClick={() => this.pushContact()}
            >Save Contact
          </button>
        </form>

      </section>
      )
    }
  }
