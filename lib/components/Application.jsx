import React, { Component } from 'react'
import firebase, { reference, signIn, signOut } from '../firebase'
// import { pick, map, extend, uniqBy } from 'lodash'

// import { MessageList } from './MessageList.js'
import ContactForm from './ContactForm.jsx';

export default class Application extends Component {
  constructor() {
    super()
    this.state = {
      contacts: [],
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
            map(contacts, (val, key) => extend(val, { key }))
        })
        updateContactChanges(contacts)
        })
      )
    )
  }
  updateContactChanges(contacts) {
    contacts.forEach((contact) => {
      this.state.contacts.push({
        key: contact.user.uid,
        displayName: contact.user.displayName,
        email: contact.user.email
      })
    })
  }

  componentDidMount() {
  reference.limitToLast(100).on('value', (snapshot) => {
    const messages = snapshot.val() || {}
    const currentMessages = map(messages, (val, key) => extend(val, { key }))
    let currentUsers = []
    currentMessages.forEach((message) => {
      currentUsers.push({ key: message.user.uid, displayName: message.user.displayName, email: message.user.email })
    })
  this.setMessagesAndUsers(currentMessages, currentUsers)
  })
  firebase.auth().onAuthStateChanged(user => this.setState({ user }))
}

  createContact() {
    console.log('hey')
    this.state.usersDatabase.push("newData")
  }
  //be able to save contacts into database into each user's folder, which is named after uid
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
        <ContactForm createContact={this.createContact.bind(this)}/>
      </section>
    )
  }

}

{/* <ContactList
  className='contact-list'
  />

  <CreateContactButton
  className='create-contact-button'
  />

  <Search
  className='search'
  />

  <SingleContact
  className='single-contact'
  /> */}
{/* <LoginLogout
className='login-logout'
user={user}
/> */}



// componentDidMount() {
//   reference.limitToLast(100).on('value', (snapshot) => {
//     const contacts = snapshot.val() || {}
//     const currentContacts = map(contacts, (val, key) => extend(val, { key }))
//     let currentUsers = []
//     currentContacts.forEach((contact) => {
//       currentUsers.push({ key: contact.user.uid, displayName: contact.user.displayName, email: contact.user.email })
//     })
//   this.setMessagesAndUsers(currentContacts, currentUsers)
//   })
//   firebase.auth().onAuthStateChanged(user => this.setState({ user }))
// }
// setMessagesAndUsers(currentContacts, currentUsers) {
//   this.setState({
//     contacts: currentContacts,
//     users: uniqBy(currentUsers, 'email')
//   })
// }
// submitNewMessage(draftMessage) {
//   const { user } = this.state
//   reference.push({
//     user: pick(user, 'displayName', 'email', 'uid'),
//     content: draftMessage,
//     createdAt: moment().format('MMMM D, h:mm a')
//   })
// }
// filterContacts(searchValue) {
//   this.setState({filteredContacts: this.state.contacts.filter((contact) => {
//     return (contact.content.indexOf(searchValue) >= 0)
//     })
//   })
// }
