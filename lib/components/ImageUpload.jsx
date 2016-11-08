import React, { Component } from 'react'
import { map } from 'lodash'

export default class ImageUpload extends Component {
  constructor() {
    super()
  }


  render() {
    let { imagePreviewUrl } = this.props
    let imagePreview

    if (imagePreviewUrl) {
      imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <section className='upload-image-form'>
        <form
          aria-label='upload image form'
          onSubmit={(e) =>
            this.props.uploadImage(e.target.files)}
        >
          <h1 className='create-new-contact-title'>
            ~ Create a New Contact ~
          </h1>
          <label className='image-upload-container'>
            { this.props.imagePreviewUrl === '../../../images/avatar.png' ?
              <div>
                <img
                  className='user-icon-pic'
                  src='../../../images/avatar.png'
                  alt='user icon/image'
                >
                </img>
              </div> :
              <div>
                <img
                  className='user-chosen-pic'
                  src={this.props.imagePreviewUrl}
                  alt='user icon/image'
                >
                </img>
              </div>
            }
            <p className='file-instructions'>
              Please select an Image to Upload
            </p>
            <input
              className='update-image-button'
              aria-label='button to load updated image'
              type='file'
              accept='image/*'
              onChange={(e) =>
                this.props.handleImageChange(e)}
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
