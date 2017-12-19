import React from 'react'
import { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from "enzyme-adapter-react-16";

import MovieList from '../src/todo/movieList'

Enzyme.configure({ adapter: new Adapter() });

describe('<MovieList />', () => {
    const list = {
        "page": "1", "per_page": 10, "total": 4, "total_pages": 1, 
        "data": [{ 
            "Poster": "http://bit.ly/2CC4y7B", 
            "Title": "AAA, la película: Sin límite en el tiempo", 
            "Type": "movie", 
            "Year": 2010, 
            "imdbID": "tt1484065" 
        }] 
    }

    it('renders row', () => {
        const wrapper = shallow(<MovieList list={ { 'data': undefined } } />);
        expect(wrapper.find('.row').length).to.equal(1)
    })

    it('renders description', () => {
        const wrapper = shallow(<MovieList list={list} />);
        expect(wrapper.find('.description').length).to.equal(1)
    })

    it('renders poster', () => {
        const wrapper = shallow(<MovieList list={list} />);
        expect(wrapper.find('.poster').length).to.equal(1)
    })

    it('renders h5', () => {
        const wrapper = shallow(<MovieList list={list} />);
        expect(wrapper.find('h5').length).to.equal(1)
    })

    it('renders p', () => {
        const wrapper = shallow(<MovieList list={list} />);
        expect(wrapper.find('p').length).to.equal(1)
    })
})