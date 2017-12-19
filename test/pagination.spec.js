import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from "enzyme-adapter-react-16";
import { expect } from 'chai';

import Pagination from '../src/template/pagination'

Enzyme.configure({ adapter: new Adapter() });

describe('<Pagination />', () => {
    // ps.: lib pagination's test :
    // https://github.com/vayser/react-js-pagination/blob/master/src/components/Pagination-test.js
    
    const props = {
        totalItemsCount: 30
    };

    it('renders class name footer', () => {
        const wrapper = mount(<Pagination {...props} />);
        expect(wrapper.find('.footer').length).to.equal(1);
    })

    it('not renders class name footer', () => {
        const wrapper = mount(<Pagination />);
        expect(wrapper.find('.footer').length).to.equal(0);
    })
})