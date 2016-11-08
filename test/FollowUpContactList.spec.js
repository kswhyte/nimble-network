import React from 'react'

import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'

import ContactForm from '../lib/components/ContactForm'
import Application from '../lib/components/Application'
import FollowUpContactList from '../lib/components/FollowUpContactList'
import followUpContacts from './helpers/followUpContacts'
import contactList from './helpers/contactList'

const sinon = require('sinon')

describe('FollowUpContactList | Unit Tests', () => {
  it.skip('can mount with no properties', () => {
    const wrapper = shallow(<FollowUpContactList contactList={contactList} followUpContacts={followUpContacts} />)
  })
  it.skip('renders a "follow-up-contact-list" ', () => {
    const wrapper = shallow(<FollowUpContactList contactList={contactList} followUpContacts={followUpContacts} />)
    assert(wrapper.find('.follow-up-contact-list'))
  })
  it.skip('renders as a <section>', () => {
    const wrapper = shallow(<FollowUpContactList contactList={contactList} followUpContacts={followUpContacts} />)
    assert.equal(wrapper.type(), 'section')
  })
  it.skip('renders xml elements', () => {
    sinon.spy(FollowUpContactList.prototype, 'render')
    const wrapper = mount(<FollowUpContactList followUpContacts={followUpContacts} contactList={contactList} />)
    assert.equal(FollowUpContactList.prototype.render.calledOnce, true)
  })
})

describe('ContactList | Feature Test', () => {
  it.skip('should change the "hideDisplay" state with true/false', () => {
    const wrapper = mount(<ContactList />)
    const messageInput = wrapper.find('.contact-form-and-list')

    messageInput.simulate('change', {target: {value: 'true'} })
    setTimeout(() => {
      assert.equal(wrapper.state('hideDisplay'), ('true'))
    }, 5000)
  })
})
