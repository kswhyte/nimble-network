import React from 'react'

import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'
import Application from '../lib/components/Application'
import ContactForm from '../lib/components/ContactForm'

const sinon = require('sinon')

describe('Application | Unit Tests', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<Application />)
});
  it('has constructor that sets state of searchText to an empty string', function() {
  const wrapper = shallow(<Application />);
  expect(wrapper.state('searchText')).deep.equal('');
});
  it('has constructor that sets state of contactList to an empty array', function() {
  const wrapper = shallow(<Application />);
  expect(wrapper.state('contactList')).deep.equal([]);
});
  it('has constructor that sets state of followUpContacts to an empty array', function() {
  const wrapper = shallow(<Application />);
  expect(wrapper.state('followUpContacts')).deep.equal([]);
});
  it('has constructor that sets state of user to null', function() {
  const wrapper = shallow(<Application />);
  expect(wrapper.state('user')).deep.equal(null);
});
  it('has constructor that sets state of userDatabase to null', function() {
    const wrapper = shallow(<Application />);
    expect(wrapper.state('usersDatabase')).to.equal(null);
});

  it('renders as a <section>', () => {
    const wrapper = shallow(<Application />)
    assert.equal(wrapper.type(), 'section')
  })
  it('can call componentDidMount', () => {
    sinon.spy(Application.prototype, 'componentDidMount')
    const wrapper = mount(<Application />)
    assert.equal(Application.prototype.componentDidMount.calledOnce, true)
  })
  it('should have a search bar with 1 prop', function(){
    const wrapper = render(<Application />)
    assert.equal(wrapper.find('.search-bar-header').length, 1)
  })
  it('should have a login/logout button', function(){
    const wrapper = mount(<Application />)
    assert.equal(wrapper.find('.login-btn').length, 1)
  })
  it('renders the LoginLogout component', () => {
    const wrapper = mount(<Application />)
    assert.equal(wrapper.find('.login-status-bar').length,1)
    })
  it('renders xml elements', () => {
    sinon.spy(Application.prototype, 'render')
    const wrapper = mount(<Application />)
    assert.equal(Application.prototype.render.calledOnce, true)
  })
  it('renders the SearchBar component', () => {
    const wrapper = mount(<Application />)
    assert.equal(wrapper.find('.search-bar-header').length, 1)
  })
  it('renders the ContactForm component', () => {
    const wrapper = mount(<Application />)
    assert.equal(wrapper.find('.contact-form-and-list').length,1)
  })
  it('renders the FollowUpContactList component', () => {
    const wrapper = mount(<Application />)
    assert.equal(wrapper.find('.follow-up-contact-section').length,1)
  })
  it('renders the ContactList component', () => {
    const wrapper = mount(<Application />)
    assert.equal(wrapper.find('.contact-section').length,1)
  })
  })

describe('Application | Feature Tests', () => {
  it('sets the searchText state to the value entered in the search bar', () => {
    const wrapper = mount(<Application />)
    const searchInput = wrapper.find('.search-bar')
    searchInput.simulate('change', {target: {value: 'Kristen'} })
    assert.equal(wrapper.state('searchText'), ('Kristen'))
});
 it.skip('updates the state of userDatabase when a new contact is created', () => {
   const wrapper = mount(<Application />)
   const fullName = wrapper.find()
 })
})
