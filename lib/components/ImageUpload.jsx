import React, { Component } from 'react'
import { map } from 'lodash'

// import Contact from './Contact.jsx'

export default class ImageUpload extends Component {
  constructor() {
    super()
    // this.state = {
    //   userImgSource: null
    // }
  }
  // retreive
    // use a file reader

    // <img
    //   alt='user-image'
    //   className='contact-image'
    //   src={this.state.userImgSource}
    //   />

  render() {
    return (
      <section className='upload-image-form'>
        <h1
        className='create-new-contact-title'>
        ~ Create a New Contact ~
        </h1>

        <input
          className='update-image-button'
          type='file'
          accept='image/*'
          onChange={(e) =>
            this.props.uploadImage(e.target.files)}
        >
        </input>
      </section>
    )
  }
}
