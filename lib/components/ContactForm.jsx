import React, { Component } from 'react'
import firebase, { reference } from '../firebase'

import ContactList from './ContactList.jsx'
import FollowUpContactList from './FollowUpContactList.jsx'

export default class ContactForm extends Component {
  constructor() {
    super()
    this.state = {
      picture: '../../images/avatar.png',
      userImage: '',
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

  saveEdit(key, newName, newCompany, newEmail1, newEmail2, newCell, newHome, newWork, newGoogle, newFacebook, newTwitter, newGithub, newNotes) {
    const { uid } = this.props.user
    this.props.contactList.map(contact => {
      if(key === contact.key) {
        firebase.database().ref(`${uid}/${key}`).update({
          fullName: newName,
          company: newCompany,
          email1: newEmail1,
          email2: newEmail2,
          cell: newCell,
          home: newHome,
          work: newWork,
          google: newGoogle,
          facebook: newFacebook,
          twitter: newTwitter,
          github: newGithub,
          notes: newNotes,
        })
      } else {
        return
      }
    })
  }


  toggleFollowUp(key) {
    const { uid } = this.props.user
    this.props.contactList.map(contact => {
      if(key === contact.key) {
        firebase.database().ref(`${uid}/${key}`).update({
          followUp: !contact.followUp
        })
      } else {
        return
      }
    })
  }

  setImage(){
    if(this.state.userImage.length > 0){
      this.setState({
        picture: this.state.userImage
      })
    }
  }

  render() {
    return (
      <section className='contact-form-and-list'>
        <form className='contact-form'>

          <h1
            className='create-new-contact-title'>
            ~ Create a New Contact ~
          </h1>

          <img
            src={this.state.picture}
          />

          <input
            className='input-form-field'
            placeholder='image...'
            onChange={(e) => this.setState({
                userImage: e.target.value
              })
            }
          />

          <button
            onClick={()=>this.setImage()}>
            upload image
          </button>

          <input
            className='input-form-field'
            placeholder='full name...'
            onChange={(e) => this.setState({
                fullName: e.target.value
              })
            }
          />

          <input
            className='input-form-field'
            placeholder='company...'
            onChange={(e) => this.setState({
                company: e.target.value
              })
            }
          />
          <input
            className='input-form-field'
            placeholder='email 1...'
            onChange={(e) => this.setState({
                email1: e.target.value
              })
            }
          />
          <input
            className='input-form-field'
            placeholder='email 2...'
            onChange={(e) => this.setState({
                email2: e.target.value
              })
            }
          />
          <input
            className='input-form-field'
            placeholder='cell number...'
            onChange={(e) => this.setState({
                cell: e.target.value
              })
            }
          />
          <input
            className='input-form-field'
            placeholder='home number...'
            onChange={(e) => this.setState({
                home: e.target.value
              })
            }
          />
          <input
            className='input-form-field'
            placeholder='work number...'
            onChange={(e) => this.setState({
                work: e.target.value
              })
            }
          />
          <input
            className='social-media-input-form-field'
            placeholder='google+...'
            onChange={(e) => this.setState({
                google: e.target.value
              })
            }
          />
          <input
            className='social-media-input-form-field'
            placeholder='facebook...'
            onChange={(e) => this.setState({
                facebook: e.target.value
              })
            }
          />
          <input
            className='social-media-input-form-field'
            placeholder='twitter...'
            onChange={(e) => this.setState({
                twitter: e.target.value
              })
            }
          />
          <input
            className='social-media-input-form-field'
            placeholder='github...'
            onChange={(e) => this.setState({
                github: e.target.value
              })
            }
          />
          <textarea
            className='notes-text-area'
            placeholder='notes...'
            onChange={(e) => this.setState({
                notes: e.target.value
              })
            }
          >
          </textarea>
          <button
            className='save-contact-button'
            onClick={() => this.pushContact()}
            >Save Contact
          </button>

        </form>

        <FollowUpContactList
          contactList={this.props.contactList}
          toggleFollowUp={this.toggleFollowUp.bind(this)}
          saveEdit={this.saveEdit.bind(this)}
        />

        <ContactList
          contactList={this.props.contactList}
          toggleFollowUp={this.toggleFollowUp.bind(this)}
          saveEdit={this.saveEdit.bind(this)}
        />

      </section>
      )
    }
  }
