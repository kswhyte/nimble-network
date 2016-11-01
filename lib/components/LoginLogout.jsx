import firebase, { reference, signIn, signOut } from '../firebase';
import React, { Component } from 'react'

const LoginLogout = ({user}) => {
  return (
    <div className="LoginStatus">
      {user ?
        <p>Logged in as
        <span className ='user-display'>{user.displayName}</span>
        ({user.email})
        <button className='LogOut-btn'
          onClick={()=>signOut()}>Sign Out</button></p>
        :<button className='LogIn-btn'
          onClick={()=>signIn()}>Sign In</button>
      }
    </div>
  );

}

module.exports = LoginLogout

// return(
//   <section className="log-in-out-bar">
//   {user ?
//     <div className="user-welcome-bar">
//       <p className="welcome-contact">Logged in as
//         <span className="user-name-welcome">{user.displayName}</span> ({user.email})
//       </p>
//       <button className="sign-out-button"
//         onClick={() => signOut()}>
//           Sign Out
//       </button>
//     </div> :
//     <button className="sign-in-button"
//       onClick={() => signIn()}>
//         Sign In
//     </button>
//   }
//   </section>
// )
