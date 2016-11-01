import React, { Component } from 'react'
import firebase, { reference, signIn, signOut } from '../firebase'
import { pick, map, extend, uniqBy } from 'lodash'
import ContactForm from './ContactForm.jsx';

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
    firebase.auth().onAuthStateChanged(user => this.setState({ user }, ()=>
      this.setState({ usersDatabase: firebase.database().ref(user.uid) }, ()=>
        { firebase.database().ref(user.uid).on('value', (snapshot) => {
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
    console.log('hey')
    this.state.usersDatabase.push(newContact)
  }

  render() {
    const { user } = this.state
    return (
      <section className='main-application'>
        <section className="log-in-out-bar">
        {
          user ?
          <div className="user-welcome-bar">
            <p className="welcome-contact">Logged in as
              <span
                className="user-name-welcome">
                {user.displayName.split(' ')[0]}
              </span> ({user.email})
            </p>
            <button
              className="sign-out-button"
              onClick={() =>
                signOut()}>
                Sign Out
            </button>
          </div> :
          <button
            className="sign-in-button"
            onClick={() =>
              signIn()}>
              Sign In
          </button>
        }
        </section>
        <ContactForm
          pushContact={this.createContact.bind(this)}
        />
      </section>
    )
  }
}
