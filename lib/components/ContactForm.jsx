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
      <form className="contact-form">
        <input className="full-name"
          placeholder="Full Name..."
          onChange={(e)=>this.setState({
            fullName: e.target.value
          })}
        />
        <input className="company"
          placeholder="Company..."
          onChange={(e)=>this.setState({
            company: e.target.value
          })}
        />
        <input className="email1"
          placeholder="Email 1..."
          onChange={(e)=>this.setState({
            email1: e.target.value
          })}
        />
        <input className="email2"
          placeholder="Email 2..."
          onChange={(e)=>this.setState({
            email2: e.target.value
          })}
        />
        <input className="cell"
          placeholder="cell..."
          onChange={(e)=>this.setState({
            cell: e.target.value
          })}
        />
        <input className="home"
          placeholder="home"
          onChange={(e)=>this.setState({
            home: e.target.value
          })}
        />
        <input className="work"
          placeholder="work"
          onChange={(e)=>this.setState({
            work: e.target.value
          })}
        />
        <input className="google"
          placeholder="google..."
          onChange={(e)=>this.setState({
            google: e.target.value
          })}
        />
        <input className="facebook"
          placeholder="facebook..."
          onChange={(e)=>this.setState({
            facebook: e.target.value
          })}
        />
        <input className="twitter"
          placeholder="twitter..."
          onChange={(e)=>this.setState({
            twitter: e.target.value
          })}
        />
        <input className="github"
          placeholder="github..."
          onChange={(e)=>this.setState({
            github: e.target.value
          })}
        />
        <button
          onClick={()=>this.pushContact()}
          >create contact</button>
      </form>
      )
    }
  }
