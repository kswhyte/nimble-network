import React, { Component } from 'react'
import { map } from 'lodash'

export default class ContactList extends Component {

  constructor() {
    super()
    this.state = {
      hideDisplay: true,
    }
  }

  toggleContactDisplay() {
    if(!this.state.hideDisplay){
      this.setState({hideDisplay: true})
    }else if (this.state.hideDisplay) {
      this.setState({hideDisplay: false})
    }
  }

  render() {
    const { contactList } = this.props

    return (
      <ul
        className="contact-list">
          {contactList.map(contact => {
            return(
              <li className="single-contact" key={contact.key}>
                <section>
                  <span>{contact.fullName}</span>
                  <button
                    className='show-more-button'
                    onClick={this.toggleContactDisplay.bind(this)}
                    >Show More </button>
                </section>

                <div
                  className='hidden-contact-info'
                  hidden={this.state.hideDisplay} id={contact.contactID} className="show-contact-info">
                  <span className='contact-display'>{contact.company}</span>
                  <span className='contact-display'>{contact.email1}</span>
                  <span className='contact-display'>{contact.email2}</span>
                  <span className='contact-display'>{contact.cell}</span>
                  <span className='contact-display'>{contact.home}</span>
                  <span className='contact-display'>{contact.work}</span>
                  <span className='contact-display'>{contact.google}</span>
                  <span className='contact-display'>{contact.facebook}</span>
                  <span className='contact-display'>{contact.twitter}</span>
                  <span className='contact-display'>{contact.github}</span>
                </div>
              </li>
            )
        }) }
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
