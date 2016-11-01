import React, { Component } from 'react'
import firebase, { reference, signIn, signOut } from '../firebase'
// import { pick, map, extend, uniqBy } from 'lodash'

export default class ContactForm extends Component {
  constructor() {
    super()
    this.state = {
      picture: null,
      fullName: '',
      company: '',
      email: {
        primaryEmail: '',
        secondaryEmail: ''
      },
      phone: {
        primaryNumber: '',
        secondaryNumber: ''
      },
      socialMedia: {
        google: '',
        facebook: '',
        twitter: '',
        github: ''
      }
    }
  }

    render() {
      return (
        <form>
        <input className="full-name" placeholder="Full Name..."/>
        <input className="company" placeholder="Company..."/>
        <input className="email1" placeholder="Email 1..."/>
        <input className="email2" placeholder="Email 2..."/>
        <input className="phone1" placeholder="Phone 1..."/>
        <input className="phone2" placeholder="Phone 2..."/>
        <input className="google" placeholder="Username..."/>
        <input className="facebook" placeholder="Username..."/>
        <input className="twitter" placeholder="Username..."/>
        <input className="github" placeholder="Username..."/>
        <button onClick={this.props.createContact}>create contact</button>
        </form>
      )
    }
  }
