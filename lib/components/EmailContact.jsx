import React, { Component } from 'react'

export default class EmailContact extends Component {
  constructor() {
    super()
    this.state = {
      hideEmailDisplay: true,
    }
  }

  toggleHideEmailDisplay() {
    this.setState({
      hideEmailDisplay: !this.state.hideEmailDisplay
    })
  }

  toggleEmailArrowButton() {
    if (this.state.hideEmailDisplay === true){
      return '../../../images/down-arrow-icon.png'
    }else{
      return '../../../images/up-arrow-icon.png'
    }
  }

  render() {
    const { contact } = this.props
    return (
      <li className='contact-display'
        onClick={this.toggleHideEmailDisplay.bind(this)}
        src={this.toggleEmailArrowButton()}>
        Email

        <img
          className='email-expand'
          onClick={this.toggleHideEmailDisplay.bind(this)}
          src={this.toggleEmailArrowButton()}/>

        <ul className='indent-info'
          hidden={this.state.hideEmailDisplay}
        >

          <li className='contact-display'>
            {contact.email1}
            <img
              className='primary'
              alt="primary email"
              src='../../../images/primary.png'
              />
          </li>


          <li
            className='contact-display'>
            {contact.email2}
          </li>

        </ul>
      </li>
    )
  }
}
