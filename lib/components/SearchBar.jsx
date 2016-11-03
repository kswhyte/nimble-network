import React from 'react'

export const SearchBar = ({ updateSearch }) => {
  return(
    <section className='search-bar-header'>
      <p className='application-title'>My
        <span className='nimble'> Nimble</span>
        <span className='network'>Network</span>
      </p>
      <input
        className='search-bar'
        onChange={updateSearch}
        placeholder='Search Contacts...'
      />
    </section>
  )
}