import React, { Component } from 'react'
import axios from 'axios'
import Pagination from 'react-js-pagination'

import Header from '../template/header'
import MovieForm from './movieForm'
import MovieList from './movieList'
import PaginationRender from '../template/pagination'

const API = 'https://jsonmock.hackerrank.com/api/movies/search/?Title='

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = { movie: '', list: [], hidden: false, activePage: 1, total_pages: 0, total_items: 0 }

        this.handleChange = this.handleChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handlePageChange = this.handlePageChange.bind(this)
    }

    handlePageChange(pageNumber) {
        this.handleSearch(pageNumber)
        this.setState({ activePage: pageNumber });
    }

    handleSearch(page = 1) {
        this.setState({ ...this.state, hidden: true })

        axios.get(`${API}${this.state.movie}&page=${page}`)
        .then(res => {
            setTimeout( () => { 
                this.setState({ 
                    ...this.state, 
                    movie: '', 
                    list: res.data, 
                    hidden: false, 
                    total_pages: res.data['total_pages'],
                    total_items: res.data['total']
                })
            }, 2000);
        })
    }

    handleChange(e) {
        this.setState({ ...this.state, movie: e.target.value })
    }

    render() {
        return (
            <div>
                <Header name="Scrapm" small="finding movies"></Header>
                <MovieForm 
                    movie={this.state.movie} 
                    handleSearch={this.handleSearch} 
                    handleChange={this.handleChange}
                    list={this.state.list}
                />
                <MovieList 
                    list={this.state.list} 
                    hidden={this.state.hidden} 
                />
                <PaginationRender
                    activePage={this.state.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={this.state.total_items}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                />
            </div>
        )
    }
}