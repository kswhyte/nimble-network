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
