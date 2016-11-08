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

  toggleSocialMediaArrowButton() {
    if (this.state.hideSocialMediaDisplay === true){
      return '../../../images/down-arrow-icon.png'
    }else{
      return '../../../images/up-arrow-icon.png'
    }
  }

  render() {
    const { contact } = this.props
    return (
      <li className='contact-display'
        onClick={this.toggleSocialMediaDisplay.bind(this)}
        src={this.toggleSocialMediaArrowButton()}>
        Social media

        <img
          className='expand-social-media'
          alt="button to view full social media information"
          onClick={this.toggleSocialMediaDisplay.bind(this)}
          src={this.toggleSocialMediaArrowButton()}
        />

        <ul className='indent-info'
          hidden={this.state.hideSocialMediaDisplay}
          >

          <li className='contact-display'>
            {contact.linkedIn ?
              <div className = "linkedIn">
               <a href={contact.linkedIn}>{contact.linkedIn}</a>
             </div> :
               <div className="companyName">
                 {contact.linkedIn}
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
      </li>
    )
  }
}
