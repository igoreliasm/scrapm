import React from 'react'
import { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from "enzyme-adapter-react-16";

import Loader from '../src/template/loader'

Enzyme.configure({ adapter: new Adapter() });

describe('<Loader />', () => {

    it('renders div class loader', () => {
        const wrapper = mount(<Loader />);
        expect(wrapper.find('div').first().hasClass('loader')).to.equal(true)
    })
})