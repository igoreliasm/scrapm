import React from 'react'
import { expect } from 'chai'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Header from '../src/template/header'

Enzyme.configure({ adapter: new Adapter() })

describe('<Header />', () => {
  const props = {
    name: 'Scrapm'
  }

  it('renders span', () => {
    const wrapper = mount(<Header />)
    expect(wrapper.find('span').text()).to.equal('Finding movies')
  })

  it('renders h2', () => {
    const wrapper = mount(<Header {...props} />)
    expect(wrapper.find('h2').text()).to.equal(' Scrapm ')
  })
})
