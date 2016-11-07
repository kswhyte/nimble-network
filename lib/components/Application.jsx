import React, { Component } from 'react'
import firebase, { reference, signIn, signOut } from '../firebase'
import { pick, map, extend, uniqBy } from 'lodash'

import ImageUpload from './ImageUpload.jsx'
import ContactForm from './ContactForm.jsx'
const { SearchBar } = require('./SearchBar.jsx')
import ContactList from './ContactList.jsx'
import FollowUpContactList from './FollowUpContactList.jsx'
const { LoginLogout } = require('./LoginLogout.jsx')

export default class Application extends Component {
  constructor() {
    super()
    this.state = {
      searchText: '',
      contactList: [],
      followUpContacts: [],
      user: null,
      userDatabase: null
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user },
      () => this.setState({
        usersDatabase: firebase.database().ref(user.uid
      )},
      () => { firebase.database().ref(user.uid).on('value',
        (snapshot) => {
            const contacts = snapshot.val() || {}
            let currentContacts = map(contacts,
              (val, key) => extend(val, { key }))

            this.setState({
              contactList: currentContacts
            })
          })
        })
      )
    )
  }

  updateSearch(e) {
    this.setState({ searchText: e.target.value })
  }

  createContact(newContact) {
    this.state.usersDatabase.push(newContact)
  }

  toggleFollowUp(key) {
    const { uid } = this.state.user
    this.state.contactList.map(contact => {
      if(key === contact.key) {
        firebase.database().ref(`${uid}/${key}`).update({
          followUp: !contact.followUp
        })
      } else {
        return
      }
    })
  }

  saveEdit(key, newName, newCompany, newEmail1, newEmail2, newCell, newHome, newWork, newGoogle, newFacebook, newTwitter, newGithub, newNotes) {
    const { uid } = this.state.user
    this.state.contactList.map(contact => {
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

  render() {
    return (
      <section className='main-application'>
        <ImageUpload
        user={this.state.user}
        />

        <SearchBar
          updateSearch={this.updateSearch.bind(this)}
        />


        <ContactForm
          pushContact={this.createContact.bind(this)}
          contactList={this.state.contactList}
          user={this.state.user}
        />

        <FollowUpContactList
          contactList={this.state.contactList}
          toggleFollowUp={this.toggleFollowUp.bind(this)}
          saveEdit={this.saveEdit.bind(this)}
          searchText={this.state.searchText}
        />

        <ContactList
          contactList={this.state.contactList}
          toggleFollowUp={this.toggleFollowUp.bind(this)}
          saveEdit={this.saveEdit.bind(this)}
          searchText={this.state.searchText}
        />

        <LoginLogout
          user={this.state.user}
        />

      </section>
    )
  }
}
