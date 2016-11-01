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
  }
