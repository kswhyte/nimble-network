import React, { Component } from 'react'
import { map } from 'lodash'

export default class ContactList extends Component {

  render() {
    const { contactList } = this.props

    return (
      <ul className="contact-list">
        {contactList.map(contact => {
          return(
            <li className="single-contact" key={contact.key}>
              <span className="full-name">{contact.fullName}
                <button
                  onClick={this.props.toggleContactDisplay}
                  >Show More </button>
              </span>

              <div hidden={contact.hideDisplay} className="show-contact-info">
                <span className="company">{contact.company}</span>
                <span className="email1">{contact.email1}</span>
                <span className="email2">{contact.email2}</span>
                <span className="cell">{contact.cell}</span>
                <span className="home">{contact.home}</span>
                <span className="work">{contact.work}</span>
                <span className="google">{contact.google}</span>
                <span className="facebook">{contact.facebook}</span>
                <span className="twitter">{contact.twitter}</span>
                <span className="github">{contact.github}</span>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

// constructor() {
//   super()
//   this.state = {
//     hideDisplay: true
//   }
// }
//
// toggleContactDisplay() {
//   if(!this.state.hideDisplay){
//   this.setState({hideDisplay: true})
// } else if (this.state.hideDisplay) {
//   this.setState({hideDisplay: false})
//   }
// }
