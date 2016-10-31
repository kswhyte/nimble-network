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
}
  // componentDidMount() {
  //   reference.limitToLast(100).on('value', (snapshot) => {
  //     const messages = snapshot.val() || {}
  //     const currentMessages = map(messages, (val, key) => extend(val, { key }))
  //     let currentUsers = []
  //     currentMessages.forEach((message) => {
  //       currentUsers.push({ key: message.user.uid, displayName: message.user.displayName, email: message.user.email })
  //     })
  //   this.setMessagesAndUsers(currentMessages, currentUsers)
  //   })
  //   firebase.auth().onAuthStateChanged(user => this.setState({ user }))
  // }
  // setMessagesAndUsers(currentMessages, currentUsers) {
  //   this.setState({
  //     messages: currentMessages,
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
  //   this.setState({filteredContacts: this.state.contacts.filter((message) => {
  //     return (message.content.indexOf(searchValue) >= 0)
  //     })
  //   })
  // }
  // render() {
  //   return (
  //     {
  //       user ?
  //       <div className="user-welcome-bar">
  //         <p className="welcome-message">Logged in as
  //           <span
  //             className="user-name-on-bar">
  //             {user.displayName.split(' ')[0]}
  //           </span> ({user.email})
  //         </p>
  //         <button
  //           className="sign-in-button"
  //           onClick={() =>
  //             signOut()}>
  //             Sign Out
  //         </button>
  //       </div> :
  //       <button
  //         className="sign-out-button"
  //         onClick={() =>
  //           signIn()}>
  //           Sign In
  //       </button>
  //     }
  //   )
  // }
