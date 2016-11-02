import React, { Component } from 'react'
import ContactList from './ContactList.jsx'

export default class ContactForm extends Component {
  constructor() {
    super()
    this.state = {
      contactID: Date.now(),
      picture: null,
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
      github: ''
      }
    }

  pushContact(){
    var newContact = this.state
    return(this.props.pushContact(newContact))
  }

  render() {
    return (
      <div>
      <form className="contact-form">
        <input
          className="full-name"
          placeholder="full name..."
          onChange={(e) =>
            this.setState({
              fullName: e.target.value
            })
          }
        />
        <input
          className="company"
          placeholder="company..."
          onChange={(e) =>
            this.setState({
              company: e.target.value
            })
          }
        />
        <input
          className="email1"
          placeholder="email 1..."
          onChange={(e) =>
            this.setState({
              email1: e.target.value
            })
          }
        />
        <input
          className="email2"
          placeholder="email 2..."
          onChange={(e) =>
            this.setState({
              email2: e.target.value
            })
          }
        />
        <input
          className="cell-phone"
          placeholder="cell number..."
          onChange={(e) =>
            this.setState({
              cell: e.target.value
            })
          }
        />
        <input
          className="home-phone"
          placeholder="home number..."
          onChange={(e) =>
            this.setState({
              home: e.target.value
            })
          }
        />
        <input
          className="work-phone"
          placeholder="work number..."
          onChange={(e) =>
            this.setState({
              work: e.target.value
            })
          }
        />
        <input
          className="google-plus"
          placeholder="google+..."
          onChange={(e) =>
            this.setState({
              google: e.target.value
            })
          }
        />
        <input
          className="facebook-username"
          placeholder="facebook..."
          onChange={(e) =>
            this.setState({
              facebook: e.target.value
            })
          }
        />
        <input
          className="twitter-username"
          placeholder="twitter..."
          onChange={(e) =>
            this.setState({
              twitter: e.target.value
            })
          }
        />
        <input
          className="github-username"
          placeholder="github..."
          onChange={(e) =>
            this.setState({
              github: e.target.value
            })
          }
        />
        <button
          onClick={() =>
            this.pushContact()}
        >create contact
        </button>
      </form>
      <ContactList
        contactList={this.props.contactList}
      />
      </div>
      )
    }
  }
