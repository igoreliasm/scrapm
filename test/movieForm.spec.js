import React from 'react'
import { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from "enzyme-adapter-react-16";

import MovieForm from '../src/todo/movieForm'

Enzyme.configure({ adapter: new Adapter() });

describe('<MovieForm />', () => {

    it('renders movieForm', () => {
        const wrapper = shallow(<MovieForm list={ {'total' : undefined} } />)
        expect(wrapper.find('.movieForm').length).to.equal(1)
    })

    it('renders span', () => {
        const wrapper = shallow(<MovieForm list={{ 'total': 0 }} />)
        expect(wrapper.find('span').length).to.equal(1)
    })

    it('renders span', () => {
        const wrapper = shallow(<MovieForm list={{ 'total': 10 }} />)
        expect(wrapper.find('span').length).to.equal(1)
    })
})