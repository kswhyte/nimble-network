import React from 'react'

import { shallow, mount, render } from 'enzyme'
import { assert } from 'chai'

import { SearchBar } from '../lib/components/SearchBar'

const sinon = require('sinon')

describe('SearchBar | Unit Test', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<SearchBar />)
  })
  it('should have an input element with 1 prop', function(){
    const wrapper = render(<SearchBar />)
    assert.equal(wrapper.find('.application-title').length, 1)
  })
  it('renders as a <section>', () => {
    const wrapper = shallow(<SearchBar />)
    assert.equal(wrapper.type(), 'section')
  })
})
