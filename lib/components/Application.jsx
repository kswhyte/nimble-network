import React, { Component } from 'react'
import firebase, { reference, signIn, signOut } from '../firebase'
// import { pick, map, extend, uniqBy } from 'lodash'

// import { MessageList } from './MessageList.js'
// import UserList from './UserList.js'

export default class Application extends Component {
  constructor() {
    super()
    this.state = {
      contacts: [],
      followUpContacts: [],
      user: null
    }
  }
  render() {
    const { user } = this.state
    return (
      <div>
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
            className="sign-in-button"
            onClick={() =>
              signOut()}>
              Sign Out
          </button>
        </div> :
        <button
          className="sign-out-button"
          onClick={() =>
            signIn()}>
            Sign In
        </button>
      }
      </div>
    )
  }

}




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
