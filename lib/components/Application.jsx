import React, { Component } from 'react'
import firebase, { reference, signIn, signOut } from '../firebase'
import { pick, map, extend, uniqBy } from 'lodash'

import ContactForm from './ContactForm.jsx'
const { LoginLogout } = require ('./LoginLogout.jsx')
const ContactList = require ('./ContactList.jsx')

export default class Application extends Component {
  constructor() {
    super()
    this.state = {
      contactList: [],
      followUpContacts: [],
      user: null,
      userDatabase: null
    }
  }
  
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }, ()=>this.setState({
      usersDatabase: firebase.database().ref(user.uid)
      },
      ()=>{ firebase.database().ref(user.uid).on('value',
        (snapshot) => {
            const contacts = snapshot.val() || {}
            let currentContacts = map(contacts, (val, key) => extend(val, { key }))
            this.setState({
              contactList: currentContacts
            })
          })
        })
      )
    )
  }

  createContact(newContact) {
    this.state.usersDatabase.push(newContact)
  }

  render() {
    return (
      <section className='main-application'>
        <LoginLogout
          user={this.state.user}
        />

        <ContactForm
          pushContact={this.createContact.bind(this)}
        />

        <ContactList
          contactList={this.state.contactList}
        />
      </section>
    )
  }
}
