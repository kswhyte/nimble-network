import React, { Component } from 'react'

export default class PhoneContact extends Component {
  constructor() {
    super()
    this.state = {
      hidePhoneDisplay: true
    }
  }

  toggleHidePhoneDisplay() {
    this.setState({
      hidePhoneDisplay: !this.state.hidePhoneDisplay
    })
  }

  togglePhoneArrowButton() {
    if (this.state.hidePhoneDisplay === true){
      return '../../../images/down-arrow-icon.png'
    }else{
      return '../../../images/up-arrow-icon.png'
    }
  }

  render() {
    const { contact } = this.props
    return (
      <li
        className='contact-display'>
        {contact.cell}

        <img
          className='email-expand'
          onClick={this.toggleHidePhoneDisplay.bind(this)}
          src={this.togglePhoneArrowButton()}/>

        <ul
           hidden={this.state.hidePhoneDisplay}
        >
          <li
            className='contact-display'>
            {contact.home}
          </li>

          <li
            className='contact-display'>
            {contact.work}
          </li>

        </ul>
      </li>
    )
  }
}
