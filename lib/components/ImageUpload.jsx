import React, { Component } from 'react'
import { map } from 'lodash'

export default class ImageUpload extends Component {
  constructor() {
    super()
    this.state = {
      file: '',
      imagePreviewUrl: ''
    }
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
    this.props.uploadImage(e.target.files)
  }

  render() {

    let { imagePreviewUrl } = this.state
    let imagePreview

    if (imagePreviewUrl) {
      imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <section className='upload-image-form'>
        <form onSubmit={(e) =>
          this.props.uploadImage(e.target.files)}
        >
          <h1
          className='create-new-contact-title'>
          ~ Create a New Contact ~
          </h1>

          <label className='image-upload-container'>
            <img
              className='user-icon-pic'
              src='../../../images/avatar.png'
            >
            </img>
            <p className='file-instructions'>
              Please select an Image to Upload
            </p>
            <input
              className='update-image-button'
              type='file'
              accept='image/*'
              onChange={(e) =>
                this.handleImageChange(e)}
            >
            </input>
          </label>

          <div className="imgPreview">
          { imagePreview }
          </div>
        </form>
      </section>
    )
  }
}
