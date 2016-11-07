import React, { Component } from 'react'

export default class SocialMedia extends Component {
  constructor() {
    super()
    this.state = {
      // hideSocialMediaDisplay: true
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
      // <li
      //   className='contact-display'
      //   onClick={this.toggleSocialMediaDisplay.bind(this)}>
      //   {contact.google}

        <ul>
           {/* hidden={this.state.hideSocialMediaDisplay}> */}
          <li className='contact-display'>
            {contact.google ?
              <div className = "google">
               <a href={contact.google}>{contact.google}</a>
             </div> :
               <div className="companyName">
                 {contact.google}
               </div>}
            </li>

          <li className='contact-display'> {contact.facebook ?
            <div className = "facebook">
             <a href={contact.facebook}>{contact.facebook}</a>
           </div> :
             <div className="companyName">
               {contact.facebook}
             </div>}
          </li>

          <li className='contact-display'>{contact.twitter ?
            <div className = "twitter">
             <a href={contact.twitter}>{contact.twitter}</a>
           </div> :
             <div className="companyName">
               {contact.twitter}
             </div>}
          </li>

          <li className='contact-display'>{contact.github ?
            <div className = "github">
             <a href={contact.github}>{contact.github}</a>
           </div> :
             <div className="companyName">
               {contact.github}
             </div>}
          </li>

        </ul>
      // </li>
    )
  }
}
