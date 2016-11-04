import React, { Component } from 'react'

export default class SocialMedia extends Component {
  constructor() {
    super()
    this.state = {
      hideSocialMediaDisplay: true
    }
  }

  toggleSocialMediaDisplay() {
    this.setState({
      hideSocialMediaDisplay: !this.state.hideSocialMediaDisplay
    })
  }

  render() {
    const { contact } = this.props
    return (
      <li
        className='contact-display'
        onClick={this.toggleSocialMediaDisplay.bind(this)}>
        {contact.google}

        <ul
          hidden={this.state.hideSocialMediaDisplay}>

          <li
            className='contact-display'>
            {contact.facebook}
          </li>

          <li
            className='contact-display'>
            {contact.twitter}
          </li>

          <li
            className='contact-display'>
            {contact.github}
          </li>

        </ul>
      </li>
    )
  }
}
