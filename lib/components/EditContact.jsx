// import React, { Component } from 'react'
// import PhoneContact from './PhoneContact.jsx'
// import EmailContact from './EmailContact.jsx'
// import SocialMedia from './SocialMedia.jsx'
// var contentEditable = require("react-contenteditable")
//
//
// export default class EditContact extends Component {
//   constructor() {
//     super()
//     this.state = {
//       newName: '',
//       newCompany: '',
//       newEmail1: '',
//       newEmail2: '',
//       newCell: '',
//       home: '',
//       work: '',
//       google: '',
//       facebook: '',
//       twitter: '',
//       github: '',
//       notes: '',
//     }
//   }
//
//   saveEdit() {
//     this.props.saveEdit()
//   }
//
//   editCompany() {
//     const { contact } = this.props
//     const newCompany = this.state.newCompany
//     this.props.editCompany(contact.key, newCompany)
//   }
//
//   editName() {
//     const { contact } = this.props
//     const newName = this.state.newName
//     this.props.editName(contact.key, newName)
//   }
//
//   render() {
//     const { contact } = this.props
//
//     return(
//       <li className='single-contact'>
//
//         <input placeholder={contact.fullName}
//           value={this.state.newName}
//           onChange={(e) => this.setState({newName: e.target.value})}
//           onBlur={() => this.editName()}/>
//
//         <button className='follow-up-button'
//           onClick={() => this.props.toggleFollowUp(contact.key)}>
//           Follow-up
//         </button>
//
//         <ul
//           hidden={false}
//           className='show-contact-info'>
//
//           <button className='save-button'
//             onClick={this.saveEdit()}>
//             Save
//           </button>
//
//           <input
//             className="contact-display"
//             placeholder={contact.company}
//             value={this.state.newCompany}
//             onChange={(e) => this.setState({newCompany: e.target.value})}
//             onBlur={() => this.editCompany()}
//             />
//
//           <EmailContact
//             contact={contact}
//           />
//
//           <PhoneContact
//             contact={contact}
//           />
//
//           <SocialMedia
//             contact={contact}
//           />
//
//         <input
//             className='contact-display'
//             placeholder={contact.notes}
//           />
//
//         </ul>
//       </li>
//
//     )
//   }
// }
