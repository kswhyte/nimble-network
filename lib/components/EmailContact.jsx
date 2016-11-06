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

  render() {
    const { contact } = this.props
    return (
      <li
        className='contact-display'
        onClick={this.toggleHideEmailDisplay.bind(this)}>
        {contact.email1}

        <ul
          hidden={this.state.hideEmailDisplay}
        >
          <li
            className='contact-display'>
            {contact.email2}
          </li>

        </ul>
      </li>
    )
  }
}
