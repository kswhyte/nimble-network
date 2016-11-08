import React from 'react'

import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'

import Contact from '../lib/components/Contact'
import Application from '../lib/components/Application'
import ContactList from '../lib/components/ContactList'
import contactList from './helpers/contactList'
import contact from './helpers/contact'

const sinon = require('sinon')

describe('Contact | Unit Test', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<Contact contact={contact}  />)
  })
  it('renders a "single-contact" ', () => {
    const wrapper = shallow(<Contact contact={contact}/>)
    assert(wrapper.find('.single-contact'))
  })

  it('renders as a <li>', () => {
    const wrapper = shallow(<Contact contact={contact}/>)
    assert.equal(wrapper.type(), 'li')
  })
})

describe('Contact | Feature Test', () => {
  it.skip('should change the "newFullName" state with new contact info', () => {
    const wrapper = mount(<Contact contact={contactList} />)
    const messageInput = wrapper.find('.edit-name')
    messageInput.simulate('change', {target: {value: 'New First Last Name'} })
    assert.equal(wrapper.state('newFullName'), ('New First Last Name'))
  })
  it('renders "input-fields" when edit is clicked ', () => {
    const wrapper = mount(<Contact contact={contact}/>)
    wrapper.find('.edit-button').simulate('click');
    assert(wrapper.find('.input-form-field'))
  })
  it.skip('should change the "company" state with new contact info', () => {
    const wrapper = mount(<Contact contact={contact} />)
    const editCompany = wrapper.find('.edit-company')
    editCompany.simulate('change', {target: {value: 'new company name'} })
      assert.equal(wrapper.state('newCompany'), ('new company name'))
  })
  it.skip('should change the "email1" state with new contact info', () => {
    const wrapper = mount(<Contact />)
    const messageInput = wrapper.find('.email1')
    messageInput.simulate('change', {target: {value: 'emailaddress1'} })
      assert.equal(wrapper.state('email1'), ('emailaddress1'))
  })
  it.skip('should change the "email2" state with new contact info', () => {
    const wrapper = mount(<Contact />)
    const messageInput = wrapper.find('.email2')
    messageInput.simulate('change', {target: {value: 'emailaddress2'} })
    assert.equal(wrapper.state('email2'), ('emailaddress2'))
  })
  it.skip('should change the "cell" state with new contact info', () => {
    const wrapper = mount(<Contact />)
    const messageInput = wrapper.find('.cell')
    messageInput.simulate('change', {target: {value: '303-349-8791'} })
      assert.equal(wrapper.state('cell'), ('303-349-8791'))
  })
  it.skip('should change the "home" state with new contact info', () => {
    const wrapper = mount(<Contact />)
    const messageInput = wrapper.find('.home')
    messageInput.simulate('change', {target: {value: '303-349-8791'} })
      assert.equal(wrapper.state('home'), ('303-349-8791'))
  })
  it.skip('should change the "work" state with new contact info', () => {
    const wrapper = mount(<Contact />)
    const messageInput = wrapper.find('.work')
    messageInput.simulate('change', {target: {value: '303-349-8791'} })
      assert.equal(wrapper.state('work'), ('303-349-8791'))
  })
  it.skip('should change the "google" state with new contact info', () => {
    const wrapper = mount(<Contact />)
    const messageInput = wrapper.find('.google')
    messageInput.simulate('change', {target: {value: 'username'} })
      assert.equal(wrapper.state('google'), ('username'))
  })
  it.skip('should change the "facebook" state with new contact info', () => {
    const wrapper = mount(<Contact />)
    const messageInput = wrapper.find('.facebook')
    messageInput.simulate('change', {target: {value: 'username'} })
      assert.equal(wrapper.state('facebook'), ('username'))
  })
  it.skip('should change the "twitter" state with new contact info', () => {
    const wrapper = mount(<Contact />)
    const messageInput = wrapper.find('.twitter')
    messageInput.simulate('change', {target: {value: 'username'} })
      assert.equal(wrapper.state('twitter'), ('username'))
      console.log(wrapper.state('twitter'))
  })
  it.skip('should change the "github" state with new contact info', () => {
    const wrapper = mount(<Contact />)
    const messageInput = wrapper.find('.github')
    messageInput.simulate('change', {target: {value: 'username'} })
      assert.equal(wrapper.state('github'), ('username'))
  })
  it.skip('should change the "notes" state with new contact info', () => {
    const wrapper = mount(<Contact />)
    const messageInput = wrapper.find('.notes-text-area')
    messageInput.simulate('change', {target: {value: 'best friend ever'} })
      assert.equal(wrapper.state('notes'), ('best friend ever'))
  })
  xit('can render a new contact when "Save Contact" button is clicked"', () => {
    const wrapper = mount(<Application />)
    const messageInput = wrapper.find('.contact-form')
    messageInput.simulate('change', {target: {value: 'goodmorning'} })
    wrapper.find('.save-contact-button').simulate('click')
      assert.equal(wrapper.text(), ('goodmorning'))
  })
})
