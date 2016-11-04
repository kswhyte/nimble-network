import React, { Component } from 'react'

export default class Contact extends Component {
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

  render() {
    const { contact } = this.props
    return (
      <li className='contact-display'
        onClick={this.toggleHidePhoneDisplay.bind(this)}>
        {contact.cell}
        <ul hidden={this.state.hidePhoneDisplay}>
          <li className='contact-display'>
            {contact.home}
          </li>
          <li className='contact-display'>
            {contact.work}
          </li>
        </ul>
      </li>
    )
  }

}
