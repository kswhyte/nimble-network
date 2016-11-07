import React from 'react'

import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'

import ContactForm from '../lib/components/ContactForm'
import Application from '../lib/components/Application'
import ContactList from '../lib/components/ContactList'

const sinon = require('sinon')

describe('ContactForm | Unit Test', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<ContactForm />)
  })
  xit('renders a "contact-form-and-list" ', () => {
    const wrapper = mount(<ContactForm />)
    assert(wrapper.find('.contact-form-and-list'))
  })
  it('renders "input-fields" ', () => {
    const wrapper = shallow(<ContactForm />)
    assert(wrapper.find('.input-form-field'))
  })
  it('renders as a <section>', () => {
    const wrapper = shallow(<ContactForm />)
    assert.equal(wrapper.type(), 'section')
  })
})

describe('ContactForm | Feature Test', () => {
  it('should change the "fullName" state with new contact info', () => {
    const wrapper = mount(<ContactForm />)
    const messageInput = wrapper.find('.full-name')
    messageInput.simulate('change', {target: {value: 'First Last Name'} })
    assert.equal(wrapper.state('fullName'), ('First Last Name'))

  })
  it('should change the "company" state with new contact info', () => {
    const wrapper = mount(<ContactForm />)
    const messageInput = wrapper.find('.company')
    messageInput.simulate('change', {target: {value: 'company name'} })
      assert.equal(wrapper.state('company'), ('company name'))
  })
  it('should change the "email1" state with new contact info', () => {
    const wrapper = mount(<ContactForm />)
    const messageInput = wrapper.find('.email1')
    messageInput.simulate('change', {target: {value: 'emailaddress1'} })
      assert.equal(wrapper.state('email1'), ('emailaddress1'))
  })
  it('should change the "email2" state with new contact info', () => {
    const wrapper = mount(<ContactForm />)
    const messageInput = wrapper.find('.email2')
    messageInput.simulate('change', {target: {value: 'emailaddress2'} })
    assert.equal(wrapper.state('email2'), ('emailaddress2'))
  })
  it('should change the "cell" state with new contact info', () => {
    const wrapper = mount(<ContactForm />)
    const messageInput = wrapper.find('.cell')
    messageInput.simulate('change', {target: {value: '303-349-8791'} })
      assert.equal(wrapper.state('cell'), ('303-349-8791'))
  })
  it('should change the "home" state with new contact info', () => {
    const wrapper = mount(<ContactForm />)
    const messageInput = wrapper.find('.home')
    messageInput.simulate('change', {target: {value: '303-349-8791'} })
      assert.equal(wrapper.state('home'), ('303-349-8791'))
  })
  it('should change the "work" state with new contact info', () => {
    const wrapper = mount(<ContactForm />)
    const messageInput = wrapper.find('.work')
    messageInput.simulate('change', {target: {value: '303-349-8791'} })
      assert.equal(wrapper.state('work'), ('303-349-8791'))
  })
  it('should change the "google" state with new contact info', () => {
    const wrapper = mount(<ContactForm />)
    const messageInput = wrapper.find('.google')
    messageInput.simulate('change', {target: {value: 'username'} })
      assert.equal(wrapper.state('google'), ('username'))
  })
  it('should change the "facebook" state with new contact info', () => {
    const wrapper = mount(<ContactForm />)
    const messageInput = wrapper.find('.facebook')
    messageInput.simulate('change', {target: {value: 'username'} })
      assert.equal(wrapper.state('facebook'), ('username'))
  })
  it('should change the "twitter" state with new contact info', () => {
    const wrapper = mount(<ContactForm />)
    const messageInput = wrapper.find('.twitter')
    messageInput.simulate('change', {target: {value: 'username'} })
      assert.equal(wrapper.state('twitter'), ('username'))
      console.log(wrapper.state('twitter'))
  })
  it('should change the "github" state with new contact info', () => {
    const wrapper = mount(<ContactForm />)
    const messageInput = wrapper.find('.github')
    messageInput.simulate('change', {target: {value: 'username'} })
      assert.equal(wrapper.state('github'), ('username'))
  })
  it('should change the "notes" state with new contact info', () => {
    const wrapper = mount(<ContactForm />)
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
