import React from 'react'

import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'

import ContactForm from '../lib/components/ContactForm'
import Application from '../lib/components/Application'
import ContactList from '../lib/components/ContactList'
import contactList from './helpers/contactList'

const sinon = require('sinon')

describe('ContactList | Unit Tests', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<ContactList contactList={contactList} />)
  })
  it('renders a "contact-list" ', () => {
    const wrapper = shallow(<ContactList contactList={contactList} />)
    assert(wrapper.find('.contact-list'))
  })
  it('renders list "single-contacts" ', () => {
    const wrapper = mount(<ContactList contactList={contactList} />)
    assert(wrapper.find('.single-contact'))
  })
  it('renders as a <section>', () => {
    const wrapper = shallow(<ContactList contactList={contactList} />)
    assert.equal(wrapper.type(), 'section')
  })
  it('renders xml elements', () => {
    sinon.spy(ContactList.prototype, 'render')
    const wrapper = mount(<ContactList contactList={contactList} />)
    assert.equal(ContactList.prototype.render.calledOnce, true)
  })
})

describe('ContactList | Feature Test', () => {
  it.skip('should change the "hideDisplay" state with true/false', () => {
    const wrapper = mount(<ContactList />)
    const searchBar = wrapper.find('.')

    messageInput.simulate('change', {target: {value: 'true'} })
      assert.equal(wrapper.state('hideDisplay'), ('true'))
  })
})
