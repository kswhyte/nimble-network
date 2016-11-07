import React, { Component } from 'react'
import { map } from 'lodash'

export default class ImageUpload extends Component {
  constructor() {
    super()
  }
  //   this.state = {
  //     file: '',
  //     imagePreviewUrl: ''
  //   }
  // }
  // // retreive
  //   // use a file reader
  // _handleSubmit(e) {
  //   e.preventDefault();
  //   // TODO: do something with -> this.state.file
  //   console.log('handle uploading-', this.state.file);
  // }
  //
  // _handleImageChange(e) {
  //   e.preventDefault();
  //
  //   let reader = new FileReader();
  //   let file = e.target.files[0];
  //
  //   reader.onloadend = () => {
  //     this.setState({
  //       file: file,
  //       imagePreviewUrl: reader.result
  //     });
  //   }
  //
  //   reader.readAsDataURL(file)
  // }
  //
  render() {
  //
  //   let {imagePreviewUrl} = this.state;
  //
  //   let $imagePreview = null;
  //
  //   if (imagePreviewUrl) {
  //     $imagePreview = (<img src={imagePreviewUrl} />);
  //   } else {
  //     $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
  //   }

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
