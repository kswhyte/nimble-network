import React, { Component } from 'react'
import { map } from 'lodash'

// import Contact from './Contact.jsx'

export default class ImageUpload extends Component {
  constructor() {
    super()
    this.state = {
      picture: '../../images/avatar.png',
      userImage: null
    }
  }

  updateImage(key) {
    const { uid } = this.props.user
    this.props.contactList.map(contact => {
      if(key === contact.key) {
        firebase.database().ref(`${uid}/${key}`).update({
          followUp: !contact.followUp
        })
      } else {
        return
      }
    })
  }

  setImage(){
    if(this.state.userImage.length > 0){
      this.setState({
        picture: this.state.userImage
      })
    }
  }

  // (e) => this.setState({
  //   userImage: e.target.value

  render() {
    return (
      <form className='contact-form'>

        <h1
          className='create-new-contact-title'>
          ~ Create a New Contact ~
        </h1>

        <img
          src={this.state.picture}
        />

        <input
          className='input-form-field'
          placeholder='image ...'
          onChange={this.updateImage.bind(this)}
            }
          }
        />

        <button
          onClick={()=>this.setImage()}>
          upload image
        </button>
      </form>
    )
  }
}
