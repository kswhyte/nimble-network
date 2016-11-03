import React, { Component } from 'react'
import ContactList from './ContactList.jsx'

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
      github: '',
      hideDisplay: true
      }
    }

  pushContact(){
    var newContact = this.state
    return(this.props.pushContact(newContact))
  }


  toggleContactDisplay(key) {
    this.props.contactList.map(contact => {
      if(key === contact.key){
        return contact.hideDisplay = false;
        // this.setState({
        //   hideDisplay: false
        // })
      }else{
        return
      }
    })
  }

  // showMore(){
  //   debugger
  //   if(!this.state.hideDisplay){
  //     this.setState({hideDisplay: true})
  //   } else if (this.state.hideDisplay) {
  //     this.setState({hideDisplay: false})
  //   }
  // }

  render() {
    return (
      <section className='contact-form-and-list'>
        <form className='contact-form'>
          <h1 className='create-new-contact-title'>~ Create a New Contact ~</h1>
          <input
            className='input-form-field'
            placeholder='full name...'
            onChange={(e) =>
              this.setState({
                fullName: e.target.value
              })
            }
          />
          <input
            className='input-form-field'
            placeholder='company...'
            onChange={(e) =>
              this.setState({
                company: e.target.value
              })
            }
          />
          <input
            className='input-form-field'
            placeholder='email 1...'
            onChange={(e) =>
              this.setState({
                email1: e.target.value
              })
            }
          />
          <input
            className='input-form-field'
            placeholder='email 2...'
            onChange={(e) =>
              this.setState({
                email2: e.target.value
              })
            }
          />
          <input
            className='input-form-field'
            placeholder='cell number...'
            onChange={(e) =>
              this.setState({
                cell: e.target.value
              })
            }
          />
          <input
            className='input-form-field'
            placeholder='home number...'
            onChange={(e) =>
              this.setState({
                home: e.target.value
              })
            }
          />
          <input
            className='input-form-field'
            placeholder='work number...'
            onChange={(e) =>
              this.setState({
                work: e.target.value
              })
            }
          />
          <input
            className='input-form-field'
            placeholder='google+...'
            onChange={(e) =>
              this.setState({
                google: e.target.value
              })
            }
          />
          <input
            className='input-form-field'
            placeholder='facebook...'
            onChange={(e) =>
              this.setState({
                facebook: e.target.value
              })
            }
          />
          <input
            className='input-form-field'
            placeholder='twitter...'
            onChange={(e) =>
              this.setState({
                twitter: e.target.value
              })
            }
          />
          <input
            className='input-form-field'
            placeholder='github...'
            onChange={(e) =>
              this.setState({
                github: e.target.value
              })
            }
          />
          <button
            className='save-contact-button'
            onClick={() =>
              this.pushContact()}
          >Save Contact
          </button>
        </form>

        <ContactList
          contactList={this.props.contactList}
          toggleContactDisplay={this.toggleContactDisplay.bind(this)}
        />

      </section>
      )
    }
  }
