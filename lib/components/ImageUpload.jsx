import React, { Component } from 'react'
import { map } from 'lodash'

// import Contact from './Contact.jsx'

export default class ImageUpload extends Component {
  constructor() {
    super()
    this.state = {
      imgURL: '../../images/avatar.png',
      userImage: null
    }
  }

  updateImage(key) {
    const { uid } = this.props.user
    this.props.contactList.map(contact => {
      if(key === contact.key) {
        firebase.database().ref(`${uid}/${key}`).update({
          imgURL: this.state.userImage
        })
      } else {
        return
      }
    })
  }

  setImage(e){
    (e) => this.setState({
      userImage: e.target.value
    })
  }

    // if(this.state.userImage.length > 0){
    //   this.setState({
    //     imgURL: this.state.userImage
    // }

  deleteImage() {
    this.setState({
      imgURL: '../../images/avatar.png'
    })
  }

  render() {
    return (
      <form className='contact-form'>

        <h1
          className='create-new-contact-title'>
          ~ Create a New Contact ~
        </h1>

        <section>
          { this.state.imgURL ?
            <section>
              <img
                alt='img URL'
                className='contact-image'
                src={this.state.imgURL}
              />
              <button
                onClick={() => this.deleteImage()}
              >Delete Image
              </button>
            </section> :

            <section>
              <button
                className='add-image-button'
                type='file'
                onChange={this.updateImage.bind(this)}
                accept='image/*'
              >Add Contact Image
              </button>
            </section>
          }
        </section>
      </form>
    )
  }
}
